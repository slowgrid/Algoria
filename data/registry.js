(function exposeAlgoriaDataRegistry(global) {
  "use strict";

  const GLOBAL_NAME = "AlgoriaDataRegistry";
  const PART_ID_PATTERN = /^[a-z0-9][a-z0-9._-]*$/;
  const ALLOWED_PART_KEYS = new Set([
    "id",
    "meta",
    "sources",
    "entities",
    "relations",
    "hierarchy"
  ]);
  const partsById = new Map();
  let assembledData = null;

  if (global[GLOBAL_NAME]) {
    throw new Error(`${GLOBAL_NAME} has already been initialized.`);
  }

  function isObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function assertArrayField(part, fieldName) {
    if (part[fieldName] !== undefined && !Array.isArray(part[fieldName])) {
      throw new TypeError(
        `Data part "${part.id}" field "${fieldName}" must be an array.`
      );
    }
  }

  function normalizeHierarchy(part) {
    if (part.hierarchy === undefined) {
      return Object.freeze({ rootId: null, nodes: Object.freeze([]) });
    }
    if (!isObject(part.hierarchy)) {
      throw new TypeError(
        `Data part "${part.id}" field "hierarchy" must be an object.`
      );
    }

    const unknownKeys = Object.keys(part.hierarchy).filter(
      (key) => key !== "rootId" && key !== "nodes"
    );
    if (unknownKeys.length > 0) {
      throw new Error(
        `Data part "${part.id}" hierarchy has unknown fields: ${unknownKeys.join(
          ", "
        )}.`
      );
    }
    if (
      part.hierarchy.rootId !== undefined &&
      (typeof part.hierarchy.rootId !== "string" ||
        part.hierarchy.rootId.trim() === "")
    ) {
      throw new TypeError(
        `Data part "${part.id}" hierarchy.rootId must be a non-empty string.`
      );
    }
    if (
      part.hierarchy.nodes !== undefined &&
      !Array.isArray(part.hierarchy.nodes)
    ) {
      throw new TypeError(
        `Data part "${part.id}" hierarchy.nodes must be an array.`
      );
    }

    return Object.freeze({
      rootId: part.hierarchy.rootId || null,
      nodes: Object.freeze([...(part.hierarchy.nodes || [])])
    });
  }

  function normalizePart(part) {
    if (!isObject(part)) {
      throw new TypeError("Algoria data part must be an object.");
    }
    if (typeof part.id !== "string" || !PART_ID_PATTERN.test(part.id)) {
      throw new TypeError(
        "Algoria data part id must use lowercase letters, numbers, dots, underscores, or hyphens."
      );
    }

    const unknownKeys = Object.keys(part).filter(
      (key) => !ALLOWED_PART_KEYS.has(key)
    );
    if (unknownKeys.length > 0) {
      throw new Error(
        `Data part "${part.id}" has unknown fields: ${unknownKeys.join(", ")}.`
      );
    }
    if (part.meta !== undefined && !isObject(part.meta)) {
      throw new TypeError(
        `Data part "${part.id}" field "meta" must be an object.`
      );
    }

    for (const fieldName of ["sources", "entities", "relations"]) {
      assertArrayField(part, fieldName);
    }

    return Object.freeze({
      id: part.id,
      meta: part.meta || null,
      sources: Object.freeze([...(part.sources || [])]),
      entities: Object.freeze([...(part.entities || [])]),
      relations: Object.freeze([...(part.relations || [])]),
      hierarchy: normalizeHierarchy(part)
    });
  }

  function registerPart(part) {
    if (assembledData) {
      throw new Error("Algoria data has already been assembled; no more parts can be registered.");
    }

    const normalizedPart = normalizePart(part);
    if (partsById.has(normalizedPart.id)) {
      throw new Error(
        `Algoria data part "${normalizedPart.id}" is already registered.`
      );
    }
    partsById.set(normalizedPart.id, normalizedPart);
    return normalizedPart;
  }

  function validateRequiredParts(requiredPartIds) {
    if (!Array.isArray(requiredPartIds)) {
      throw new TypeError("build() option requiredPartIds must be an array.");
    }

    const invalidPartIds = requiredPartIds.filter(
      (partId) => typeof partId !== "string" || !PART_ID_PATTERN.test(partId)
    );
    if (invalidPartIds.length > 0) {
      throw new TypeError("build() requiredPartIds contains an invalid part id.");
    }

    const missingPartIds = [...new Set(requiredPartIds)].filter(
      (partId) => !partsById.has(partId)
    );
    if (missingPartIds.length > 0) {
      throw new Error(
        `Missing required Algoria data parts: ${missingPartIds.join(", ")}.`
      );
    }
  }

  function mergeCollection(fieldName, displayName) {
    const merged = [];
    const ownerByRecordId = new Map();

    for (const part of partsById.values()) {
      for (const record of part[fieldName]) {
        if (!isObject(record)) {
          throw new TypeError(
            `${displayName} in data part "${part.id}" must be an object.`
          );
        }
        if (typeof record.id !== "string" || record.id.trim() === "") {
          throw new TypeError(
            `${displayName} in data part "${part.id}" must have a non-empty string id.`
          );
        }
        if (ownerByRecordId.has(record.id)) {
          throw new Error(
            `Duplicate ${displayName} id "${record.id}" in data parts ` +
              `"${ownerByRecordId.get(record.id)}" and "${part.id}".`
          );
        }
        ownerByRecordId.set(record.id, part.id);
        merged.push(record);
      }
    }

    return Object.freeze(merged);
  }

  function mergeHierarchyNodes() {
    const merged = [];
    const ownerByNodeId = new Map();

    for (const part of partsById.values()) {
      for (const node of part.hierarchy.nodes) {
        if (!isObject(node)) {
          throw new TypeError(
            `Hierarchy node in data part "${part.id}" must be an object.`
          );
        }
        if (typeof node.id !== "string" || node.id.trim() === "") {
          throw new TypeError(
            `Hierarchy node in data part "${part.id}" must have a non-empty string id.`
          );
        }
        if (ownerByNodeId.has(node.id)) {
          throw new Error(
            `Duplicate Hierarchy node id "${node.id}" in data parts ` +
              `"${ownerByNodeId.get(node.id)}" and "${part.id}".`
          );
        }
        ownerByNodeId.set(node.id, part.id);
        merged.push(node);
      }
    }

    return Object.freeze(merged);
  }

  function applyImplementationPolicy(entities, meta) {
    const allowedStatuses = new Set(["verified", "illustrative", "pending"]);
    const policy = meta.implementationPolicy || {};
    const defaultStatus = policy.defaultStatus || "pending";
    if (!allowedStatuses.has(defaultStatus)) {
      throw new Error(
        `Implementation policy defaultStatus "${defaultStatus}" is invalid.`
      );
    }

    const statusByAlgorithmId = new Map();
    for (const [field, status] of [
      ["verifiedAlgorithmIds", "verified"],
      ["illustrativeAlgorithmIds", "illustrative"],
      ["pendingAlgorithmIds", "pending"]
    ]) {
      const algorithmIds = policy[field] || [];
      if (!Array.isArray(algorithmIds)) {
        throw new TypeError(`Implementation policy ${field} must be an array.`);
      }
      for (const algorithmId of algorithmIds) {
        if (statusByAlgorithmId.has(algorithmId)) {
          throw new Error(
            `Implementation policy assigns more than one status to "${algorithmId}".`
          );
        }
        statusByAlgorithmId.set(algorithmId, status);
      }
    }

    const implementationEntityIds = new Set(
      entities
        .filter((entity) => Array.isArray(entity.implementations))
        .map((entity) => entity.id)
    );
    for (const algorithmId of statusByAlgorithmId.keys()) {
      if (!implementationEntityIds.has(algorithmId)) {
        throw new Error(
          `Implementation policy references Algorithm without code: "${algorithmId}".`
        );
      }
    }

    return Object.freeze(
      entities.map((entity) => {
        if (!Array.isArray(entity.implementations)) return entity;
        const configuredStatus = statusByAlgorithmId.get(entity.id) || defaultStatus;
        return {
          ...entity,
          implementations: entity.implementations.map((implementation) => ({
            ...implementation,
            status: implementation.status || configuredStatus
          }))
        };
      })
    );
  }

  function build(options = {}) {
    const requiredPartIds = options.requiredPartIds || [];
    validateRequiredParts(requiredPartIds);

    if (assembledData) {
      return assembledData;
    }
    if (partsById.size === 0) {
      throw new Error("Cannot assemble Algoria data because no parts are registered.");
    }

    const metaProviders = [...partsById.values()].filter((part) => part.meta);
    if (metaProviders.length !== 1) {
      throw new Error(
        `Algoria data requires exactly one Meta provider; found ${metaProviders.length}.`
      );
    }

    const rootProviders = [...partsById.values()].filter(
      (part) => part.hierarchy.rootId
    );
    if (rootProviders.length !== 1) {
      throw new Error(
        `Algoria data requires exactly one hierarchy root provider; found ${rootProviders.length}.`
      );
    }

    const hierarchyNodes = mergeHierarchyNodes();
    const rootId = rootProviders[0].hierarchy.rootId;
    if (!hierarchyNodes.some((node) => node.id === rootId)) {
      throw new Error(`Hierarchy root node "${rootId}" is not registered.`);
    }

    const meta = metaProviders[0].meta;
    const entities = mergeCollection("entities", "Entity");
    assembledData = Object.freeze({
      meta,
      sources: mergeCollection("sources", "Source"),
      entities: applyImplementationPolicy(entities, meta),
      hierarchy: Object.freeze({ rootId, nodes: hierarchyNodes }),
      relations: mergeCollection("relations", "Relation")
    });
    return assembledData;
  }

  const registry = Object.freeze({
    registerPart,
    build,
    hasPart(partId) {
      return partsById.has(partId);
    },
    getPartIds() {
      return Object.freeze([...partsById.keys()]);
    },
    getPartSummaries() {
      return Object.freeze(
        [...partsById.values()].map((part) =>
          Object.freeze({
            id: part.id,
            hasMeta: Boolean(part.meta),
            sourceCount: part.sources.length,
            entityCount: part.entities.length,
            relationCount: part.relations.length,
            hierarchyRootId: part.hierarchy.rootId,
            hierarchyNodeCount: part.hierarchy.nodes.length
          })
        )
      );
    },
    isBuilt() {
      return assembledData !== null;
    }
  });

  global[GLOBAL_NAME] = registry;
})(typeof window !== "undefined" ? window : globalThis);
