(function exposeAlgoriaCore(global) {
  "use strict";

  const ENTITY_TYPES = new Set([
    "algorithm",
    "problem",
    "technique",
    "data_structure",
    "domain"
  ]);

  const HIERARCHY_KINDS = new Set(["group", "entity"]);
  const SOURCE_TYPES = new Set([
    "paper",
    "standard",
    "book",
    "documentation",
    "article",
    "reference"
  ]);
  const QUALITY_TIERS = Object.freeze({ catalog: 0, standard: 1, deep: 2 });
  const QUALITY_STATUSES = new Set(["draft", "reviewed"]);
  const IMPLEMENTATION_STATUSES = new Set([
    "verified",
    "illustrative",
    "pending"
  ]);
  const LOCALIZED_TEXT_FIELDS = new Set(["summary", "description"]);
  const LOCALIZED_LIST_FIELDS = new Set([
    "advantages",
    "disadvantages",
    "useCases"
  ]);
  const LINEAGE_EVIDENCE_RELATION_TYPES = new Set([
    "derived_from",
    "variant_of",
    "inspired_by",
    "improves_upon"
  ]);

  const RELATION_RULES = Object.freeze({
    derived_from: ["algorithm", "algorithm"],
    variant_of: ["algorithm", "algorithm"],
    inspired_by: ["algorithm", "algorithm"],
    related_to: ["algorithm", "algorithm"],
    solves: ["algorithm", "problem"],
    uses_technique: ["algorithm", "technique"],
    uses_data_structure: ["algorithm", "data_structure"],
    belongs_to_domain: ["algorithm", "domain"],
    improves_upon: ["algorithm", "algorithm"],
    hybrid_of: ["algorithm", "algorithm"]
  });
  const SEMANTIC_PLACEMENT_RELATION_BY_TARGET_TYPE = Object.freeze({
    problem: "solves",
    technique: "uses_technique",
    data_structure: "uses_data_structure",
    domain: "belongs_to_domain"
  });

  const LINEAGE_RELATION_TYPES = new Set([
    "derived_from",
    "variant_of",
    "improves_upon"
  ]);

  const ALGORITHM_ARRAY_FIELDS = [
    "advantages",
    "disadvantages",
    "useCases",
    "authors",
    "papers",
    "implementations",
    "references"
  ];

  const STANDARD_QUALITY_CHECKS = Object.freeze([
    "summary.ko",
    "summary.en",
    "description.ko",
    "description.en",
    "solves",
    "belongs_to_domain",
    "uses_technique",
    "complexity.time",
    "complexity.space",
    "pseudocode",
    "advantages.ko",
    "advantages.en",
    "disadvantages.ko",
    "disadvantages.en",
    "useCases.ko",
    "useCases.en",
    "references>=2"
  ]);

  const DEEP_QUALITY_CHECKS = Object.freeze([
    "introduced",
    "authors",
    "historical_source",
    "implementations",
    "references>=3"
  ]);

  function isRecord(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isHttpUrl(value) {
    if (!isNonEmptyString(value)) {
      return false;
    }

    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch (_error) {
      return false;
    }
  }

  function hasNonEmptyArray(value, minimum = 1) {
    return Array.isArray(value) && value.filter(Boolean).length >= minimum;
  }

  function hasComplexityValue(value) {
    if (isNonEmptyString(value)) {
      return true;
    }

    return (
      isRecord(value) &&
      Object.values(value).some((entry) => isNonEmptyString(entry))
    );
  }

  function getLocalizedContentValue(entity, locale, field) {
    return isRecord(entity.content) && isRecord(entity.content[locale])
      ? entity.content[locale][field]
      : undefined;
  }

  function getReferenceCount(entity) {
    const signatures = new Set();

    for (const sourceId of entity.referenceIds || []) {
      if (isNonEmptyString(sourceId)) signatures.add(`id:${sourceId}`);
    }

    for (const resource of [
      ...(entity.papers || []),
      ...(entity.references || [])
    ]) {
      if (!isRecord(resource)) continue;
      const signature = resource.url || resource.title || resource.name;
      if (isNonEmptyString(signature)) signatures.add(`inline:${signature}`);
    }

    return signatures.size;
  }

  function evaluateAlgorithmQuality(entity, context) {
    const outgoing = context.outgoingRelationsByEntityId.get(entity.id) || [];
    const relationTypes = new Set(outgoing.map((relation) => relation.type));
    const notApplicable = isRecord(entity.quality?.notApplicable)
      ? entity.quality.notApplicable
      : {};
    const hasNotApplicableReason = (check) =>
      isRecord(notApplicable[check]) &&
      ["ko", "en"].every((locale) =>
        isNonEmptyString(notApplicable[check][locale])
      );
    const referenceCount = getReferenceCount(entity);
    const referencedSources = (entity.referenceIds || [])
      .map((sourceId) => context.sourceById.get(sourceId))
      .filter(Boolean);
    const hasHistoricalSource =
      hasNonEmptyArray(entity.papers) ||
      referencedSources.some((source) =>
        source.type === "paper" || source.type === "standard"
      );
    const checks = {
      "summary.ko": isNonEmptyString(
        getLocalizedContentValue(entity, "ko", "summary")
      ),
      "summary.en": isNonEmptyString(
        getLocalizedContentValue(entity, "en", "summary")
      ),
      "description.ko": isNonEmptyString(
        getLocalizedContentValue(entity, "ko", "description")
      ),
      "description.en": isNonEmptyString(
        getLocalizedContentValue(entity, "en", "description")
      ),
      solves: relationTypes.has("solves"),
      belongs_to_domain: relationTypes.has("belongs_to_domain"),
      uses_technique:
        relationTypes.has("uses_technique") ||
        hasNotApplicableReason("uses_technique"),
      "complexity.time": hasComplexityValue(entity.complexity?.time),
      "complexity.space": hasComplexityValue(entity.complexity?.space),
      pseudocode: isNonEmptyString(entity.pseudocode),
      "advantages.ko": hasNonEmptyArray(
        getLocalizedContentValue(entity, "ko", "advantages"),
        2
      ),
      "advantages.en": hasNonEmptyArray(
        getLocalizedContentValue(entity, "en", "advantages"),
        2
      ),
      "disadvantages.ko": hasNonEmptyArray(
        getLocalizedContentValue(entity, "ko", "disadvantages"),
        2
      ),
      "disadvantages.en": hasNonEmptyArray(
        getLocalizedContentValue(entity, "en", "disadvantages"),
        2
      ),
      "useCases.ko": hasNonEmptyArray(
        getLocalizedContentValue(entity, "ko", "useCases"),
        2
      ),
      "useCases.en": hasNonEmptyArray(
        getLocalizedContentValue(entity, "en", "useCases"),
        2
      ),
      "references>=2": referenceCount >= 2,
      introduced:
        isRecord(entity.introduced) &&
        (Number.isInteger(entity.introduced.year) ||
          isNonEmptyString(entity.introduced.note)),
      authors: hasNonEmptyArray(entity.authors),
      historical_source: hasHistoricalSource,
      implementations: hasNonEmptyArray(entity.implementations),
      "references>=3": referenceCount >= 3
    };
    const standardMissing = STANDARD_QUALITY_CHECKS.filter(
      (check) => !checks[check]
    );
    const deepMissing = DEEP_QUALITY_CHECKS.filter((check) => !checks[check]);
    const achievedTier =
      standardMissing.length > 0
        ? "catalog"
        : deepMissing.length > 0
          ? "standard"
          : "deep";

    return {
      entityId: entity.id,
      achievedTier,
      declaredTier: entity.quality?.tier || null,
      status: entity.quality?.status || null,
      referenceCount,
      checks,
      standardMissing,
      deepMissing
    };
  }

  function createContentQualityReport(data, context) {
    const algorithms = data.entities
      .filter((entity) => entity.type === "algorithm")
      .map((entity) => evaluateAlgorithmQuality(entity, context));
    const tierCounts = { catalog: 0, standard: 0, deep: 0 };
    const coverage = {};

    for (const check of [
      ...STANDARD_QUALITY_CHECKS,
      ...DEEP_QUALITY_CHECKS
    ]) {
      coverage[check] = algorithms.filter(
        (algorithm) => algorithm.checks[check]
      ).length;
    }

    for (const algorithm of algorithms) {
      tierCounts[algorithm.achievedTier] += 1;
    }

    return {
      totalAlgorithms: algorithms.length,
      tierCounts,
      coverage,
      algorithms
    };
  }

  function pushIndex(map, key, value) {
    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(value);
  }

  function compareByOrder(left, right) {
    const leftOrder = Number.isFinite(left.order) ? left.order : 0;
    const rightOrder = Number.isFinite(right.order) ? right.order : 0;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return left.id.localeCompare(right.id);
  }

  function findNearestAncestorEntityNode(node, hierarchyById) {
    if (!isRecord(node) || !(hierarchyById instanceof Map)) {
      return null;
    }

    const visited = new Set();
    let current =
      node.parentId === null ? null : hierarchyById.get(node.parentId);

    while (current) {
      if (visited.has(current.id)) {
        return null;
      }

      visited.add(current.id);

      if (current.kind === "entity") {
        return current;
      }

      current =
        current.parentId === null
          ? null
          : hierarchyById.get(current.parentId);
    }

    return null;
  }

  function validateData(data) {
    const errors = [];
    const warnings = [];

    if (!isRecord(data)) {
      return {
        errors: ["ALGORIA_DATA must be an object."],
        warnings
      };
    }

    if (!isRecord(data.meta)) {
      errors.push("meta must be an object.");
    } else if (!Number.isInteger(data.meta.schemaVersion)) {
      errors.push("meta.schemaVersion must be an integer.");
    } else {
      if (
        !Array.isArray(data.meta.locales) ||
        data.meta.locales.length === 0
      ) {
        errors.push("meta.locales must be a non-empty array.");
      }
      if (
        !isNonEmptyString(data.meta.defaultLocale) ||
        !data.meta.locales.includes(data.meta.defaultLocale)
      ) {
        errors.push("meta.defaultLocale must be included in meta.locales.");
      }
      if (data.meta.schemaVersion >= 2) {
        if (!Number.isInteger(data.meta.contentPolicyVersion)) {
          errors.push("meta.contentPolicyVersion must be an integer.");
        }
        if (!isRecord(data.meta.qualityGate)) {
          errors.push("meta.qualityGate must be an object.");
        } else {
          if (
            !Object.hasOwn(
              QUALITY_TIERS,
              data.meta.qualityGate.minimumNewAlgorithmTier
            )
          ) {
            errors.push(
              "meta.qualityGate.minimumNewAlgorithmTier must be a supported quality tier."
            );
          }
          if (!Array.isArray(data.meta.qualityGate.legacyDraftAlgorithmIds)) {
            errors.push(
              "meta.qualityGate.legacyDraftAlgorithmIds must be an array."
            );
          }
          if (
            !Object.hasOwn(
              QUALITY_TIERS,
              data.meta.qualityGate.reviewedMinimumTier
            )
          ) {
            errors.push(
              "meta.qualityGate.reviewedMinimumTier must be a supported quality tier."
            );
          }
          if (
            !Array.isArray(data.meta.qualityGate.reviewedForbiddenTokens) ||
            data.meta.qualityGate.reviewedForbiddenTokens.some(
              (token) => !isNonEmptyString(token)
            )
          ) {
            errors.push(
              "meta.qualityGate.reviewedForbiddenTokens must be an array of non-empty strings."
            );
          }
        }
      }
    }

    if (!Array.isArray(data.sources)) {
      errors.push("sources must be an array.");
    }

    if (!Array.isArray(data.entities)) {
      errors.push("entities must be an array.");
    }

    if (!isRecord(data.hierarchy)) {
      errors.push("hierarchy must be an object.");
    } else if (!Array.isArray(data.hierarchy.nodes)) {
      errors.push("hierarchy.nodes must be an array.");
    }

    if (!Array.isArray(data.relations)) {
      errors.push("relations must be an array.");
    }

    if (errors.length > 0) {
      return { errors, warnings };
    }

    const entityById = new Map();
    const sourceById = new Map();
    const hierarchyById = new Map();
    const relationById = new Map();
    const globalIds = new Map();

    function registerId(id, namespace) {
      if (!isNonEmptyString(id)) {
        errors.push(`${namespace} has a missing or empty id.`);
        return false;
      }

      if (globalIds.has(id)) {
        errors.push(
          `Duplicate id "${id}" in ${namespace}; first used in ${globalIds.get(id)}.`
        );
        return false;
      }

      globalIds.set(id, namespace);
      return true;
    }

    for (const source of data.sources) {
      if (!isRecord(source)) {
        errors.push("Every sources entry must be an object.");
        continue;
      }

      const idIsValid = registerId(source.id, "sources");

      if (!SOURCE_TYPES.has(source.type)) {
        errors.push(
          `Source "${source.id || "(unknown)"}" has unsupported type "${source.type}".`
        );
      }
      if (!isNonEmptyString(source.title)) {
        errors.push(`Source "${source.id || "(unknown)"}" must have a title.`);
      }
      if (!isHttpUrl(source.url)) {
        errors.push(
          `Source "${source.id || "(unknown)"}" must have an http(s) URL.`
        );
      }
      if (source.year !== undefined && !Number.isInteger(source.year)) {
        errors.push(`Source "${source.id}" year must be an integer.`);
      }
      if (source.authors !== undefined && !Array.isArray(source.authors)) {
        errors.push(`Source "${source.id}" authors must be an array.`);
      }

      if (idIsValid) {
        sourceById.set(source.id, source);
      }
    }

    for (const entity of data.entities) {
      if (!isRecord(entity)) {
        errors.push("Every entities entry must be an object.");
        continue;
      }

      const idIsValid = registerId(entity.id, "entities");

      if (!ENTITY_TYPES.has(entity.type)) {
        errors.push(
          `Entity "${entity.id || "(unknown)"}" has unsupported type "${entity.type}".`
        );
      }

      if (!isNonEmptyString(entity.name)) {
        errors.push(`Entity "${entity.id || "(unknown)"}" must have a name.`);
      }

      if (!isRecord(entity.localizedNames)) {
        errors.push(`Entity "${entity.id}" localizedNames must be an object.`);
      } else {
        for (const locale of data.meta.locales || []) {
          if (!isNonEmptyString(entity.localizedNames[locale])) {
            errors.push(
              `Entity "${entity.id}" is missing localizedNames.${locale}.`
            );
          }
        }
      }

      if (entity.aliases !== undefined && !Array.isArray(entity.aliases)) {
        errors.push(`Entity "${entity.id}" aliases must be an array.`);
      }

      if (!isRecord(entity.content)) {
        errors.push(`Entity "${entity.id}" content must be an object.`);
      } else {
        for (const locale of data.meta.locales || []) {
          const localizedContent = entity.content[locale];
          if (!isRecord(localizedContent)) {
            errors.push(
              `Entity "${entity.id}" content.${locale} must be an object.`
            );
            continue;
          }

          for (const field of LOCALIZED_TEXT_FIELDS) {
            if (
              localizedContent[field] !== undefined &&
              typeof localizedContent[field] !== "string"
            ) {
              errors.push(
                `Entity "${entity.id}" content.${locale}.${field} must be a string.`
              );
            }
          }
          for (const field of LOCALIZED_LIST_FIELDS) {
            if (
              localizedContent[field] !== undefined &&
              !Array.isArray(localizedContent[field])
            ) {
              errors.push(
                `Entity "${entity.id}" content.${locale}.${field} must be an array.`
              );
            } else if (
              Array.isArray(localizedContent[field]) &&
              localizedContent[field].some((item) => !isNonEmptyString(item))
            ) {
              errors.push(
                `Entity "${entity.id}" content.${locale}.${field} must contain only non-empty strings.`
              );
            }
          }
        }
      }

      if (entity.referenceIds !== undefined) {
        if (!Array.isArray(entity.referenceIds)) {
          errors.push(`Entity "${entity.id}" referenceIds must be an array.`);
        } else {
          if (new Set(entity.referenceIds).size !== entity.referenceIds.length) {
            errors.push(`Entity "${entity.id}" referenceIds contains duplicates.`);
          }
          for (const sourceId of entity.referenceIds) {
            if (!sourceById.has(sourceId)) {
              errors.push(
                `Entity "${entity.id}" references missing source "${sourceId}".`
              );
            }
          }
        }
      }

      if (entity.type === "algorithm") {
        for (const field of ALGORITHM_ARRAY_FIELDS) {
          if (entity[field] !== undefined && !Array.isArray(entity[field])) {
            errors.push(`Algorithm "${entity.id}" ${field} must be an array.`);
          }
        }

        if (Array.isArray(entity.implementations)) {
          for (const [index, implementation] of entity.implementations.entries()) {
            if (!isRecord(implementation)) {
              errors.push(
                `Algorithm "${entity.id}" implementations[${index}] must be an object.`
              );
              continue;
            }
            if (!isNonEmptyString(implementation.language)) {
              errors.push(
                `Algorithm "${entity.id}" implementations[${index}].language must be a non-empty string.`
              );
            }
            if (!isNonEmptyString(implementation.code)) {
              errors.push(
                `Algorithm "${entity.id}" implementations[${index}].code must be a non-empty string.`
              );
            }
            if (!IMPLEMENTATION_STATUSES.has(implementation.status)) {
              errors.push(
                `Algorithm "${entity.id}" implementations[${index}].status must be verified, illustrative, or pending.`
              );
            }
          }
        }

        if (entity.complexity !== undefined && !isRecord(entity.complexity)) {
          errors.push(`Algorithm "${entity.id}" complexity must be an object.`);
        }

        if (!isRecord(entity.quality)) {
          errors.push(`Algorithm "${entity.id}" quality must be an object.`);
        } else {
          if (!Object.hasOwn(QUALITY_TIERS, entity.quality.tier)) {
            errors.push(
              `Algorithm "${entity.id}" quality.tier must be catalog, standard, or deep.`
            );
          }
          if (!QUALITY_STATUSES.has(entity.quality.status)) {
            errors.push(
              `Algorithm "${entity.id}" quality.status must be draft or reviewed.`
            );
          }
          if (
            entity.quality.notApplicable !== undefined &&
            !isRecord(entity.quality.notApplicable)
          ) {
            errors.push(
              `Algorithm "${entity.id}" quality.notApplicable must be an object.`
            );
          } else if (isRecord(entity.quality.notApplicable)) {
            for (const [check, reasons] of Object.entries(
              entity.quality.notApplicable
            )) {
              if (check !== "uses_technique") {
                errors.push(
                  `Algorithm "${entity.id}" cannot mark "${check}" as not applicable.`
                );
                continue;
              }
              if (!isRecord(reasons)) {
                errors.push(
                  `Algorithm "${entity.id}" quality.notApplicable.${check} must contain localized reasons.`
                );
                continue;
              }
              for (const locale of data.meta.locales || []) {
                if (!isNonEmptyString(reasons[locale])) {
                  errors.push(
                    `Algorithm "${entity.id}" quality.notApplicable.${check}.${locale} must explain the exception.`
                  );
                }
              }
            }
          }
        }
      }

      if (idIsValid) {
        entityById.set(entity.id, entity);
      }
    }

    for (const node of data.hierarchy.nodes) {
      if (!isRecord(node)) {
        errors.push("Every hierarchy.nodes entry must be an object.");
        continue;
      }

      const idIsValid = registerId(node.id, "hierarchy.nodes");

      if (!HIERARCHY_KINDS.has(node.kind)) {
        errors.push(
          `Hierarchy node "${node.id || "(unknown)"}" has unsupported kind "${node.kind}".`
        );
      }

      if (node.kind === "group" && !isNonEmptyString(node.label)) {
        errors.push(`Group node "${node.id}" must have a label.`);
      }

      if (node.kind === "group") {
        if (!isRecord(node.localizedLabels)) {
          errors.push(`Group node "${node.id}" localizedLabels must be an object.`);
        } else {
          for (const locale of data.meta.locales || []) {
            if (!isNonEmptyString(node.localizedLabels[locale])) {
              errors.push(
                `Group node "${node.id}" is missing localizedLabels.${locale}.`
              );
            }
          }
        }
      }

      if (node.kind === "entity" && !isNonEmptyString(node.entityId)) {
        errors.push(`Entity node "${node.id}" must have an entityId.`);
      }

      if (node.order !== undefined && !Number.isFinite(node.order)) {
        errors.push(`Hierarchy node "${node.id}" order must be a finite number.`);
      }

      if (idIsValid) {
        hierarchyById.set(node.id, node);
      }
    }

    const rootId = data.hierarchy.rootId;
    const rootNode = hierarchyById.get(rootId);
    const rootCandidates = data.hierarchy.nodes.filter(
      (node) => isRecord(node) && node.parentId === null
    );

    if (!isNonEmptyString(rootId)) {
      errors.push("hierarchy.rootId must be a non-empty string.");
    } else if (!rootNode) {
      errors.push(`hierarchy.rootId "${rootId}" does not reference a node.`);
    } else if (rootNode.parentId !== null) {
      errors.push(`Hierarchy root "${rootId}" must have parentId null.`);
    }

    if (rootCandidates.length !== 1) {
      errors.push(`Hierarchy must have exactly one root; found ${rootCandidates.length}.`);
    }

    const placementsByEntityId = new Map();
    const primaryPlacementsByEntityId = new Map();

    for (const node of data.hierarchy.nodes) {
      if (!isRecord(node) || !isNonEmptyString(node.id)) {
        continue;
      }

      if (node.parentId !== null && !hierarchyById.has(node.parentId)) {
        errors.push(
          `Hierarchy node "${node.id}" references missing parent "${node.parentId}".`
        );
      }

      if (node.parentId === node.id) {
        errors.push(`Hierarchy node "${node.id}" cannot be its own parent.`);
      }

      if (node.kind === "entity") {
        if (!entityById.has(node.entityId)) {
          errors.push(
            `Hierarchy node "${node.id}" references missing entity "${node.entityId}".`
          );
        } else {
          pushIndex(placementsByEntityId, node.entityId, node);

          if (node.primaryForSearch === true) {
            pushIndex(primaryPlacementsByEntityId, node.entityId, node);
          }
        }
      } else if (node.primaryForSearch === true) {
        errors.push(`Group node "${node.id}" cannot be primaryForSearch.`);
      }
    }

    for (const node of data.hierarchy.nodes) {
      if (!isRecord(node) || !isNonEmptyString(node.id)) {
        continue;
      }

      const visited = new Set();
      let current = node;

      while (current && current.parentId !== null) {
        if (visited.has(current.id)) {
          errors.push(`Hierarchy cycle detected at "${current.id}".`);
          break;
        }

        visited.add(current.id);
        current = hierarchyById.get(current.parentId);
      }
    }

    for (const entity of data.entities) {
      if (!isRecord(entity) || !isNonEmptyString(entity.id)) {
        continue;
      }

      const placements = placementsByEntityId.get(entity.id) || [];
      const primaryPlacements = primaryPlacementsByEntityId.get(entity.id) || [];

      if (placements.length === 0) {
        errors.push(`Searchable entity "${entity.id}" has no hierarchy placement.`);
      }

      if (primaryPlacements.length !== 1) {
        errors.push(
          `Searchable entity "${entity.id}" must have exactly one primaryForSearch placement; found ${primaryPlacements.length}.`
        );
      }
    }

    const relationSignatures = new Map();
    const relationTypesByDirectedPair = new Map();

    for (const relation of data.relations) {
      if (!isRecord(relation)) {
        errors.push("Every relations entry must be an object.");
        continue;
      }

      const idIsValid = registerId(relation.id, "relations");
      const rule = RELATION_RULES[relation.type];
      const fromEntity = entityById.get(relation.from);
      const toEntity = entityById.get(relation.to);

      if (!rule) {
        errors.push(
          `Relation "${relation.id || "(unknown)"}" has unsupported type "${relation.type}".`
        );
      }

      if (!fromEntity) {
        errors.push(
          `Relation "${relation.id || "(unknown)"}" references missing from entity "${relation.from}".`
        );
      }

      if (!toEntity) {
        errors.push(
          `Relation "${relation.id || "(unknown)"}" references missing to entity "${relation.to}".`
        );
      }

      if (relation.from === relation.to) {
        errors.push(`Relation "${relation.id}" cannot connect an entity to itself.`);
      }

      if (rule && fromEntity && toEntity) {
        const [expectedFromType, expectedToType] = rule;

        if (
          fromEntity.type !== expectedFromType ||
          toEntity.type !== expectedToType
        ) {
          errors.push(
            `Relation "${relation.id}" expects ${expectedFromType} -> ${expectedToType}, received ${fromEntity.type} -> ${toEntity.type}.`
          );
        }
      }

      if (relation.evidenceIds !== undefined) {
        if (!Array.isArray(relation.evidenceIds)) {
          errors.push(`Relation "${relation.id}" evidenceIds must be an array.`);
        } else {
          if (new Set(relation.evidenceIds).size !== relation.evidenceIds.length) {
            errors.push(`Relation "${relation.id}" evidenceIds contains duplicates.`);
          }
          for (const sourceId of relation.evidenceIds) {
            if (!sourceById.has(sourceId)) {
              errors.push(
                `Relation "${relation.id}" references missing evidence source "${sourceId}".`
              );
            }
          }
        }
      }

      if (relation.localizedNotes !== undefined) {
        if (!isRecord(relation.localizedNotes)) {
          errors.push(
            `Relation "${relation.id}" localizedNotes must be an object.`
          );
        } else {
          for (const locale of data.meta.locales || []) {
            if (!isNonEmptyString(relation.localizedNotes[locale])) {
              errors.push(
                `Relation "${relation.id}" is missing localizedNotes.${locale}.`
              );
            }
          }
        }
      }

      if (
        relation.treePriority !== undefined &&
        (!Number.isInteger(relation.treePriority) ||
          relation.treePriority < 0 ||
          relation.treePriority > 100)
      ) {
        errors.push(
          `Relation "${relation.id}" treePriority must be an integer from 0 to 100.`
        );
      }

      if (
        LINEAGE_EVIDENCE_RELATION_TYPES.has(relation.type) &&
        !hasNonEmptyArray(relation.evidenceIds)
      ) {
        warnings.push(
          `Lineage relation "${relation.id}" needs at least one evidenceIds source.`
        );
      }

      if (
        relation.type === "improves_upon" &&
        !isNonEmptyString(relation.note) &&
        !isRecord(relation.localizedNotes)
      ) {
        warnings.push(
          `Relation "${relation.id}" should explain what it improves.`
        );
      }

      const isSymmetric = relation.type === "related_to";
      const endpoints = isSymmetric
        ? [relation.from, relation.to].sort()
        : [relation.from, relation.to];
      const signature = `${relation.type}:${endpoints[0]}:${endpoints[1]}`;

      if (relationSignatures.has(signature)) {
        errors.push(
          `Duplicate relation "${relation.id}"; same edge already exists as "${relationSignatures.get(signature)}".`
        );
      } else {
        relationSignatures.set(signature, relation.id);
      }

      const directedPair = `${relation.from}->${relation.to}`;
      if (!relationTypesByDirectedPair.has(directedPair)) {
        relationTypesByDirectedPair.set(directedPair, new Set());
      }
      relationTypesByDirectedPair.get(directedPair).add(relation.type);

      if (idIsValid) {
        relationById.set(relation.id, relation);
      }
    }

    for (const [pair, types] of relationTypesByDirectedPair) {
      if (types.has("derived_from") && types.has("variant_of")) {
        warnings.push(
          `Relation pair "${pair}" is both derived_from and variant_of; verify that both claims are intentional.`
        );
      }
    }

    const semanticRelationSignatures = new Set(
      data.relations
        .filter((relation) => {
          const target = entityById.get(relation.to);
          return (
            entityById.get(relation.from)?.type === "algorithm" &&
            relation.type ===
              SEMANTIC_PLACEMENT_RELATION_BY_TARGET_TYPE[target?.type]
          );
        })
        .map(
          (relation) => `${relation.from}:${relation.type}:${relation.to}`
        )
    );

    for (const node of data.hierarchy.nodes) {
      if (
        !isRecord(node) ||
        node.kind !== "entity" ||
        node.primaryForSearch === true
      ) {
        continue;
      }
      const entity = entityById.get(node.entityId);
      const semanticOwnerNode = findNearestAncestorEntityNode(
        node,
        hierarchyById
      );
      const semanticOwnerEntity =
        semanticOwnerNode?.kind === "entity"
          ? entityById.get(semanticOwnerNode.entityId)
          : null;
      const expectedRelationType =
        SEMANTIC_PLACEMENT_RELATION_BY_TARGET_TYPE[semanticOwnerEntity?.type];
      if (
        entity?.type === "algorithm" &&
        expectedRelationType &&
        !semanticRelationSignatures.has(
          `${entity.id}:${expectedRelationType}:${semanticOwnerEntity.id}`
        )
      ) {
        errors.push(
          `Hierarchy placement "${node.id}" needs ${expectedRelationType} from "${entity.id}" to ancestor entity "${semanticOwnerEntity.id}".`
        );
      }
    }

    for (const relation of data.relations) {
      const target = entityById.get(relation.to);
      const expectedRelationType =
        SEMANTIC_PLACEMENT_RELATION_BY_TARGET_TYPE[target?.type];
      if (
        entityById.get(relation.from)?.type !== "algorithm" ||
        relation.type !== expectedRelationType
      ) {
        continue;
      }
      const targetPrimary = (primaryPlacementsByEntityId.get(target.id) || [])[0];
      const hasCrossPlacement = (placementsByEntityId.get(relation.from) || []).some(
        (node) =>
          findNearestAncestorEntityNode(node, hierarchyById)?.id ===
          targetPrimary?.id
      );
      if (!hasCrossPlacement) {
        errors.push(
          `Semantic relation "${relation.id}" needs a hierarchy placement of "${relation.from}" below "${target.id}".`
        );
      }
    }

    const lineageParentsByEntityId = new Map();

    for (const relation of data.relations) {
      if (
        isRecord(relation) &&
        LINEAGE_RELATION_TYPES.has(relation.type) &&
        entityById.has(relation.from) &&
        entityById.has(relation.to)
      ) {
        pushIndex(lineageParentsByEntityId, relation.from, relation.to);
      }
    }

    const lineageState = new Map();

    function visitLineage(entityId, path) {
      const currentState = lineageState.get(entityId);

      if (currentState === "visiting") {
        errors.push(`Lineage cycle detected: ${[...path, entityId].join(" -> ")}.`);
        return;
      }

      if (currentState === "visited") {
        return;
      }

      lineageState.set(entityId, "visiting");

      for (const parentId of lineageParentsByEntityId.get(entityId) || []) {
        visitLineage(parentId, [...path, entityId]);
      }

      lineageState.set(entityId, "visited");
    }

    for (const entity of data.entities) {
      if (isRecord(entity) && entity.type === "algorithm") {
        visitLineage(entity.id, []);
      }
    }

    const outgoingRelationsByEntityId = new Map();
    for (const relation of data.relations) {
      if (isRecord(relation) && entityById.has(relation.from)) {
        pushIndex(outgoingRelationsByEntityId, relation.from, relation);
      }
    }

    const qualityReport = createContentQualityReport(data, {
      sourceById,
      outgoingRelationsByEntityId
    });
    const qualityGate = isRecord(data.meta.qualityGate)
      ? data.meta.qualityGate
      : {};
    const legacyIds = new Set(qualityGate.legacyDraftAlgorithmIds || []);

    if (
      Array.isArray(qualityGate.legacyDraftAlgorithmIds) &&
      legacyIds.size !== qualityGate.legacyDraftAlgorithmIds.length
    ) {
      errors.push("meta.qualityGate.legacyDraftAlgorithmIds contains duplicates.");
    }

    for (const legacyId of legacyIds) {
      const entity = entityById.get(legacyId);
      if (!entity || entity.type !== "algorithm") {
        errors.push(
          `Legacy draft id "${legacyId}" must reference an Algorithm entity.`
        );
      } else if (entity.quality?.legacy !== true) {
        errors.push(
          `Legacy Algorithm "${legacyId}" must set quality.legacy to true.`
        );
      }
    }

    for (const algorithm of qualityReport.algorithms) {
      const entity = entityById.get(algorithm.entityId);
      const declaredRank = QUALITY_TIERS[algorithm.declaredTier];
      const achievedRank = QUALITY_TIERS[algorithm.achievedTier];

      if (
        Number.isFinite(declaredRank) &&
        Number.isFinite(achievedRank) &&
        declaredRank > achievedRank
      ) {
        errors.push(
          `Algorithm "${algorithm.entityId}" declares ${algorithm.declaredTier} but only achieves ${algorithm.achievedTier}.`
        );
      }

      if (!legacyIds.has(algorithm.entityId)) {
        const minimumTier = qualityGate.minimumNewAlgorithmTier || "standard";
        if (
          !Number.isFinite(achievedRank) ||
          achievedRank < QUALITY_TIERS[minimumTier]
        ) {
          errors.push(
            `New Algorithm "${algorithm.entityId}" must achieve ${minimumTier}; missing ${algorithm.standardMissing.join(
              ", "
            )}.`
          );
        }
        if (entity?.quality?.legacy === true) {
          errors.push(
            `New Algorithm "${algorithm.entityId}" cannot set quality.legacy.`
          );
        }
      }

      if (entity?.quality?.status === "reviewed") {
        const reviewedMinimumTier =
          qualityGate.reviewedMinimumTier || "standard";
        if (
          !Number.isFinite(achievedRank) ||
          achievedRank < QUALITY_TIERS[reviewedMinimumTier]
        ) {
          errors.push(
            `Reviewed Algorithm "${algorithm.entityId}" must achieve ${reviewedMinimumTier}; missing ${algorithm.standardMissing.join(
              ", "
            )}.`
          );
        }

        const serializedEntity = JSON.stringify(entity);
        for (const token of qualityGate.reviewedForbiddenTokens || []) {
          if (serializedEntity.includes(token)) {
            errors.push(
              `Reviewed Algorithm "${algorithm.entityId}" contains forbidden template token "${token}".`
            );
          }
        }
      }
    }

    return { errors, warnings, qualityReport };
  }

  function buildIndexes(data) {
    const entityById = new Map();
    const sourceById = new Map();
    const hierarchyById = new Map();
    const childrenByParentId = new Map();
    const placementsByEntityId = new Map();
    const primaryPlacementByEntityId = new Map();
    const incomingRelationsByEntityId = new Map();
    const outgoingRelationsByEntityId = new Map();

    for (const entity of data.entities) {
      entityById.set(entity.id, entity);
    }

    for (const source of data.sources) {
      sourceById.set(source.id, source);
    }

    for (const node of data.hierarchy.nodes) {
      hierarchyById.set(node.id, node);
      pushIndex(childrenByParentId, node.parentId, node);

      if (node.kind === "entity") {
        pushIndex(placementsByEntityId, node.entityId, node);

        if (node.primaryForSearch === true) {
          primaryPlacementByEntityId.set(node.entityId, node);
        }
      }
    }

    for (const children of childrenByParentId.values()) {
      children.sort(compareByOrder);
    }

    for (const placements of placementsByEntityId.values()) {
      placements.sort(compareByOrder);
    }

    for (const relation of data.relations) {
      pushIndex(outgoingRelationsByEntityId, relation.from, relation);
      pushIndex(incomingRelationsByEntityId, relation.to, relation);
    }

    return {
      entityById,
      sourceById,
      hierarchyById,
      childrenByParentId,
      placementsByEntityId,
      primaryPlacementByEntityId,
      incomingRelationsByEntityId,
      outgoingRelationsByEntityId
    };
  }

  function createDataLayer(data) {
    const validation = validateData(data);

    if (validation.errors.length > 0) {
      throw new Error(
        `Algoria data validation failed:\n- ${validation.errors.join("\n- ")}`
      );
    }

    return {
      data,
      validation,
      indexes: buildIndexes(data)
    };
  }

  const AlgoriaCore = Object.freeze({
    ENTITY_TYPES,
    SOURCE_TYPES,
    RELATION_RULES,
    LINEAGE_RELATION_TYPES,
    QUALITY_TIERS,
    STANDARD_QUALITY_CHECKS,
    DEEP_QUALITY_CHECKS,
    evaluateAlgorithmQuality,
    createContentQualityReport,
    findNearestAncestorEntityNode,
    validateData,
    buildIndexes,
    createDataLayer
  });

  global.AlgoriaCore = AlgoriaCore;

  if (global.ALGORIA_DATA) {
    try {
      global.ALGORIA_RUNTIME = createDataLayer(global.ALGORIA_DATA);

      for (const warning of global.ALGORIA_RUNTIME.validation.warnings) {
        console.warn(`[Algoria data] ${warning}`);
      }

      console.info(
        `[Algoria data] Validated ${global.ALGORIA_DATA.entities.length} entities, ` +
          `${global.ALGORIA_DATA.hierarchy.nodes.length} hierarchy nodes, and ` +
          `${global.ALGORIA_DATA.relations.length} relations.`
      );
      const quality = global.ALGORIA_RUNTIME.validation.qualityReport;
      console.info(
        `[Algoria content] ${quality.tierCounts.catalog} catalog, ` +
          `${quality.tierCounts.standard} standard, ` +
          `${quality.tierCounts.deep} deep out of ` +
          `${quality.totalAlgorithms} algorithms.`
      );
      console.info("[Algoria content] Field coverage", quality.coverage);
    } catch (error) {
      console.error(error);
      global.ALGORIA_BOOT_ERROR = error;
    }
  } else {
    global.ALGORIA_BOOT_ERROR = new Error("ALGORIA_DATA is unavailable.");
  }
})(typeof window !== "undefined" ? window : globalThis);

(function exposeAlgoriaApp(global) {
  "use strict";

  const TREE_LAYOUT = Object.freeze({
    paddingX: 64,
    paddingY: 48,
    columnGap: 96,
    verticalGap: 22,
    rightPadding: 64,
    bottomPadding: 48,
    fallbackNodeWidth: 168,
    fallbackNodeHeight: 38,
    fallbackViewportWidth: 1024,
    fallbackViewportHeight: 720
  });

  const ALGORITHM_CLICK_DELAY = 320;
  const ALGORITHM_DOUBLE_CLICK_GUARD_MS = 1000;
  const MAX_ALGORITHM_ADVANCEMENTS = 8;
  const ALGORITHM_EXPANSION_TYPES = Object.freeze([
    "derived_from",
    "variant_of",
    "improves_upon"
  ]);
  const ALGORITHM_EXPANSION_TYPE_SET = new Set(ALGORITHM_EXPANSION_TYPES);
  const RELATION_PRIORITY = Object.freeze({
    derived_from: 0,
    variant_of: 1,
    improves_upon: 2
  });
  const SUPPORTED_LOCALES = Object.freeze(["ko", "en"]);
  const SUPPORTED_THEMES = Object.freeze(["light", "dark"]);
  const RELATION_LABELS = Object.freeze({
    en: {
      derived_from: "Derived",
      variant_of: "Variant",
      improves_upon: "Improves"
    },
    ko: {
      derived_from: "파생",
      variant_of: "변형",
      improves_upon: "개선"
    }
  });
  const ENTITY_TYPE_LABELS = Object.freeze({
    en: {
      algorithm: "Algorithm",
      problem: "Problem",
      technique: "Technique",
      data_structure: "Data Structure",
      domain: "Domain",
      navigation_group: "Group"
    },
    ko: {
      algorithm: "알고리즘",
      problem: "문제",
      technique: "설계 기법",
      data_structure: "자료구조",
      domain: "응용 분야",
      navigation_group: "분류"
    }
  });
  const SEARCH_FILTER_TYPES = Object.freeze([
    "all",
    "algorithm",
    "problem",
    "technique",
    "data_structure",
    "domain",
    "navigation_group"
  ]);
  const SEARCH_FILTER_LABELS = Object.freeze({
    en: {
      all: "All",
      algorithm: "Algorithms",
      problem: "Problems",
      technique: "Techniques",
      data_structure: "Data Structures",
      domain: "Domains",
      navigation_group: "Groups"
    },
    ko: {
      all: "전체",
      algorithm: "알고리즘",
      problem: "문제",
      technique: "기법",
      data_structure: "자료구조",
      domain: "분야",
      navigation_group: "분류"
    }
  });
  const UI_STRINGS = Object.freeze({
    en: {
      brandDescriptor: "Algorithm lineage atlas",
      toolbarLabel: "Algoria tools",
      searchLabel: "Search algorithms and related concepts",
      searchPlaceholder: "Search algorithms and concepts",
      viewControlsLabel: "Lineage view controls",
      treeHeading: "Algorithm lineage atlas",
      canvasInstructions:
        "Select a lineage node to expand its branches to the right. Drag empty space to pan, and use Control or Command plus the mouse wheel to zoom. Use the arrow keys to move among visible nodes and the left and right arrow keys to collapse or expand branches. On an Algorithm, press Enter to open Detail or Space to expand its lineage.",
      noSearchResults: (query) => `No concepts found for “${query}”.`,
      currentPath: "Current lineage path",
      searchFilterLabel: "Filter search results by type",
      searchOpened: (name, path) => `Opened ${name}. ${path}`,
      pathFocused: (name) => `Focused ${name} in the lineage.`,
      keyboardFocused: (name) => `Focused ${name}.`,
      algorithmNodeTitle: (name) =>
        `${name} — Enter: detail · Space or click: expand lineage`,
      resetView: "Reset view",
      zoomOut: "Zoom out",
      zoomIn: "Zoom in",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      darkThemeAnnouncement: "Dark mode enabled.",
      lightThemeAnnouncement: "Light mode enabled.",
      canvasHint:
        "Arrow keys: navigate · <kbd>Enter</kbd>: algorithm detail · Drag empty space to move · <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + wheel: zoom",
      detailEyebrow: "Algorithm detail",
      detailContentLabel: "Scrollable algorithm detail content",
      closeDetail: "Close algorithm detail",
      resetAnnouncement: "The lineage view has been reset.",
      zoomAnnouncement: (percent) => `Lineage zoom set to ${percent}%.`,
      nodeCountAnnouncement: (count) => `Loaded ${count} lineage nodes.`,
      hierarchyAction: (label, action) => `${label} node ${action}.`,
      algorithmAction: (label, action) => `${label} algorithm lineage ${action}.`,
      openedDetail: (name) => `Opened details for ${name}.`,
      closedDetail: (name) => `Closed details for ${name}.`,
      expanded: "expanded",
      collapsed: "collapsed",
      selected: "selected",
      overview: "Overview",
      problem: "Problem",
      technique: "Technique",
      dataStructure: "Data structure",
      domain: "Domain",
      complexity: "Complexity",
      time: "Time",
      space: "Space",
      best: "Best",
      average: "Average",
      worst: "Worst",
      typical: "Typical",
      originalWorstCaseUpdate: "Original · worst-case update",
      sweepWorstCaseUpdate: "Sweep variant · worst-case update",
      originalWorstCaseTotal: "Original · worst-case total",
      mergeable: "Mergeable",
      optimalNonMergeable: "Optimal · non-mergeable",
      perServer: "Per server",
      howItWorks: "How it works",
      prosAndCons: "Pros & Cons",
      advantages: "Advantages",
      disadvantages: "Disadvantages",
      applications: "Applications",
      history: "History",
      introduced: "Introduced",
      authors: "Authors",
      papers: "Papers",
      relationships: "Relationships",
      derivedFrom: "Derived from",
      derivedAlgorithms: "Derived algorithms",
      variantOf: "Variant of",
      variants: "Variants",
      improvesUpon: "Improves upon",
      improvements: "Improvements",
      inspiredBy: "Inspired by",
      inspiredAlgorithms: "Inspired algorithms",
      hybridOf: "Hybrid of",
      relatedAlgorithms: "Related algorithms",
      sameProblem: "Same problem",
      implementation: "Implementation",
      implementationVerified: "Verified example",
      implementationIllustrative: "Illustrative example",
      references: "References"
    },
    ko: {
      brandDescriptor: "알고리즘 계통도",
      toolbarLabel: "Algoria 도구 모음",
      searchLabel: "알고리즘과 관련 개념 검색",
      searchPlaceholder: "알고리즘과 관련 개념 검색",
      viewControlsLabel: "계통도 보기 조절",
      treeHeading: "알고리즘 계통도",
      canvasInstructions:
        "계통도 노드를 선택해 오른쪽으로 가지를 펼칠 수 있습니다. 빈 공간을 드래그해 이동하고, Control 또는 Command 키와 휠로 확대하거나 축소할 수 있습니다. 방향키로 가시 노드를 이동하고 왼쪽과 오른쪽 방향키로 가지를 접거나 펼칠 수 있습니다. 알고리즘에서는 Enter 키로 상세 정보를 열고 Space 키로 계보를 펼칠 수 있습니다.",
      noSearchResults: (query) => `“${query}”에 해당하는 개념이 없습니다.`,
      currentPath: "현재 계통 경로",
      searchFilterLabel: "검색 결과 유형 필터",
      searchOpened: (name, path) => `${name} 검색 결과를 열었습니다. ${path}`,
      pathFocused: (name) => `${name} 노드로 이동했습니다.`,
      keyboardFocused: (name) => `${name} 노드로 이동했습니다.`,
      algorithmNodeTitle: (name) =>
        `${name} — Enter: 상세 · Space 또는 클릭: 계보 펼치기`,
      resetView: "보기 초기화",
      zoomOut: "축소",
      zoomIn: "확대",
      themeToDark: "다크 모드로 전환",
      themeToLight: "라이트 모드로 전환",
      darkThemeAnnouncement: "다크 모드로 전환했습니다.",
      lightThemeAnnouncement: "라이트 모드로 전환했습니다.",
      canvasHint:
        "방향키: 탐색 · <kbd>Enter</kbd>: 알고리즘 상세 · 빈 공간 드래그: 이동 · <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + 휠: 확대/축소",
      detailEyebrow: "알고리즘 상세",
      detailContentLabel: "스크롤 가능한 알고리즘 상세 내용",
      closeDetail: "알고리즘 상세 닫기",
      resetAnnouncement: "계통도 보기를 초기 위치로 되돌렸습니다.",
      zoomAnnouncement: (percent) => `계통도를 ${percent}%로 조절했습니다.`,
      nodeCountAnnouncement: (count) =>
        `계통도 노드 ${count}개를 불러왔습니다.`,
      hierarchyAction: (label, action) => `${label} 노드를 ${action}.`,
      algorithmAction: (label, action) =>
        `${label} 알고리즘의 발전 계보를 ${action}.`,
      openedDetail: (name) => `${name} 알고리즘 상세 정보를 열었습니다.`,
      closedDetail: (name) => `${name} 알고리즘 상세 정보를 닫았습니다.`,
      expanded: "펼쳤습니다",
      collapsed: "접었습니다",
      selected: "선택했습니다",
      overview: "개요",
      problem: "해결 문제",
      technique: "설계 기법",
      dataStructure: "자료구조",
      domain: "응용 분야",
      complexity: "복잡도",
      time: "시간",
      space: "공간",
      best: "최선",
      average: "평균",
      worst: "최악",
      typical: "일반",
      originalWorstCaseUpdate: "원형 · 최악 업데이트",
      sweepWorstCaseUpdate: "Sweep 변형 · 최악 업데이트",
      originalWorstCaseTotal: "원형 · 최악 전체 처리",
      mergeable: "병합 가능",
      optimalNonMergeable: "최적 · 병합 불가",
      perServer: "서버당",
      howItWorks: "동작 방식",
      prosAndCons: "장점과 단점",
      advantages: "장점",
      disadvantages: "단점",
      applications: "사용 사례",
      history: "역사",
      introduced: "등장 시기",
      authors: "개발자",
      papers: "논문",
      relationships: "관계",
      derivedFrom: "파생 원본",
      derivedAlgorithms: "파생 알고리즘",
      variantOf: "변형 원본",
      variants: "변형 알고리즘",
      improvesUpon: "개선 대상",
      improvements: "개선 알고리즘",
      inspiredBy: "영감을 받은 대상",
      inspiredAlgorithms: "영감을 받은 알고리즘",
      hybridOf: "결합 대상",
      relatedAlgorithms: "관련 알고리즘",
      sameProblem: "같은 문제를 푸는 알고리즘",
      implementation: "구현",
      implementationVerified: "동작 검증 예제",
      implementationIllustrative: "개념 설명 예제",
      references: "참고 자료"
    }
  });
  const SEARCH_RESULT_LIMIT = 8;
  const ZOOM_CONFIG = Object.freeze({
    min: 0.6,
    max: 1.8,
    step: 0.1,
    wheelSensitivity: 0.002
  });
  const COLLAPSE_ANIMATION_MS = 130;

  function getPerformanceNow() {
    return typeof global.performance?.now === "function"
      ? global.performance.now()
      : Date.now();
  }

  function recordPerformanceMetric(app, metricName, startedAt) {
    if (!app?.performanceMetrics || !metricName) {
      return 0;
    }
    const duration = Math.max(0, getPerformanceNow() - startedAt);
    const metric = app.performanceMetrics[metricName] || {
      count: 0,
      totalMs: 0,
      lastMs: 0,
      maxMs: 0
    };
    metric.count += 1;
    metric.totalMs += duration;
    metric.lastMs = duration;
    metric.maxMs = Math.max(metric.maxMs, duration);
    app.performanceMetrics[metricName] = metric;

    const datasetPrefix = `perf${metricName[0].toUpperCase()}${metricName.slice(1)}`;
    const dataset = app.elements.appShell.dataset;
    dataset[`${datasetPrefix}Count`] = String(metric.count);
    dataset[`${datasetPrefix}LastMs`] = duration.toFixed(3);
    dataset[`${datasetPrefix}MaxMs`] = metric.maxMs.toFixed(3);
    return duration;
  }

  function getPerformanceSnapshot(app) {
    return Object.fromEntries(
      Object.entries(app.performanceMetrics || {}).map(([name, metric]) => [
        name,
        {
          count: metric.count,
          lastMs: metric.lastMs,
          maxMs: metric.maxMs,
          averageMs: metric.count > 0 ? metric.totalMs / metric.count : 0
        }
      ])
    );
  }

  function createInitialState(runtime) {
    return {
      locale: runtime.data.meta.defaultLocale || "ko",
      theme: "light",
      expandedViewIds: new Set([runtime.data.hierarchy.rootId]),
      selected: {
        viewId: null,
        entityId: null
      },
      highlightedViewId: null,
      keyboard: {
        focusedViewId: runtime.data.hierarchy.rootId
      },
      detail: {
        isOpen: false,
        entityId: null,
        returnFocusViewId: null
      },
      viewport: {
        zoom: 1,
        scrollLeft: 0,
        scrollTop: 0
      },
      search: {
        query: "",
        matches: [],
        activeIndex: -1,
        typeFilter: "all",
        targetEntityId: null,
        targetViewId: null
      }
    };
  }

  function uniqueEntities(entities) {
    return [...new Map(entities.map((entity) => [entity.id, entity])).values()];
  }

  function normalizeLocale(locale) {
    return SUPPORTED_LOCALES.includes(locale) ? locale : "ko";
  }

  function normalizeTheme(theme, fallback = "light") {
    if (SUPPORTED_THEMES.includes(theme)) {
      return theme;
    }
    return SUPPORTED_THEMES.includes(fallback) ? fallback : "light";
  }

  function resolveThemePreference(storedTheme, prefersDark = false) {
    return SUPPORTED_THEMES.includes(storedTheme)
      ? storedTheme
      : prefersDark
        ? "dark"
        : "light";
  }

  function getLocalizedEntityName(entity, locale = "en") {
    const normalizedLocale = normalizeLocale(locale);
    return (
      (entity.localizedNames && entity.localizedNames[normalizedLocale]) ||
      entity.name
    );
  }

  function getLocalizedHierarchyLabel(node, locale = "en") {
    const normalizedLocale = normalizeLocale(locale);
    return (
      (node.localizedLabels && node.localizedLabels[normalizedLocale]) ||
      node.label
    );
  }

  function localizeEntity(entity, locale) {
    return {
      ...entity,
      name: getLocalizedEntityName(entity, locale)
    };
  }

  function uniqueStrings(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function getLocalizedEntityContent(entity, locale, field) {
    const normalizedLocale = normalizeLocale(locale);
    const localizedValue = entity.content?.[normalizedLocale]?.[field];
    if (
      localizedValue !== undefined &&
      (typeof localizedValue !== "string" || localizedValue.trim() !== "")
    ) {
      return localizedValue;
    }

    const koreanValue = entity.content?.ko?.[field];
    if (
      koreanValue !== undefined &&
      (typeof koreanValue !== "string" || koreanValue.trim() !== "")
    ) {
      return koreanValue;
    }

    return entity[field];
  }

  function uniqueResources(resources) {
    return [
      ...new Map(
        resources
          .filter(Boolean)
          .map((resource) => [
            resource.id || resource.url || resource.title || resource.name,
            resource
          ])
      ).values()
    ];
  }

  function normalizeSearchText(value) {
    return String(value || "")
      .normalize("NFKD")
      .toLowerCase()
      .replace(/[’']/g, "")
      .replace(/[^\p{Letter}\p{Number}*+]+/gu, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function buildSearchIndex(runtime) {
    const entityEntries = runtime.data.entities.map((entity) => ({
      searchKey: `entity:${entity.id}`,
      targetType: "entity",
      targetViewId:
        runtime.indexes.primaryPlacementByEntityId.get(entity.id)?.id || null,
      entityId: entity.id,
      entityType: entity.type,
      name: entity.name,
      localizedSummaries: Object.fromEntries(
        SUPPORTED_LOCALES.map((locale) => [
          locale,
          getLocalizedEntityContent(entity, locale, "summary") || ""
        ])
      ),
      aliases: entity.aliases || [],
      localizedNames: entity.localizedNames || { en: entity.name },
      normalizedNames: uniqueStrings(
        Object.values(entity.localizedNames || { en: entity.name }).map(
          normalizeSearchText
        )
      ),
      normalizedAliases: (entity.aliases || []).map(normalizeSearchText)
    }));

    const groupEntries = runtime.data.hierarchy.nodes
      .filter(
        (node) =>
          node.kind === "group" &&
          node.id !== runtime.data.hierarchy.rootId &&
          node.searchable !== false
      )
      .map((node) => {
        const localizedNames = Object.fromEntries(
          SUPPORTED_LOCALES.map((locale) => [
            locale,
            getLocalizedHierarchyLabel(node, locale)
          ])
        );
        return {
          searchKey: `view:${node.id}`,
          targetType: "hierarchy",
          targetViewId: node.id,
          entityId: null,
          entityType: "navigation_group",
          name: localizedNames.en,
          localizedSummaries: { en: "", ko: "" },
          aliases: [],
          localizedNames,
          normalizedNames: uniqueStrings(
            Object.values(localizedNames).map(normalizeSearchText)
          ),
          normalizedAliases: []
        };
      });

    return [...entityEntries, ...groupEntries];
  }

  function getSearchMatchRank(entry, normalizedQuery) {
    const candidates = [
      ...entry.normalizedNames.map((value) => ({ value, base: 0 })),
      ...entry.normalizedAliases.map((value) => ({ value, base: 1 }))
    ];
    let bestRank = Number.POSITIVE_INFINITY;

    for (const candidate of candidates) {
      let rank = Number.POSITIVE_INFINITY;

      if (candidate.value === normalizedQuery) {
        rank = candidate.base;
      } else if (candidate.value.startsWith(normalizedQuery)) {
        rank = 2 + candidate.base;
      } else if (candidate.value.split(" ").includes(normalizedQuery)) {
        rank = 4 + candidate.base;
      } else if (candidate.value.includes(normalizedQuery)) {
        rank = 6 + candidate.base;
      }

      bestRank = Math.min(bestRank, rank);
    }

    return bestRank;
  }

  function normalizeSearchFilter(value) {
    return SEARCH_FILTER_TYPES.includes(value) ? value : "all";
  }

  function getSearchTypePriority(entityType) {
    const priority = {
      algorithm: 0,
      problem: 1,
      technique: 2,
      data_structure: 3,
      domain: 4,
      navigation_group: 5
    };
    return priority[entityType] ?? Number.MAX_SAFE_INTEGER;
  }

  function searchEntities(
    query,
    searchIndex,
    limit = SEARCH_RESULT_LIMIT,
    typeFilter = "all"
  ) {
    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) {
      return [];
    }

    const normalizedFilter = normalizeSearchFilter(typeFilter);
    const maximumResults = Number.isFinite(limit)
      ? Math.max(0, Math.floor(limit))
      : searchIndex.length;

    return searchIndex
      .filter(
        (entry) =>
          normalizedFilter === "all" || entry.entityType === normalizedFilter
      )
      .map((entry) => ({
        ...entry,
        rank: getSearchMatchRank(entry, normalizedQuery)
      }))
      .filter((entry) => Number.isFinite(entry.rank))
      .sort(
        (left, right) =>
          left.rank - right.rank ||
          getSearchTypePriority(left.entityType) -
            getSearchTypePriority(right.entityType) ||
          left.name.localeCompare(right.name) ||
          left.searchKey.localeCompare(right.searchKey)
      )
      .slice(0, maximumResults);
  }

  function getSearchFilterCounts(query, searchIndex) {
    const counts = Object.fromEntries(
      SEARCH_FILTER_TYPES.map((type) => [type, 0])
    );
    const matches = searchEntities(
      query,
      searchIndex,
      Number.POSITIVE_INFINITY,
      "all"
    );
    counts.all = matches.length;
    for (const match of matches) {
      if (counts[match.entityType] !== undefined) {
        counts[match.entityType] += 1;
      }
    }
    return counts;
  }

  function getHierarchyPath(viewId, indexes) {
    const target = indexes.hierarchyById.get(viewId);
    if (!target) {
      return [];
    }

    const path = [];
    const visited = new Set();
    let current = target;

    while (current) {
      if (visited.has(current.id)) {
        return [];
      }
      visited.add(current.id);
      path.push(current);
      current =
        current.parentId === null
          ? null
          : indexes.hierarchyById.get(current.parentId);
    }

    return path.reverse();
  }

  function getPrimaryHierarchyPath(entityId, indexes) {
    const target = indexes.primaryPlacementByEntityId.get(entityId);
    return target ? getHierarchyPath(target.id, indexes) : [];
  }

  function getLocalizedPrimaryPath(entityId, indexes, locale = "en") {
    return getPrimaryHierarchyPath(entityId, indexes).map((node) => ({
      viewId: node.id,
      hierarchyNodeId: node.id,
      entityId: node.kind === "entity" ? node.entityId : null,
      entityType:
        node.kind === "entity"
          ? indexes.entityById.get(node.entityId)?.type || null
          : null,
      kind: node.kind,
      label: getHierarchyNodeLabel(node, indexes, locale)
    }));
  }

  function getLocalizedHierarchyPath(viewId, indexes, locale = "en") {
    return getHierarchyPath(viewId, indexes).map((node) => ({
      viewId: node.id,
      hierarchyNodeId: node.id,
      entityId: node.kind === "entity" ? node.entityId : null,
      entityType:
        node.kind === "entity"
          ? indexes.entityById.get(node.entityId)?.type || null
          : null,
      kind: node.kind,
      label: getHierarchyNodeLabel(node, indexes, locale)
    }));
  }

  function getRenderedViewPath(
    viewId,
    runtime,
    renderResult,
    locale = "en"
  ) {
    if (!viewId || !runtime?.indexes) {
      return [];
    }

    const visibleViewById = renderResult?.viewById;
    const visibleTarget = visibleViewById?.get(viewId);
    if (visibleTarget) {
      const path = [];
      const visited = new Set();
      let current = visibleTarget;

      while (current && !visited.has(current.viewId)) {
        visited.add(current.viewId);
        path.push({
          viewId: current.viewId,
          hierarchyNodeId: current.hierarchyNodeId,
          entityId: current.entityId,
          entityType: current.entityType,
          kind: current.kind,
          label: current.label
        });
        current = current.parentViewId
          ? visibleViewById.get(current.parentViewId)
          : null;
      }

      return path.reverse();
    }

    const hierarchyTarget = runtime.indexes.hierarchyById.get(viewId);
    if (!hierarchyTarget) {
      return [];
    }

    const path = [];
    const visited = new Set();
    let current = hierarchyTarget;
    while (current && !visited.has(current.id)) {
      visited.add(current.id);
      path.push({
        viewId: current.id,
        hierarchyNodeId: current.id,
        entityId: current.kind === "entity" ? current.entityId : null,
        entityType:
          current.kind === "entity"
            ? runtime.indexes.entityById.get(current.entityId)?.type || null
            : null,
        kind: current.kind,
        label: getHierarchyNodeLabel(current, runtime.indexes, locale)
      });
      current = current.parentId
        ? runtime.indexes.hierarchyById.get(current.parentId)
        : null;
    }
    return path.reverse();
  }

  function getVisiblePathViewIds(viewId, viewById) {
    if (!viewId || !viewById || typeof viewById.get !== "function") {
      return [];
    }

    const path = [];
    const visited = new Set();
    let current = viewById.get(viewId);
    while (current && !visited.has(current.viewId)) {
      visited.add(current.viewId);
      path.push(current.viewId);
      current = current.parentViewId
        ? viewById.get(current.parentViewId)
        : null;
    }
    return path.reverse();
  }

  function applySearchReveal(state, entityId, indexes) {
    const path = getPrimaryHierarchyPath(entityId, indexes);
    if (path.length === 0) {
      return null;
    }

    for (const ancestor of path.slice(0, -1)) {
      state.expandedViewIds.add(ancestor.id);
    }

    const target = path[path.length - 1];
    state.selected.viewId = target.id;
    state.selected.entityId = entityId;
    state.highlightedViewId = target.id;
    state.search.targetEntityId = entityId;
    state.search.targetViewId = target.id;
    return {
      path,
      targetViewId: target.id
    };
  }

  function applyHierarchySearchReveal(state, viewId, indexes) {
    const path = getHierarchyPath(viewId, indexes);
    if (path.length === 0) {
      return null;
    }

    for (const ancestor of path.slice(0, -1)) {
      state.expandedViewIds.add(ancestor.id);
    }

    const target = path[path.length - 1];
    state.selected.viewId = target.id;
    state.selected.entityId =
      target.kind === "entity" ? target.entityId : null;
    state.highlightedViewId = target.id;
    state.search.targetEntityId = state.selected.entityId;
    state.search.targetViewId = target.id;
    return {
      path,
      targetViewId: target.id
    };
  }

  function getRelationEndpoints(relations, endpoint, indexes) {
    return uniqueEntities(
      relations
        .map((relation) => indexes.entityById.get(relation[endpoint]))
        .filter(Boolean)
    );
  }

  function getPrimaryComplexityText(value) {
    if (typeof value === "string" && value.trim() !== "") {
      return value;
    }
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
      return "";
    }
    return (
      Object.values(value).find(
        (entry) => typeof entry === "string" && entry.trim() !== ""
      ) || ""
    );
  }

  function buildAlgorithmDetailModel(entityId, runtime, locale = "en") {
    const { indexes } = runtime;
    const entity = indexes.entityById.get(entityId);

    if (!entity || entity.type !== "algorithm") {
      return null;
    }

    const outgoing = indexes.outgoingRelationsByEntityId.get(entityId) || [];
    const incoming = indexes.incomingRelationsByEntityId.get(entityId) || [];
    const outgoingOfType = (type) =>
      outgoing.filter((relation) => relation.type === type);
    const incomingOfType = (type) =>
      incoming.filter((relation) => relation.type === type);
    const outgoingTargets = (type) =>
      getRelationEndpoints(outgoingOfType(type), "to", indexes);
    const incomingSources = (type) =>
      getRelationEndpoints(incomingOfType(type), "from", indexes);
    const localizeList = (entities) =>
      entities
        .map((candidate) => localizeEntity(candidate, locale))
        .sort((left, right) => left.name.localeCompare(right.name));
    const problems = outgoingTargets("solves");
    const sameProblemAlgorithms = [];

    for (const problem of problems) {
      const problemRelations =
        indexes.incomingRelationsByEntityId.get(problem.id) || [];

      for (const relation of problemRelations) {
        if (relation.type !== "solves" || relation.from === entityId) {
          continue;
        }

        const candidate = indexes.entityById.get(relation.from);
        if (candidate && candidate.type === "algorithm") {
          sameProblemAlgorithms.push(candidate);
        }
      }
    }

    const relatedAlgorithms = uniqueEntities([
      ...getRelationEndpoints(outgoingOfType("related_to"), "to", indexes),
      ...getRelationEndpoints(incomingOfType("related_to"), "from", indexes)
    ]).filter((candidate) => candidate.id !== entityId);
    const sameProblemComparisons = uniqueEntities(sameProblemAlgorithms)
      .map((candidate) => ({
        ...localizeEntity(candidate, locale),
        timeComplexity: getPrimaryComplexityText(candidate.complexity?.time),
        spaceComplexity: getPrimaryComplexityText(candidate.complexity?.space)
      }))
      .sort((left, right) => left.name.localeCompare(right.name));
    const referencedSources = (entity.referenceIds || [])
      .map((sourceId) => indexes.sourceById.get(sourceId))
      .filter(Boolean);
    const papers = uniqueResources([
      ...(entity.papers || []),
      ...referencedSources.filter((source) => source.type === "paper")
    ]);
    const references = uniqueResources([
      ...(entity.references || []),
      ...referencedSources.filter((source) => source.type !== "paper")
    ]);

    return {
      entityId: entity.id,
      locale: normalizeLocale(locale),
      name: getLocalizedEntityName(entity, locale),
      aliases:
        normalizeLocale(locale) === "ko"
          ? uniqueStrings([entity.name, ...(entity.aliases || [])])
          : entity.aliases || [],
      summary: getLocalizedEntityContent(entity, locale, "summary") || "",
      description:
        getLocalizedEntityContent(entity, locale, "description") || "",
      problems: localizeList(problems),
      techniques: localizeList(outgoingTargets("uses_technique")),
      dataStructures: localizeList(outgoingTargets("uses_data_structure")),
      domains: localizeList(outgoingTargets("belongs_to_domain")),
      complexity: entity.complexity || null,
      pseudocode: entity.pseudocode || "",
      advantages:
        getLocalizedEntityContent(entity, locale, "advantages") || [],
      disadvantages:
        getLocalizedEntityContent(entity, locale, "disadvantages") || [],
      useCases: getLocalizedEntityContent(entity, locale, "useCases") || [],
      introduced: entity.introduced || null,
      authors: entity.authors || [],
      papers,
      implementations: (entity.implementations || []).filter(
        (implementation) => implementation.status !== "pending"
      ),
      references,
      relationships: {
        derivedFrom: localizeList(outgoingTargets("derived_from")),
        derivedAlgorithms: localizeList(incomingSources("derived_from")),
        variantOf: localizeList(outgoingTargets("variant_of")),
        variants: localizeList(incomingSources("variant_of")),
        improvesUpon: localizeList(outgoingTargets("improves_upon")),
        improvements: localizeList(incomingSources("improves_upon")),
        inspiredBy: localizeList(outgoingTargets("inspired_by")),
        inspiredAlgorithms: localizeList(incomingSources("inspired_by")),
        hybridOf: localizeList(outgoingTargets("hybrid_of")),
        relatedAlgorithms: localizeList(relatedAlgorithms),
        sameProblemAlgorithms: sameProblemComparisons,
        sameProblemComparisons
      }
    };
  }

  function createDetailSection(documentRef, title) {
    const section = documentRef.createElement("section");
    const heading = documentRef.createElement("h3");
    section.className = "detail-section";
    heading.className = "detail-section__title";
    heading.textContent = title;
    section.append(heading);
    return section;
  }

  function appendDetailParagraph(documentRef, parent, text, className = "") {
    if (typeof text !== "string" || text.trim() === "") {
      return false;
    }

    const paragraph = documentRef.createElement("p");
    paragraph.className = className;
    paragraph.textContent = text;
    parent.append(paragraph);
    return true;
  }

  function createChipList(documentRef, items) {
    const list = documentRef.createElement("ul");
    list.className = "detail-chips";

    for (const item of items) {
      const chip = documentRef.createElement("li");
      chip.className = "detail-chip";
      chip.textContent = typeof item === "string" ? item : item.name;
      list.append(chip);
    }

    return list;
  }

  function appendDetailFact(documentRef, parent, label, items) {
    if (!items || items.length === 0) {
      return false;
    }

    const row = documentRef.createElement("div");
    const term = documentRef.createElement("dt");
    const value = documentRef.createElement("dd");
    row.className = "detail-fact";
    term.textContent = label;
    value.append(createChipList(documentRef, items));
    row.append(term, value);
    parent.append(row);
    return true;
  }

  function appendDetailList(documentRef, parent, items, className = "detail-list") {
    if (!items || items.length === 0) {
      return false;
    }

    const list = documentRef.createElement("ul");
    list.className = className;

    for (const item of items) {
      const listItem = documentRef.createElement("li");
      listItem.textContent = typeof item === "string" ? item : item.name;
      list.append(listItem);
    }

    parent.append(list);
    return true;
  }

  function appendComplexityRows(
    documentRef,
    parent,
    groupLabel,
    values,
    strings
  ) {
    if (!values) {
      return 0;
    }

    const labels = {
      best: strings.best,
      average: strings.average,
      worst: strings.worst,
      typical: strings.typical,
      originalWorstCaseUpdate: strings.originalWorstCaseUpdate,
      sweepWorstCaseUpdate: strings.sweepWorstCaseUpdate,
      originalWorstCaseTotal: strings.originalWorstCaseTotal,
      mergeable: strings.mergeable,
      optimalNonMergeable: strings.optimalNonMergeable,
      perServer: strings.perServer
    };
    let count = 0;
    const entries =
      typeof values === "string" ? [["typical", values]] : Object.entries(values);

    for (const [key, value] of entries) {
      if (typeof value !== "string" || value.trim() === "") {
        continue;
      }

      const row = documentRef.createElement("div");
      const label = documentRef.createElement("span");
      const code = documentRef.createElement("code");
      row.className = "complexity-row";
      label.textContent = `${groupLabel} · ${labels[key] || key}`;
      code.textContent = value;
      row.append(label, code);
      parent.append(row);
      count += 1;
    }

    return count;
  }

  function isSafeExternalUrl(value) {
    if (typeof value !== "string") {
      return false;
    }

    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:";
    } catch (_error) {
      return false;
    }
  }

  function appendResourceList(documentRef, parent, resources) {
    if (!resources || resources.length === 0) {
      return false;
    }

    const list = documentRef.createElement("ul");
    list.className = "resource-list";

    for (const resource of resources) {
      const item = documentRef.createElement("li");
      const label = resource.title || resource.name || "Untitled";

      if (isSafeExternalUrl(resource.url)) {
        const link = documentRef.createElement("a");
        link.href = resource.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = label;
        item.append(link);
      } else {
        item.append(documentRef.createTextNode(label));
      }

      if (resource.year) {
        const meta = documentRef.createElement("span");
        meta.textContent = String(resource.year);
        item.append(meta);
      }

      list.append(item);
    }

    parent.append(list);
    return true;
  }

  function renderDetailPanelContent(documentRef, model) {
    const strings = UI_STRINGS[normalizeLocale(model.locale || "en")];
    const fragment = documentRef.createDocumentFragment();
    const overview = createDetailSection(documentRef, strings.overview);
    appendDetailParagraph(
      documentRef,
      overview,
      model.summary,
      "detail-summary"
    );
    appendDetailParagraph(documentRef, overview, model.description, "detail-copy");
    const facts = documentRef.createElement("dl");
    facts.className = "detail-facts";
    appendDetailFact(documentRef, facts, strings.problem, model.problems);
    appendDetailFact(documentRef, facts, strings.technique, model.techniques);
    appendDetailFact(
      documentRef,
      facts,
      strings.dataStructure,
      model.dataStructures
    );
    appendDetailFact(documentRef, facts, strings.domain, model.domains);
    if (facts.children.length > 0) {
      overview.append(facts);
    }
    if (overview.children.length > 1) {
      fragment.append(overview);
    }

    if (model.complexity) {
      const complexity = createDetailSection(documentRef, strings.complexity);
      const rows = documentRef.createElement("div");
      rows.className = "complexity-list";
      const rowCount =
        appendComplexityRows(
          documentRef,
          rows,
          strings.time,
          model.complexity.time,
          strings
        ) +
        appendComplexityRows(
          documentRef,
          rows,
          strings.space,
          model.complexity.space,
          strings
        );
      if (rowCount > 0) {
        complexity.append(rows);
        fragment.append(complexity);
      }
    }

    if (model.pseudocode) {
      const howItWorks = createDetailSection(documentRef, strings.howItWorks);
      const pre = documentRef.createElement("pre");
      const code = documentRef.createElement("code");
      pre.className = "detail-code";
      code.textContent = model.pseudocode;
      pre.append(code);
      howItWorks.append(pre);
      fragment.append(howItWorks);
    }

    if (model.advantages.length > 0 || model.disadvantages.length > 0) {
      const prosAndCons = createDetailSection(documentRef, strings.prosAndCons);
      const columns = documentRef.createElement("div");
      columns.className = "pros-cons";
      for (const [title, items] of [
        [strings.advantages, model.advantages],
        [strings.disadvantages, model.disadvantages]
      ]) {
        if (items.length === 0) continue;
        const column = documentRef.createElement("div");
        const heading = documentRef.createElement("h4");
        heading.textContent = title;
        column.append(heading);
        appendDetailList(documentRef, column, items);
        columns.append(column);
      }
      prosAndCons.append(columns);
      fragment.append(prosAndCons);
    }

    if (model.useCases.length > 0) {
      const applications = createDetailSection(documentRef, strings.applications);
      appendDetailList(documentRef, applications, model.useCases);
      fragment.append(applications);
    }

    if (model.introduced || model.authors.length > 0 || model.papers.length > 0) {
      const history = createDetailSection(documentRef, strings.history);
      const historyFacts = documentRef.createElement("dl");
      historyFacts.className = "detail-facts";
      if (model.introduced) {
        const introduced = [model.introduced.year, model.introduced.note]
          .filter(Boolean)
          .map(String);
        appendDetailFact(
          documentRef,
          historyFacts,
          strings.introduced,
          introduced
        );
      }
      appendDetailFact(documentRef, historyFacts, strings.authors, model.authors);
      if (historyFacts.children.length > 0) history.append(historyFacts);
      if (model.papers.length > 0) {
        const label = documentRef.createElement("h4");
        label.className = "detail-subtitle";
        label.textContent = strings.papers;
        history.append(label);
        appendResourceList(documentRef, history, model.papers);
      }
      fragment.append(history);
    }

    const relationshipGroups = [
      [strings.derivedFrom, model.relationships.derivedFrom],
      [strings.derivedAlgorithms, model.relationships.derivedAlgorithms],
      [strings.variantOf, model.relationships.variantOf],
      [strings.variants, model.relationships.variants],
      [strings.improvesUpon, model.relationships.improvesUpon],
      [strings.improvements, model.relationships.improvements],
      [strings.inspiredBy, model.relationships.inspiredBy],
      [strings.inspiredAlgorithms, model.relationships.inspiredAlgorithms],
      [strings.hybridOf, model.relationships.hybridOf],
      [strings.relatedAlgorithms, model.relationships.relatedAlgorithms]
    ].filter(([, items]) => items.length > 0);

    if (
      relationshipGroups.length > 0 ||
      model.relationships.sameProblemComparisons.length > 0
    ) {
      const relationships = createDetailSection(
        documentRef,
        strings.relationships
      );
      const relationshipFacts = documentRef.createElement("dl");
      relationshipFacts.className = "detail-facts";
      for (const [label, items] of relationshipGroups) {
        appendDetailFact(documentRef, relationshipFacts, label, items);
      }
      if (relationshipFacts.children.length > 0) {
        relationships.append(relationshipFacts);
      }
      if (model.relationships.sameProblemComparisons.length > 0) {
        const label = documentRef.createElement("h4");
        const comparisonList = documentRef.createElement("div");
        label.className = "detail-subtitle";
        label.textContent = strings.sameProblem;
        comparisonList.className = "algorithm-comparison-list";
        for (const comparison of model.relationships.sameProblemComparisons) {
          const row = documentRef.createElement("div");
          const name = documentRef.createElement("strong");
          const complexity = documentRef.createElement("span");
          row.className = "algorithm-comparison-row";
          name.textContent = comparison.name;
          complexity.textContent = [
            comparison.timeComplexity
              ? `${strings.time}: ${comparison.timeComplexity}`
              : "",
            comparison.spaceComplexity
              ? `${strings.space}: ${comparison.spaceComplexity}`
              : ""
          ]
            .filter(Boolean)
            .join(" · ");
          row.append(name, complexity);
          comparisonList.append(row);
        }
        relationships.append(label, comparisonList);
      }
      fragment.append(relationships);
    }

    if (model.implementations.length > 0) {
      const implementation = createDetailSection(
        documentRef,
        strings.implementation
      );
      for (const item of model.implementations) {
        if (!item.code) continue;
        const block = documentRef.createElement("div");
        const label = documentRef.createElement("h4");
        const pre = documentRef.createElement("pre");
        const code = documentRef.createElement("code");
        block.className = "implementation-block";
        const statusLabel =
          item.status === "verified"
            ? strings.implementationVerified
            : strings.implementationIllustrative;
        label.textContent = `${item.language || item.label || "Code"} · ${statusLabel}`;
        pre.className = "detail-code";
        code.textContent = item.code;
        pre.append(code);
        block.append(label, pre);
        implementation.append(block);
      }
      if (implementation.children.length > 1) fragment.append(implementation);
    }

    if (model.references.length > 0) {
      const references = createDetailSection(documentRef, strings.references);
      appendResourceList(documentRef, references, model.references);
      fragment.append(references);
    }

    return fragment;
  }

  function getHierarchyNodeLabel(node, indexes, locale = "en") {
    if (node.kind === "group") {
      return getLocalizedHierarchyLabel(node, locale);
    }

    return getLocalizedEntityName(indexes.entityById.get(node.entityId), locale);
  }

  function getAlgorithmAdvancements(
    entityId,
    indexes,
    ancestorEntityIds = new Set(),
    limit = MAX_ALGORITHM_ADVANCEMENTS
  ) {
    const groupedByChildId = new Map();
    const incomingRelations =
      indexes.incomingRelationsByEntityId.get(entityId) || [];

    for (const relation of incomingRelations) {
      if (!ALGORITHM_EXPANSION_TYPE_SET.has(relation.type)) {
        continue;
      }

      const childEntity = indexes.entityById.get(relation.from);

      if (
        !childEntity ||
        childEntity.type !== "algorithm" ||
        ancestorEntityIds.has(childEntity.id)
      ) {
        continue;
      }

      if (!groupedByChildId.has(childEntity.id)) {
        groupedByChildId.set(childEntity.id, {
          entity: childEntity,
          relations: [],
          treePriority: 0
        });
      }

      const advancement = groupedByChildId.get(childEntity.id);
      advancement.relations.push(relation);
      advancement.treePriority = Math.max(
        advancement.treePriority,
        relation.treePriority || 0
      );
    }

    const advancements = [...groupedByChildId.values()];

    for (const advancement of advancements) {
      advancement.relations.sort(
        (left, right) =>
          RELATION_PRIORITY[left.type] - RELATION_PRIORITY[right.type] ||
          left.id.localeCompare(right.id)
      );
    }

    advancements.sort((left, right) => {
      const leftPriority = RELATION_PRIORITY[left.relations[0].type];
      const rightPriority = RELATION_PRIORITY[right.relations[0].type];
      return (
        right.treePriority - left.treePriority ||
        leftPriority - rightPriority ||
        left.entity.name.localeCompare(right.entity.name)
      );
    });

    return advancements.slice(0, Math.max(0, limit));
  }

  function getPinnedViewIds(state) {
    return new Set(
      [
        state.selected?.viewId,
        state.highlightedViewId,
        state.keyboard?.focusedViewId,
        state.search?.targetViewId,
        state.detail?.returnFocusViewId
      ].filter((viewId) => typeof viewId === "string" && viewId !== "")
    );
  }

  function addSetMapValue(map, key, value) {
    if (!map.has(key)) {
      map.set(key, new Set());
    }
    map.get(key).add(value);
  }

  function addDisplacedHierarchyViews(
    displacedHierarchyViewIdsBySourceViewId,
    sourceViewId,
    entityId,
    viewIds
  ) {
    if (!displacedHierarchyViewIdsBySourceViewId.has(sourceViewId)) {
      displacedHierarchyViewIdsBySourceViewId.set(sourceViewId, new Map());
    }
    displacedHierarchyViewIdsBySourceViewId
      .get(sourceViewId)
      .set(entityId, [...viewIds]);
  }

  function buildLocalEntityCollisionPlan(
    hierarchyChildren,
    state,
    indexes,
    ancestorEntityIds = new Set()
  ) {
    const suppressedHierarchyViewIds = new Set();
    const suppressedSemanticEntityIdsBySourceViewId = new Map();
    const displacedHierarchyViewIdsBySourceViewId = new Map();
    const hierarchyAlgorithmsByEntityId = new Map();
    const semanticCandidatesByEntityId = new Map();
    const pinnedViewIds = getPinnedViewIds(state);

    for (let order = 0; order < hierarchyChildren.length; order += 1) {
      const child = hierarchyChildren[order];
      if (child.kind !== "entity") continue;
      const entity = indexes.entityById.get(child.entityId);
      if (!entity || entity.type !== "algorithm") continue;

      if (!hierarchyAlgorithmsByEntityId.has(entity.id)) {
        hierarchyAlgorithmsByEntityId.set(entity.id, []);
      }
      hierarchyAlgorithmsByEntityId.get(entity.id).push(child);

      if (!state.expandedViewIds.has(child.id)) continue;
      const advancementAncestors = new Set(ancestorEntityIds);
      advancementAncestors.add(entity.id);
      for (const advancement of getAlgorithmAdvancements(
        entity.id,
        indexes,
        advancementAncestors
      )) {
        if (!semanticCandidatesByEntityId.has(advancement.entity.id)) {
          semanticCandidatesByEntityId.set(advancement.entity.id, []);
        }
        semanticCandidatesByEntityId.get(advancement.entity.id).push({
          sourceViewId: child.id,
          sourceOrder: order,
          advancement
        });
      }
    }

    for (const [entityId, candidates] of semanticCandidatesByEntityId) {
      const hierarchyPlacements = hierarchyAlgorithmsByEntityId.get(entityId);
      if (!hierarchyPlacements || hierarchyPlacements.length === 0) continue;

      const pinnedHierarchyPlacements = hierarchyPlacements.filter((placement) =>
        pinnedViewIds.has(placement.id)
      );
      if (pinnedHierarchyPlacements.length > 0) {
        const winningHierarchyViewId = pinnedHierarchyPlacements[0].id;
        for (const placement of hierarchyPlacements) {
          if (placement.id !== winningHierarchyViewId) {
            suppressedHierarchyViewIds.add(placement.id);
          }
        }
        for (const candidate of candidates) {
          addSetMapValue(
            suppressedSemanticEntityIdsBySourceViewId,
            candidate.sourceViewId,
            entityId
          );
        }
        continue;
      }

      candidates.sort((left, right) => {
        const leftSelectionPriority =
          state.selected?.viewId === left.sourceViewId
            ? 0
            : state.keyboard?.focusedViewId === left.sourceViewId
              ? 1
              : 2;
        const rightSelectionPriority =
          state.selected?.viewId === right.sourceViewId
            ? 0
            : state.keyboard?.focusedViewId === right.sourceViewId
              ? 1
              : 2;
        return (
          leftSelectionPriority - rightSelectionPriority ||
          right.advancement.treePriority - left.advancement.treePriority ||
          left.sourceOrder - right.sourceOrder ||
          left.sourceViewId.localeCompare(right.sourceViewId)
        );
      });

      const winningCandidate = candidates[0];
      const displacedViewIds = hierarchyPlacements.map(
        (placement) => placement.id
      );
      for (const placement of hierarchyPlacements) {
        suppressedHierarchyViewIds.add(placement.id);
      }
      addDisplacedHierarchyViews(
        displacedHierarchyViewIdsBySourceViewId,
        winningCandidate.sourceViewId,
        entityId,
        displacedViewIds
      );
      for (const candidate of candidates.slice(1)) {
        addSetMapValue(
          suppressedSemanticEntityIdsBySourceViewId,
          candidate.sourceViewId,
          entityId
        );
      }
    }

    return {
      suppressedHierarchyViewIds,
      suppressedSemanticEntityIdsBySourceViewId,
      displacedHierarchyViewIdsBySourceViewId
    };
  }

  function buildVisibleTree(runtime, state) {
    const { indexes } = runtime;

    function visitAlgorithm(
      viewId,
      hierarchyNodeId,
      parentViewId,
      entity,
      depth,
      source,
      viaRelations,
      ancestorEntityIds,
      options = {}
    ) {
      const nextAncestorEntityIds = new Set(ancestorEntityIds);
      nextAncestorEntityIds.add(entity.id);
      const advancements = getAlgorithmAdvancements(
        entity.id,
        indexes,
        nextAncestorEntityIds
      );
      const suppressedSemanticEntityIds =
        options.suppressedSemanticEntityIds || new Set();
      const visibleAdvancements = advancements.filter(
        (advancement) => !suppressedSemanticEntityIds.has(advancement.entity.id)
      );
      const expansionAliasViewIds = options.expansionAliasViewIds || [];
      const hasChildren = visibleAdvancements.length > 0;
      const isExpanded =
        hasChildren &&
        [viewId, ...expansionAliasViewIds].some((candidateViewId) =>
          state.expandedViewIds.has(candidateViewId)
        );
      const view = {
        viewId,
        hierarchyNodeId,
        parentViewId,
        source,
        kind: "entity",
        entityId: entity.id,
        entityType: entity.type,
        label: getLocalizedEntityName(entity, state.locale),
        depth,
        viaRelations,
        relationTypes: viaRelations.map((relation) => relation.type),
        hasChildren,
        isExpanded,
        displacedHierarchyViewIds: [...expansionAliasViewIds],
        children: []
      };

      if (isExpanded) {
        view.children = visibleAdvancements.map((advancement) => {
          const displacedHierarchyViewIds =
            options.displacedHierarchyViewIdsByEntityId?.get(
              advancement.entity.id
            ) || [];
          return visitAlgorithm(
            `semantic:${viewId}:${advancement.entity.id}`,
            null,
            viewId,
            advancement.entity,
            depth + 1,
            "semantic",
            advancement.relations,
            nextAncestorEntityIds,
            { expansionAliasViewIds: displacedHierarchyViewIds }
          );
        });
      }

      return view;
    }

    function visitHierarchy(
      hierarchyNodeId,
      depth,
      parentViewId,
      ancestorEntityIds,
      algorithmOptions = {}
    ) {
      const hierarchyNode = indexes.hierarchyById.get(hierarchyNodeId);

      if (!hierarchyNode) {
        throw new Error(`Cannot build view for missing hierarchy node "${hierarchyNodeId}".`);
      }

      const entity =
        hierarchyNode.kind === "entity"
          ? indexes.entityById.get(hierarchyNode.entityId)
          : null;

      if (entity && entity.type === "algorithm") {
        return visitAlgorithm(
          hierarchyNode.id,
          hierarchyNode.id,
          parentViewId,
          entity,
          depth,
          "hierarchy",
          [],
          ancestorEntityIds,
          algorithmOptions
        );
      }

      const hierarchyChildren =
        indexes.childrenByParentId.get(hierarchyNodeId) || [];
      const isExpanded = state.expandedViewIds.has(hierarchyNodeId);
      const nextAncestorEntityIds = new Set(ancestorEntityIds);

      if (entity) {
        nextAncestorEntityIds.add(entity.id);
      }

      const view = {
        viewId: hierarchyNode.id,
        hierarchyNodeId: hierarchyNode.id,
        parentViewId,
        source: "hierarchy",
        kind: hierarchyNode.kind,
        entityId: entity ? entity.id : null,
        entityType: entity ? entity.type : null,
        label: getHierarchyNodeLabel(hierarchyNode, indexes, state.locale),
        depth,
        viaRelations: [],
        relationTypes: [],
        hasChildren: hierarchyChildren.length > 0,
        isExpanded,
        children: []
      };

      if (isExpanded) {
        const collisionPlan = buildLocalEntityCollisionPlan(
          hierarchyChildren,
          state,
          indexes,
          nextAncestorEntityIds
        );
        view.children = hierarchyChildren
          .filter(
            (child) =>
              !collisionPlan.suppressedHierarchyViewIds.has(child.id)
          )
          .map((child) =>
            visitHierarchy(
              child.id,
              depth + 1,
              view.viewId,
              nextAncestorEntityIds,
              {
                suppressedSemanticEntityIds:
                  collisionPlan.suppressedSemanticEntityIdsBySourceViewId.get(
                    child.id
                  ) || new Set(),
                displacedHierarchyViewIdsByEntityId:
                  collisionPlan.displacedHierarchyViewIdsBySourceViewId.get(
                    child.id
                  ) || new Map()
              }
            )
          );
      }

      return view;
    }

    return visitHierarchy(
      runtime.data.hierarchy.rootId,
      0,
      null,
      new Set()
    );
  }

  function flattenVisibleTree(root) {
    const nodes = [];

    function walk(node) {
      nodes.push(node);

      for (const child of node.children) {
        walk(child);
      }
    }

    walk(root);
    return nodes;
  }

  function resolveKeyboardFocusViewId(state, viewById, rootViewId) {
    const requestedViewId = state.keyboard?.focusedViewId;
    if (requestedViewId && viewById.has(requestedViewId)) {
      return requestedViewId;
    }
    if (state.selected.viewId && viewById.has(state.selected.viewId)) {
      return state.selected.viewId;
    }
    return viewById.has(rootViewId) ? rootViewId : viewById.keys().next().value;
  }

  function getTreeKeyboardAction(
    key,
    currentViewId,
    visibleNodes,
    viewById
  ) {
    const currentIndex = visibleNodes.findIndex(
      (view) => view.viewId === currentViewId
    );
    if (currentIndex < 0) {
      return { type: "none", targetViewId: null };
    }

    const current = visibleNodes[currentIndex];
    if (key === "ArrowDown" && currentIndex < visibleNodes.length - 1) {
      return {
        type: "focus",
        targetViewId: visibleNodes[currentIndex + 1].viewId
      };
    }
    if (key === "ArrowUp" && currentIndex > 0) {
      return {
        type: "focus",
        targetViewId: visibleNodes[currentIndex - 1].viewId
      };
    }
    if (key === "Home") {
      return { type: "focus", targetViewId: visibleNodes[0].viewId };
    }
    if (key === "End") {
      return {
        type: "focus",
        targetViewId: visibleNodes[visibleNodes.length - 1].viewId
      };
    }
    if (key === "ArrowRight") {
      if (current.hasChildren && !current.isExpanded) {
        return { type: "expand", targetViewId: current.viewId };
      }
      if (current.isExpanded && current.children.length > 0) {
        return {
          type: "focus",
          targetViewId: current.children[0].viewId
        };
      }
    }
    if (key === "ArrowLeft") {
      if (current.hasChildren && current.isExpanded) {
        return { type: "collapse", targetViewId: current.viewId };
      }
      if (current.parentViewId && viewById.has(current.parentViewId)) {
        return { type: "focus", targetViewId: current.parentViewId };
      }
    }
    return { type: "none", targetViewId: current.viewId };
  }

  function getMeasuredSize(measurements, viewId) {
    return (
      measurements.get(viewId) || {
        width: TREE_LAYOUT.fallbackNodeWidth,
        height: TREE_LAYOUT.fallbackNodeHeight
      }
    );
  }

  function computeTreeLayout(root, measurements, viewportSize = {}) {
    const viewportWidth =
      viewportSize.width > 0
        ? viewportSize.width
        : TREE_LAYOUT.fallbackViewportWidth;
    const viewportHeight =
      viewportSize.height > 0
        ? viewportSize.height
        : TREE_LAYOUT.fallbackViewportHeight;
    const visibleNodes = flattenVisibleTree(root);
    const layoutByViewId = new Map();
    const subtreeSpanByViewId = new Map();
    const childrenSpanByViewId = new Map();
    const columnWidthByDepth = new Map();
    const xByDepth = new Map();

    for (const node of visibleNodes) {
      const size = getMeasuredSize(measurements, node.viewId);
      const currentWidth = columnWidthByDepth.get(node.depth) || 0;
      columnWidthByDepth.set(node.depth, Math.max(currentWidth, size.width));
    }

    const maximumDepth = Math.max(...visibleNodes.map((node) => node.depth));
    xByDepth.set(0, TREE_LAYOUT.paddingX);

    for (let depth = 1; depth <= maximumDepth; depth += 1) {
      const previousX = xByDepth.get(depth - 1);
      const previousWidth = columnWidthByDepth.get(depth - 1);
      xByDepth.set(depth, previousX + previousWidth + TREE_LAYOUT.columnGap);
    }

    function measureSubtree(node) {
      const size = getMeasuredSize(measurements, node.viewId);

      if (node.children.length === 0) {
        subtreeSpanByViewId.set(node.viewId, size.height);
        childrenSpanByViewId.set(node.viewId, 0);
        return size.height;
      }

      const childSpans = node.children.map(measureSubtree);
      const childrenSpan =
        childSpans.reduce((total, span) => total + span, 0) +
        TREE_LAYOUT.verticalGap * (childSpans.length - 1);
      const subtreeSpan = Math.max(size.height, childrenSpan);

      childrenSpanByViewId.set(node.viewId, childrenSpan);
      subtreeSpanByViewId.set(node.viewId, subtreeSpan);
      return subtreeSpan;
    }

    const rootSpan = measureSubtree(root);
    const treeTop = Math.max(
      TREE_LAYOUT.paddingY,
      (viewportHeight - rootSpan) / 2
    );
    let maximumRight = 0;
    let maximumBottom = 0;

    function placeSubtree(node, subtreeTop) {
      const size = getMeasuredSize(measurements, node.viewId);
      const subtreeSpan = subtreeSpanByViewId.get(node.viewId);
      const x = xByDepth.get(node.depth);
      const y = subtreeTop + (subtreeSpan - size.height) / 2;

      layoutByViewId.set(node.viewId, {
        x,
        y,
        width: size.width,
        height: size.height,
        centerY: y + size.height / 2,
        subtreeSpan
      });

      maximumRight = Math.max(maximumRight, x + size.width);
      maximumBottom = Math.max(maximumBottom, y + size.height);

      if (node.children.length === 0) {
        return;
      }

      const childrenSpan = childrenSpanByViewId.get(node.viewId);
      let childTop = subtreeTop + (subtreeSpan - childrenSpan) / 2;

      for (const child of node.children) {
        placeSubtree(child, childTop);
        childTop +=
          subtreeSpanByViewId.get(child.viewId) + TREE_LAYOUT.verticalGap;
      }
    }

    placeSubtree(root, treeTop);

    return {
      layoutByViewId,
      subtreeSpanByViewId,
      columnWidthByDepth,
      xByDepth,
      bounds: {
        width: Math.max(viewportWidth, maximumRight + TREE_LAYOUT.rightPadding),
        height: Math.max(
          viewportHeight,
          maximumBottom + TREE_LAYOUT.bottomPadding
        )
      }
    };
  }

  function applyHierarchyActivation(state, view) {
    if (!view || view.entityType === "algorithm") {
      return {
        handled: false,
        expansion: "none"
      };
    }

    state.selected.viewId = view.viewId;
    state.selected.entityId = view.entityId;

    let expansion = "none";

    if (view.hasChildren) {
      if (state.expandedViewIds.has(view.viewId)) {
        state.expandedViewIds.delete(view.viewId);
        expansion = "collapsed";
      } else {
        state.expandedViewIds.add(view.viewId);
        expansion = "expanded";
      }
    }

    return {
      handled: true,
      expansion
    };
  }

  function applyAlgorithmActivation(state, view) {
    if (!view || view.entityType !== "algorithm") {
      return {
        handled: false,
        expansion: "none"
      };
    }

    state.selected.viewId = view.viewId;
    state.selected.entityId = view.entityId;

    let expansion = "none";

    if (view.hasChildren) {
      if (state.expandedViewIds.has(view.viewId)) {
        state.expandedViewIds.delete(view.viewId);
        expansion = "collapsed";
      } else {
        state.expandedViewIds.add(view.viewId);
        expansion = "expanded";
      }
    }

    return {
      handled: true,
      expansion
    };
  }

  function getAlgorithmKeyboardAction(key, view) {
    return key === "Enter" && view?.entityType === "algorithm"
      ? "open_detail"
      : null;
  }

  function createAlgorithmClickTransaction(state, viewId, previousRecord = null) {
    if (
      previousRecord?.committed &&
      previousRecord.transaction?.viewId === viewId
    ) {
      return previousRecord.transaction;
    }
    return {
      viewId,
      wasExpanded: state.expandedViewIds.has(viewId)
    };
  }

  function restoreAlgorithmClickTransaction(state, transaction) {
    if (!transaction || typeof transaction.viewId !== "string") {
      return false;
    }

    const isExpanded = state.expandedViewIds.has(transaction.viewId);
    if (transaction.wasExpanded) {
      state.expandedViewIds.add(transaction.viewId);
    } else {
      state.expandedViewIds.delete(transaction.viewId);
    }
    return isExpanded !== transaction.wasExpanded;
  }

  function clampNumber(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function normalizeZoom(value) {
    const clamped = clampNumber(value, ZOOM_CONFIG.min, ZOOM_CONFIG.max);
    return Math.round(clamped * 1000) / 1000;
  }

  function calculateAnchoredZoomScroll(
    oldZoom,
    newZoom,
    scrollLeft,
    scrollTop,
    anchorX,
    anchorY
  ) {
    const logicalX = (scrollLeft + anchorX) / oldZoom;
    const logicalY = (scrollTop + anchorY) / oldZoom;
    return {
      scrollLeft: logicalX * newZoom - anchorX,
      scrollTop: logicalY * newZoom - anchorY
    };
  }

  function calculatePanScroll(
    startScrollLeft,
    startScrollTop,
    startClientX,
    startClientY,
    clientX,
    clientY
  ) {
    return {
      scrollLeft: startScrollLeft - (clientX - startClientX),
      scrollTop: startScrollTop - (clientY - startClientY)
    };
  }

  function applyViewportTransform(state, elements, worldBounds) {
    const zoom = state.viewport.zoom;
    const width = Math.ceil(
      Math.max(elements.viewport.clientWidth, worldBounds.width * zoom)
    );
    const height = Math.ceil(
      Math.max(elements.viewport.clientHeight, worldBounds.height * zoom)
    );
    elements.surface.style.width = `${width}px`;
    elements.surface.style.height = `${height}px`;
    elements.world.style.transform = `scale(${zoom})`;
    elements.world.dataset.zoom = String(zoom);
    return { width, height };
  }

  function updateViewControls(app) {
    const zoom = app.state.viewport.zoom;
    const atMinimum = zoom <= ZOOM_CONFIG.min + Number.EPSILON;
    const atMaximum = zoom >= ZOOM_CONFIG.max - Number.EPSILON;
    const atOrigin =
      Math.abs(app.elements.viewport.scrollLeft) < 1 &&
      Math.abs(app.elements.viewport.scrollTop) < 1;
    app.elements.zoomOutButton.disabled = atMinimum;
    app.elements.zoomInButton.disabled = atMaximum;
    app.elements.resetViewButton.disabled =
      Math.abs(zoom - 1) < 0.001 && atOrigin;
    app.elements.zoomLevel.value = `${Math.round(zoom * 100)}%`;
    app.elements.zoomLevel.textContent = `${Math.round(zoom * 100)}%`;
  }

  function setZoom(app, requestedZoom, anchor = null) {
    const startedAt = getPerformanceNow();
    const oldZoom = app.state.viewport.zoom;
    const newZoom = normalizeZoom(requestedZoom);
    if (Math.abs(newZoom - oldZoom) < 0.0001) {
      updateViewControls(app);
      return false;
    }

    const viewport = app.elements.viewport;
    const focalPoint = anchor || {
      x: viewport.clientWidth / 2,
      y: viewport.clientHeight / 2
    };
    const nextScroll = calculateAnchoredZoomScroll(
      oldZoom,
      newZoom,
      viewport.scrollLeft,
      viewport.scrollTop,
      focalPoint.x,
      focalPoint.y
    );
    app.state.viewport.zoom = newZoom;
    applyViewportTransform(
      app.state,
      app.elements,
      app.renderResult.worldBounds
    );
    viewport.scrollLeft = Math.max(0, nextScroll.scrollLeft);
    viewport.scrollTop = Math.max(0, nextScroll.scrollTop);
    app.state.viewport.scrollLeft = viewport.scrollLeft;
    app.state.viewport.scrollTop = viewport.scrollTop;
    updateViewControls(app);
    recordPerformanceMetric(app, "zoom", startedAt);
    return true;
  }

  function resetView(app) {
    app.state.viewport.zoom = 1;
    app.state.viewport.scrollLeft = 0;
    app.state.viewport.scrollTop = 0;
    app.reflow();
    app.elements.liveRegion.textContent =
      UI_STRINGS[app.state.locale].resetAnnouncement;
    return true;
  }

  function captureViewportAnchor(viewId, layoutByViewId, viewport, zoom = 1) {
    const layout = layoutByViewId.get(viewId);

    if (!layout) {
      return null;
    }

    return {
      viewId,
      screenX:
        (layout.x + layout.width / 2) * zoom - viewport.scrollLeft,
      screenY:
        (layout.y + layout.height / 2) * zoom - viewport.scrollTop
    };
  }

  function restoreViewportAnchor(
    anchor,
    layoutByViewId,
    viewport,
    viewportState,
    zoom = 1
  ) {
    if (!anchor) {
      return false;
    }

    const layout = layoutByViewId.get(anchor.viewId);

    if (!layout) {
      return false;
    }

    viewport.scrollLeft = Math.max(
      0,
      (layout.x + layout.width / 2) * zoom - anchor.screenX
    );
    viewport.scrollTop = Math.max(
      0,
      (layout.y + layout.height / 2) * zoom - anchor.screenY
    );
    viewportState.scrollLeft = viewport.scrollLeft;
    viewportState.scrollTop = viewport.scrollTop;
    return true;
  }

  function createNodeElement(
    documentRef,
    view,
    state,
    selectedPathViewIdSet = new Set()
  ) {
    const node = documentRef.createElement("button");
    const text = documentRef.createElement("span");
    const label = documentRef.createElement("span");

    node.type = "button";
    node.className = "tree-node is-measuring";
    node.dataset.viewId = view.viewId;
    node.dataset.nodeKind = view.kind;
    node.dataset.viewSource = view.source;
    node.setAttribute("role", "treeitem");
    node.setAttribute("aria-level", String(view.depth + 1));
    node.tabIndex =
      state.keyboard.focusedViewId === view.viewId ? 0 : -1;
    node.title = view.label;

    if (view.entityId) {
      node.dataset.entityId = view.entityId;
      node.dataset.entityType = view.entityType;
    }

    if (view.entityType === "algorithm") {
      node.setAttribute("aria-keyshortcuts", "Enter");
      node.title = UI_STRINGS[state.locale].algorithmNodeTitle(view.label);
    }

    if (view.hasChildren) {
      node.setAttribute("aria-expanded", String(view.isExpanded));
    }

    if (view.isExpanded) {
      node.classList.add("is-expanded");
    }

    if (state.selected.viewId === view.viewId) {
      node.classList.add("is-selected");
      node.setAttribute("aria-selected", "true");
    } else {
      node.setAttribute("aria-selected", "false");
      if (selectedPathViewIdSet.has(view.viewId)) {
        node.classList.add("is-path-ancestor");
      }
    }

    if (state.highlightedViewId === view.viewId) {
      node.classList.add("is-search-highlighted");
    }

    if (view.depth === 0) {
      node.classList.add("tree-node--root");
    }

    text.className = "tree-node__text";
    label.className = "tree-node__label";
    label.textContent = view.label;
    text.append(label);

    if (view.source === "semantic" && view.relationTypes.length > 0) {
      const relation = documentRef.createElement("span");
      const relationLabels = [
        ...new Set(
          view.relationTypes.map(
            (relationType) =>
              RELATION_LABELS[state.locale][relationType] || relationType
          )
        )
      ];

      relation.className = "tree-node__relation";
      relation.textContent = relationLabels.join(" · ");
      text.append(relation);
    }

    node.append(text);

    if (view.hasChildren) {
      const indicator = documentRef.createElement("span");
      indicator.className = "tree-node__indicator";
      indicator.setAttribute("aria-hidden", "true");
      indicator.textContent = view.isExpanded ? "−" : "+";
      node.append(indicator);
    }

    return node;
  }

  function formatSvgNumber(value) {
    const rounded = Math.round(value * 100) / 100;
    return Object.is(rounded, -0) ? "0" : String(rounded);
  }

  function createOrthogonalConnectorGeometry(parentLayout, childEntries) {
    if (!parentLayout || childEntries.length === 0) {
      return null;
    }

    const orderedChildren = [...childEntries].sort(
      (left, right) => left.layout.centerY - right.layout.centerY
    );
    const parentRight = parentLayout.x + parentLayout.width;
    const parentCenterY = parentLayout.centerY;
    const nearestChildLeft = Math.min(
      ...orderedChildren.map((child) => child.layout.x)
    );

    if (nearestChildLeft <= parentRight) {
      throw new Error(
        "Cannot draw an orthogonal connector when a child is not to the right of its parent."
      );
    }

    const busX = parentRight + (nearestChildLeft - parentRight) / 2;
    const parentAnchor = {
      x: parentRight,
      y: parentCenterY
    };
    const childAnchors = orderedChildren.map((child) => ({
      viewId: child.viewId,
      x: child.layout.x,
      y: child.layout.centerY
    }));
    const number = formatSvgNumber;
    const segments = [];

    if (childAnchors.length === 1) {
      const child = childAnchors[0];
      segments.push(
        `M ${number(parentAnchor.x)} ${number(parentAnchor.y)} ` +
          `H ${number(busX)} V ${number(child.y)} H ${number(child.x)}`
      );
    } else {
      const firstChild = childAnchors[0];
      const lastChild = childAnchors[childAnchors.length - 1];

      segments.push(
        `M ${number(parentAnchor.x)} ${number(parentAnchor.y)} H ${number(busX)}`
      );
      segments.push(
        `M ${number(busX)} ${number(firstChild.y)} V ${number(lastChild.y)}`
      );

      for (const child of childAnchors) {
        segments.push(
          `M ${number(busX)} ${number(child.y)} H ${number(child.x)}`
        );
      }
    }

    return {
      busX,
      parentAnchor,
      childAnchors,
      pathData: segments.join(" ")
    };
  }

  function createConnectorBranchPathData(descriptor, childViewId) {
    if (!descriptor || !childViewId) {
      return null;
    }
    const child = descriptor.childAnchors.find(
      (anchor) => anchor.viewId === childViewId
    );
    if (!child) {
      return null;
    }
    const number = formatSvgNumber;
    return (
      `M ${number(descriptor.parentAnchor.x)} ${number(descriptor.parentAnchor.y)} ` +
      `H ${number(descriptor.busX)} V ${number(child.y)} H ${number(child.x)}`
    );
  }

  function buildConnectorDescriptors(root, layoutByViewId) {
    const descriptors = [];

    function walk(parent) {
      if (parent.children.length > 0) {
        const parentLayout = layoutByViewId.get(parent.viewId);
        const childEntries = parent.children.map((child) => ({
          viewId: child.viewId,
          layout: layoutByViewId.get(child.viewId)
        }));
        const geometry = createOrthogonalConnectorGeometry(
          parentLayout,
          childEntries
        );

        descriptors.push({
          parentViewId: parent.viewId,
          childViewIds: geometry.childAnchors.map((child) => child.viewId),
          ...geometry
        });
      }

      for (const child of parent.children) {
        walk(child);
      }
    }

    walk(root);
    return descriptors;
  }

  function drawConnections(
    root,
    layoutByViewId,
    connectorLayer,
    enteringViewIds = new Set(),
    selectedPathViewIds = []
  ) {
    const descriptors = buildConnectorDescriptors(root, layoutByViewId);
    const descriptorByParentViewId = new Map(
      descriptors.map((descriptor) => [descriptor.parentViewId, descriptor])
    );
    const documentRef = connectorLayer.ownerDocument;
    const fragment = documentRef.createDocumentFragment();

    for (const descriptor of descriptors) {
      const path = documentRef.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      path.setAttribute("class", "tree-connector");
      path.setAttribute("d", descriptor.pathData);
      path.setAttribute("pathLength", "1");
      path.dataset.parentViewId = descriptor.parentViewId;
      path.dataset.childCount = String(descriptor.childViewIds.length);
      if (
        descriptor.childViewIds.some((viewId) => enteringViewIds.has(viewId))
      ) {
        path.classList.add("is-entering");
      }
      fragment.append(path);
    }

    let activeConnectorCount = 0;
    for (let index = 1; index < selectedPathViewIds.length; index += 1) {
      const parentViewId = selectedPathViewIds[index - 1];
      const childViewId = selectedPathViewIds[index];
      const descriptor = descriptorByParentViewId.get(parentViewId);
      const branchPathData = createConnectorBranchPathData(
        descriptor,
        childViewId
      );
      if (!branchPathData) {
        continue;
      }

      const activePath = documentRef.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      activePath.setAttribute(
        "class",
        "tree-connector tree-connector--active"
      );
      activePath.setAttribute("d", branchPathData);
      activePath.setAttribute("pathLength", "1");
      activePath.dataset.parentViewId = parentViewId;
      activePath.dataset.childViewId = childViewId;
      if (enteringViewIds.has(childViewId)) {
        activePath.classList.add("is-entering");
      }
      fragment.append(activePath);
      activeConnectorCount += 1;
    }

    connectorLayer.replaceChildren(fragment);
    connectorLayer.dataset.connectorCount = String(descriptors.length);
    connectorLayer.dataset.activeConnectorCount = String(activeConnectorCount);
    return descriptors;
  }

  function reflowTreeGeometry(renderResult, state, elements, options = {}) {
    const measurements = new Map();

    for (const [viewId, node] of renderResult.nodeElementsByViewId) {
      measurements.set(viewId, {
        width: node.offsetWidth || TREE_LAYOUT.fallbackNodeWidth,
        height: node.offsetHeight || TREE_LAYOUT.fallbackNodeHeight
      });
    }

    const layout = computeTreeLayout(renderResult.visibleRoot, measurements, {
      width: elements.viewport.clientWidth / state.viewport.zoom,
      height: elements.viewport.clientHeight / state.viewport.zoom
    });

    for (const [viewId, node] of renderResult.nodeElementsByViewId) {
      const position = layout.layoutByViewId.get(viewId);

      node.style.left = `${position.x}px`;
      node.style.top = `${position.y}px`;
      node.classList.remove("is-measuring");
    }

    const worldWidth = Math.ceil(layout.bounds.width);
    const worldHeight = Math.ceil(layout.bounds.height);

    elements.world.style.width = `${worldWidth}px`;
    elements.world.style.height = `${worldHeight}px`;
    elements.connectorLayer.setAttribute("width", String(worldWidth));
    elements.connectorLayer.setAttribute("height", String(worldHeight));
    elements.connectorLayer.setAttribute(
      "viewBox",
      `0 0 ${worldWidth} ${worldHeight}`
    );
    const selectedPathViewIds = getVisiblePathViewIds(
      state.selected.viewId,
      renderResult.viewById
    );
    const connectors = drawConnections(
      renderResult.visibleRoot,
      layout.layoutByViewId,
      elements.connectorLayer,
      options.animateConnections === true
        ? renderResult.enteringViewIds
        : new Set(),
      selectedPathViewIds
    );
    const scaledWorldBounds = applyViewportTransform(
      state,
      elements,
      layout.bounds
    );
    renderResult.layoutByViewId = layout.layoutByViewId;
    renderResult.connectors = connectors;
    renderResult.selectedPathViewIds = selectedPathViewIds;
    renderResult.worldBounds = layout.bounds;
    renderResult.scaledWorldBounds = scaledWorldBounds;
    return renderResult;
  }

  function renderTree(runtime, state, elements, options = {}) {
    const visibleRoot = buildVisibleTree(runtime, state);
    const visibleNodes = flattenVisibleTree(visibleRoot);
    const viewById = new Map(visibleNodes.map((view) => [view.viewId, view]));
    state.keyboard.focusedViewId = resolveKeyboardFocusViewId(
      state,
      viewById,
      runtime.data.hierarchy.rootId
    );
    const selectedPathViewIds = getVisiblePathViewIds(
      state.selected.viewId,
      viewById
    );
    const selectedPathViewIdSet = new Set(selectedPathViewIds);
    const nodeElementsByViewId = new Map();
    const enteringViewIds = new Set();
    const previousVisibleViewIds = options.previousVisibleViewIds || new Set();
    const fragment = elements.nodeLayer.ownerDocument.createDocumentFragment();

    elements.nodeLayer.replaceChildren();

    for (const view of visibleNodes) {
      const node = createNodeElement(
        elements.nodeLayer.ownerDocument,
        view,
        state,
        selectedPathViewIdSet
      );
      if (options.animate === true && !previousVisibleViewIds.has(view.viewId)) {
        node.classList.add("is-entering");
        enteringViewIds.add(view.viewId);
      }
      nodeElementsByViewId.set(view.viewId, node);
      fragment.append(node);
    }

    elements.nodeLayer.append(fragment);
    elements.nodeLayer.dataset.visibleCount = String(visibleNodes.length);

    const renderResult = {
      visibleRoot,
      visibleNodes,
      viewById,
      nodeElementsByViewId,
      layoutByViewId: new Map(),
      connectors: [],
      selectedPathViewIds,
      enteringViewIds,
      worldBounds: { width: 0, height: 0 },
      scaledWorldBounds: { width: 0, height: 0 }
    };
    return reflowTreeGeometry(renderResult, state, elements, {
      animateConnections: options.animate === true
    });
  }

  function collectDescendantViewIds(view) {
    const ids = new Set();

    function visit(current) {
      for (const child of current.children) {
        ids.add(child.viewId);
        visit(child);
      }
    }

    if (view) visit(view);
    return ids;
  }

  function cancelPendingTreeTransition(app) {
    if (!app.pendingTreeTransition) {
      return false;
    }

    global.clearTimeout(app.pendingTreeTransition.timerId);
    app.pendingTreeTransition = null;
    return true;
  }

  function finishPendingTreeTransition(app) {
    if (!app.pendingTreeTransition) {
      return false;
    }

    const { timerId, finalize } = app.pendingTreeTransition;
    global.clearTimeout(timerId);
    app.pendingTreeTransition = null;
    finalize();
    return true;
  }

  function prefersReducedMotion() {
    return (
      typeof global.matchMedia === "function" &&
      global.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function beginCollapseTransition(app, viewId, finalize) {
    if (prefersReducedMotion()) {
      return false;
    }

    const view = app.renderResult.viewById.get(viewId);
    const exitingViewIds = collectDescendantViewIds(view);
    if (exitingViewIds.size === 0) {
      return false;
    }

    for (const exitingViewId of exitingViewIds) {
      const node = app.renderResult.nodeElementsByViewId.get(exitingViewId);
      if (node) node.classList.add("is-leaving");
    }

    for (const connector of app.elements.connectorLayer.querySelectorAll(
      ".tree-connector"
    )) {
      if (
        connector.dataset.parentViewId === viewId ||
        exitingViewIds.has(connector.dataset.parentViewId)
      ) {
        connector.classList.add("is-leaving");
      }
    }

    const parentNode = app.renderResult.nodeElementsByViewId.get(viewId);
    if (parentNode) {
      parentNode.classList.remove("is-expanded");
      parentNode.setAttribute("aria-expanded", "false");
      const indicator = parentNode.querySelector(".tree-node__indicator");
      if (indicator) indicator.textContent = "+";
    }
    syncSelectionClasses(app, { syncPath: false });

    const timerId = global.setTimeout(() => {
      if (!app.pendingTreeTransition) return;
      app.pendingTreeTransition = null;
      finalize();
    }, COLLAPSE_ANIMATION_MS);
    app.pendingTreeTransition = { timerId, finalize };
    return true;
  }

  function beginViewReplacementTransition(app, finalize) {
    if (prefersReducedMotion()) {
      return false;
    }

    const nextVisibleRoot = buildVisibleTree(app.runtime, app.state);
    const nextVisibleViewIds = new Set(
      flattenVisibleTree(nextVisibleRoot).map((view) => view.viewId)
    );
    const exitingViewIds = app.renderResult.visibleNodes
      .map((view) => view.viewId)
      .filter((viewId) => !nextVisibleViewIds.has(viewId));
    if (exitingViewIds.length === 0) {
      return false;
    }

    for (const exitingViewId of exitingViewIds) {
      const node = app.renderResult.nodeElementsByViewId.get(exitingViewId);
      if (node) node.classList.add("is-leaving");
    }

    const timerId = global.setTimeout(() => {
      if (!app.pendingTreeTransition) return;
      app.pendingTreeTransition = null;
      finalize();
    }, COLLAPSE_ANIMATION_MS);
    app.pendingTreeTransition = { timerId, finalize };
    return true;
  }

  function finalizeTreeActivation(app, viewId, anchor, message, animate = true) {
    app.render({ animate });
    restoreViewportAnchor(
      anchor,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport,
      app.state.viewport.zoom
    );

    const nextNode = app.renderResult.nodeElementsByViewId.get(viewId);
    if (nextNode) nextNode.focus({ preventScroll: true });
    app.elements.liveRegion.textContent = message;
  }

  function activateHierarchyView(app, viewId) {
    finishPendingTreeTransition(app);
    const view = app.renderResult.viewById.get(viewId);

    if (!view || view.entityType === "algorithm") {
      return false;
    }
    app.state.keyboard.focusedViewId = viewId;

    const anchor = captureViewportAnchor(
      viewId,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport.zoom
    );
    const change = applyHierarchyActivation(app.state, view);

    if (!change.handled) {
      return false;
    }

    const strings = UI_STRINGS[app.state.locale];
    const actionLabel =
      change.expansion === "expanded"
        ? strings.expanded
        : change.expansion === "collapsed"
          ? strings.collapsed
          : strings.selected;
    const message = strings.hierarchyAction(view.label, actionLabel);

    if (
      change.expansion === "collapsed" &&
      beginCollapseTransition(app, viewId, () =>
        finalizeTreeActivation(app, viewId, anchor, message)
      )
    ) {
      return true;
    }

    if (
      change.expansion === "expanded" &&
      beginViewReplacementTransition(app, () =>
        finalizeTreeActivation(app, viewId, anchor, message)
      )
    ) {
      return true;
    }

    finalizeTreeActivation(app, viewId, anchor, message);
    return true;
  }

  function syncActivePathHighlight(app) {
    const selectedPathViewIds = getVisiblePathViewIds(
      app.state.selected.viewId,
      app.renderResult.viewById
    );
    const selectedPathViewIdSet = new Set(selectedPathViewIds);

    for (const [viewId, node] of app.renderResult.nodeElementsByViewId) {
      node.classList.toggle(
        "is-path-ancestor",
        viewId !== app.state.selected.viewId &&
          selectedPathViewIdSet.has(viewId)
      );
    }

    app.renderResult.connectors = drawConnections(
      app.renderResult.visibleRoot,
      app.renderResult.layoutByViewId,
      app.elements.connectorLayer,
      new Set(),
      selectedPathViewIds
    );
    app.renderResult.selectedPathViewIds = selectedPathViewIds;
    return selectedPathViewIds;
  }

  function syncSelectionClasses(app, options = {}) {
    for (const [viewId, node] of app.renderResult.nodeElementsByViewId) {
      const isSelected = app.state.selected.viewId === viewId;
      node.classList.toggle("is-selected", isSelected);
      node.setAttribute("aria-selected", String(isSelected));
    }
    if (options.syncPath !== false) {
      syncActivePathHighlight(app);
    }
    renderCurrentPath(app);
  }

  function activateAlgorithmView(app, viewId) {
    finishPendingTreeTransition(app);
    const view = app.renderResult.viewById.get(viewId);

    if (!view || view.entityType !== "algorithm") {
      return false;
    }
    app.state.keyboard.focusedViewId = viewId;

    const anchor = captureViewportAnchor(
      viewId,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport.zoom
    );
    const change = applyAlgorithmActivation(app.state, view);

    if (!change.handled) {
      return false;
    }

    const strings = UI_STRINGS[app.state.locale];
    const actionLabel =
      change.expansion === "expanded"
        ? strings.expanded
        : change.expansion === "collapsed"
          ? strings.collapsed
          : strings.selected;
    const message = strings.algorithmAction(view.label, actionLabel);

    if (change.expansion === "none") {
      syncSelectionClasses(app);
      syncRovingTabIndex(app);
      app.elements.liveRegion.textContent = message;
      return true;
    }

    if (
      change.expansion === "collapsed" &&
      beginCollapseTransition(app, viewId, () =>
        finalizeTreeActivation(app, viewId, anchor, message)
      )
    ) {
      return true;
    }

    if (
      change.expansion === "expanded" &&
      beginViewReplacementTransition(app, () =>
        finalizeTreeActivation(app, viewId, anchor, message)
      )
    ) {
      return true;
    }

    finalizeTreeActivation(app, viewId, anchor, message);
    return true;
  }

  function cancelPendingAlgorithmClick(app, viewId) {
    const record = app.pendingAlgorithmClicks.get(viewId);

    if (!record) {
      return false;
    }

    if (record.actionTimerId !== null) {
      global.clearTimeout(record.actionTimerId);
    }
    if (record.cleanupTimerId !== null) {
      global.clearTimeout(record.cleanupTimerId);
    }
    app.pendingAlgorithmClicks.delete(viewId);
    return true;
  }

  function cancelAllPendingAlgorithmClicks(app) {
    for (const record of app.pendingAlgorithmClicks.values()) {
      if (record.actionTimerId !== null) {
        global.clearTimeout(record.actionTimerId);
      }
      if (record.cleanupTimerId !== null) {
        global.clearTimeout(record.cleanupTimerId);
      }
    }
    app.pendingAlgorithmClicks.clear();
  }

  function pausePendingAlgorithmClickForDoubleClick(app, viewId) {
    const record = app.pendingAlgorithmClicks.get(viewId);
    if (!record) {
      return false;
    }
    if (record.actionTimerId !== null) {
      global.clearTimeout(record.actionTimerId);
      record.actionTimerId = null;
    }
    return true;
  }

  function rollbackAlgorithmClickBeforeDetail(app, viewId) {
    const record = app.pendingAlgorithmClicks.get(viewId);
    if (!record) {
      return false;
    }

    if (record.actionTimerId !== null) {
      global.clearTimeout(record.actionTimerId);
    }
    if (record.cleanupTimerId !== null) {
      global.clearTimeout(record.cleanupTimerId);
    }
    app.pendingAlgorithmClicks.delete(viewId);

    if (!record.committed) {
      return false;
    }

    const anchor = captureViewportAnchor(
      viewId,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport.zoom
    );
    cancelPendingTreeTransition(app);
    restoreAlgorithmClickTransaction(app.state, record.transaction);
    app.render({ animate: false });
    restoreViewportAnchor(
      anchor,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport,
      app.state.viewport.zoom
    );
    return true;
  }

  function scheduleAlgorithmSingleClick(app, viewId) {
    const previousRecord = app.pendingAlgorithmClicks.get(viewId) || null;
    const transaction = createAlgorithmClickTransaction(
      app.state,
      viewId,
      previousRecord
    );
    const inheritedCommitted = previousRecord?.committed === true;
    cancelPendingAlgorithmClick(app, viewId);

    const record = {
      transaction,
      actionTimerId: null,
      cleanupTimerId: null,
      committed: inheritedCommitted
    };
    record.actionTimerId = global.setTimeout(() => {
      if (app.pendingAlgorithmClicks.get(viewId) !== record) {
        return;
      }
      record.actionTimerId = null;
      record.committed = true;
      app.activateAlgorithmView(viewId);
      record.cleanupTimerId = global.setTimeout(() => {
        if (app.pendingAlgorithmClicks.get(viewId) === record) {
          app.pendingAlgorithmClicks.delete(viewId);
        }
      }, ALGORITHM_DOUBLE_CLICK_GUARD_MS);
    }, ALGORITHM_CLICK_DELAY);

    app.pendingAlgorithmClicks.set(viewId, record);
    return record;
  }

  function handleNodeLayerClick(event, app) {
    const node = event.target.closest("[data-view-id]");

    if (!node || !app.elements.nodeLayer.contains(node)) {
      return;
    }

    const viewId = node.dataset.viewId;
    const view = app.renderResult.viewById.get(viewId);

    if (!view) {
      return;
    }
    app.state.keyboard.focusedViewId = viewId;
    syncRovingTabIndex(app);

    if (view.entityType === "algorithm") {
      app.state.selected.viewId = view.viewId;
      app.state.selected.entityId = view.entityId;
      syncSelectionClasses(app);

      if (event.detail > 1) {
        pausePendingAlgorithmClickForDoubleClick(app, viewId);
        return;
      }

      scheduleAlgorithmSingleClick(app, viewId);
      return;
    }

    if (event.detail <= 1) {
      activateHierarchyView(app, viewId);
    }
  }

  function handleNodeLayerDoubleClick(event, app) {
    const node = event.target.closest("[data-view-id]");

    if (!node || !app.elements.nodeLayer.contains(node)) {
      return;
    }

    const view = app.renderResult.viewById.get(node.dataset.viewId);

    if (!view || view.entityType !== "algorithm") {
      return;
    }

    event.preventDefault();
    rollbackAlgorithmClickBeforeDetail(app, view.viewId);
    openAlgorithmDetailFromView(app, view);
  }

  function openAlgorithmDetailFromView(app, view) {
    if (!view || view.entityType !== "algorithm") {
      return false;
    }
    app.state.keyboard.focusedViewId = view.viewId;
    syncRovingTabIndex(app);
    app.state.selected.viewId = view.viewId;
    app.state.selected.entityId = view.entityId;
    syncSelectionClasses(app);
    return openDetailPanel(app, view);
  }

  function renderDetailPanelForEntity(app, entityId) {
    const model = buildAlgorithmDetailModel(
      entityId,
      app.runtime,
      app.state.locale
    );
    if (!model) {
      return null;
    }
    app.elements.detailTitle.textContent = model.name;

    if (model.aliases.length > 0) {
      app.elements.detailAliases.textContent = model.aliases.join(" · ");
      app.elements.detailAliases.hidden = false;
    } else {
      app.elements.detailAliases.textContent = "";
      app.elements.detailAliases.hidden = true;
    }

    app.elements.detailContent.replaceChildren(
      renderDetailPanelContent(app.elements.detailContent.ownerDocument, model)
    );
    app.elements.detailContent.scrollTop = 0;
    return model;
  }

  function openDetailPanel(app, view) {
    if (!view || view.entityType !== "algorithm") {
      return false;
    }

    const model = renderDetailPanelForEntity(app, view.entityId);
    if (!model) {
      return false;
    }

    app.state.detail.isOpen = true;
    app.state.detail.entityId = view.entityId;
    app.state.detail.returnFocusViewId = view.viewId;
    app.elements.detailPanel.hidden = false;
    app.elements.detailPanel.setAttribute("aria-hidden", "false");
    app.elements.workspace.classList.add("is-detail-open");
    app.elements.detailCloseButton.focus({ preventScroll: true });
    app.elements.liveRegion.textContent =
      UI_STRINGS[app.state.locale].openedDetail(model.name);
    return true;
  }

  function focusDetailReturnTarget(app, viewId) {
    const focusedViewId = app.renderResult.viewById.has(viewId)
      ? viewId
      : resolveKeyboardFocusViewId(
          app.state,
          app.renderResult.viewById,
          app.runtime.data.hierarchy.rootId
        );
    const target = app.renderResult.nodeElementsByViewId.get(focusedViewId);
    if (!target) {
      app.elements.viewport.focus({ preventScroll: true });
      return false;
    }
    app.state.keyboard.focusedViewId = focusedViewId;
    syncRovingTabIndex(app);
    target.focus({ preventScroll: true });
    return true;
  }

  function closeDetailPanel(app, options = {}) {
    if (!app.state.detail.isOpen) {
      return false;
    }

    const returnFocusViewId = app.state.detail.returnFocusViewId;
    const algorithmName = app.elements.detailTitle.textContent;
    app.state.detail.isOpen = false;
    app.state.detail.entityId = null;
    app.state.detail.returnFocusViewId = null;
    app.elements.workspace.classList.remove("is-detail-open");
    app.elements.detailPanel.hidden = true;
    app.elements.detailPanel.setAttribute("aria-hidden", "true");
    app.elements.detailAliases.hidden = true;
    app.elements.detailContent.replaceChildren();
    app.elements.liveRegion.textContent =
      UI_STRINGS[app.state.locale].closedDetail(algorithmName);

    if (options.restoreFocus !== false) {
      focusDetailReturnTarget(app, returnFocusViewId);
    }

    return true;
  }

  function renderCurrentPath(app) {
    const path = getRenderedViewPath(
      app.state.selected.viewId,
      app.runtime,
      app.renderResult,
      app.state.locale
    );

    if (path.length === 0) {
      app.elements.lineagePath.replaceChildren();
      app.elements.lineagePath.hidden = true;
      return [];
    }

    const documentRef = app.elements.lineagePath.ownerDocument;
    const list = documentRef.createElement("ol");
    list.className = "lineage-path__list";
    for (const [index, item] of path.entries()) {
      const listItem = documentRef.createElement("li");
      const button = documentRef.createElement("button");
      const label = documentRef.createElement("span");
      listItem.className = "lineage-path__item";
      button.type = "button";
      button.className = "lineage-path__button";
      button.dataset.pathViewId = item.viewId;
      label.className = "lineage-path__label";
      label.textContent = item.label;
      button.title = item.label;
      if (index === path.length - 1) {
        button.setAttribute("aria-current", "location");
      }
      button.append(label);
      listItem.append(button);
      list.append(listItem);
    }

    app.elements.lineagePath.replaceChildren(list);
    app.elements.lineagePath.setAttribute(
      "aria-label",
      UI_STRINGS[app.state.locale].currentPath
    );
    app.elements.lineagePath.hidden = false;
    return path;
  }

  function focusPathView(app, viewId) {
    finishPendingTreeTransition(app);
    const view = app.renderResult.viewById.get(viewId);
    if (!view) {
      return false;
    }

    cancelAllPendingAlgorithmClicks(app);
    app.state.selected.viewId = view.viewId;
    app.state.selected.entityId = view.entityId;
    app.state.highlightedViewId = null;
    app.state.search.targetEntityId = null;
    app.state.search.targetViewId = null;
    syncSelectionClasses(app);
    syncSearchHighlightClasses(app);
    focusNodeInViewport(app, view.viewId);
    app.elements.liveRegion.textContent = UI_STRINGS[
      app.state.locale
    ].pathFocused(view.label);
    return true;
  }

  function handleLineagePathClick(event, app) {
    const button = event.target.closest("[data-path-view-id]");
    if (!button || !app.elements.lineagePath.contains(button)) {
      return;
    }
    focusPathView(app, button.dataset.pathViewId);
  }

  function setSearchResultsOpen(app, isOpen) {
    app.elements.searchPopover.hidden = !isOpen;
    app.elements.searchInput.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      app.elements.searchInput.removeAttribute("aria-activedescendant");
    }
  }

  function updateSearchMatches(app) {
    app.state.search.typeFilter = normalizeSearchFilter(
      app.state.search.typeFilter
    );
    app.state.search.matches = searchEntities(
      app.state.search.query,
      app.searchIndex,
      SEARCH_RESULT_LIMIT,
      app.state.search.typeFilter
    );
    app.state.search.activeIndex =
      app.state.search.matches.length > 0 ? 0 : -1;
    return app.state.search.matches;
  }

  function renderSearchFilters(app) {
    const documentRef = app.elements.searchFilters.ownerDocument;
    const fragment = documentRef.createDocumentFragment();
    const counts = getSearchFilterCounts(
      app.state.search.query,
      app.searchIndex
    );
    const activeFilter = normalizeSearchFilter(app.state.search.typeFilter);

    for (const type of SEARCH_FILTER_TYPES) {
      const button = documentRef.createElement("button");
      const isActive = type === activeFilter;
      const count = counts[type] || 0;
      button.type = "button";
      button.className = "search-filter";
      button.dataset.searchFilter = type;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
      button.disabled = count === 0;
      button.textContent = `${SEARCH_FILTER_LABELS[app.state.locale][type]} ${count}`;
      fragment.append(button);
    }

    app.elements.searchFilters.replaceChildren(fragment);
    return counts;
  }

  function renderSearchResults(app) {
    const { matches, activeIndex, query } = app.state.search;
    const documentRef = app.elements.searchResults.ownerDocument;
    const fragment = documentRef.createDocumentFragment();
    renderSearchFilters(app);

    if (matches.length === 0) {
      const empty = documentRef.createElement("p");
      empty.className = "search-results__empty";
      empty.textContent = UI_STRINGS[app.state.locale].noSearchResults(query);
      fragment.append(empty);
    } else {
      matches.forEach((match, index) => {
        const option = documentRef.createElement("button");
        const heading = documentRef.createElement("span");
        const name = documentRef.createElement("span");
        const type = documentRef.createElement("span");
        option.type = "button";
        option.className = "search-result";
        option.id = `search-result-${index}`;
        option.dataset.searchKey = match.searchKey;
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", String(index === activeIndex));
        option.tabIndex = -1;
        if (index === activeIndex) option.classList.add("is-active");
        heading.className = "search-result__heading";
        name.className = "search-result__name";
        name.textContent =
          match.localizedNames[app.state.locale] || match.name;
        type.className = "search-result__type";
        type.textContent = ENTITY_TYPE_LABELS[app.state.locale][match.entityType];
        heading.append(name, type);
        option.append(heading);

        const summaryText = match.localizedSummaries[app.state.locale];
        if (summaryText) {
          const summaryElement = documentRef.createElement("span");
          summaryElement.className = "search-result__summary";
          summaryElement.textContent = summaryText;
          option.append(summaryElement);
        }

        const path =
          match.targetType === "hierarchy"
            ? getLocalizedHierarchyPath(
                match.targetViewId,
                app.runtime.indexes,
                app.state.locale
              )
            : getLocalizedPrimaryPath(
                match.entityId,
                app.runtime.indexes,
                app.state.locale
              );
        if (path.length > 0) {
          const pathElement = documentRef.createElement("span");
          pathElement.className = "search-result__path";
          pathElement.textContent = path.map((item) => item.label).join(" › ");
          pathElement.title = pathElement.textContent;
          option.append(pathElement);
        }

        fragment.append(option);
      });
    }

    app.elements.searchResults.replaceChildren(fragment);
    setSearchResultsOpen(app, Boolean(query));

    if (matches.length > 0 && activeIndex >= 0) {
      app.elements.searchInput.setAttribute(
        "aria-activedescendant",
        `search-result-${activeIndex}`
      );
    }
  }

  function closeSearchResults(app) {
    app.state.search.activeIndex = -1;
    setSearchResultsOpen(app, false);
  }

  function syncSearchHighlightClasses(app) {
    for (const [viewId, node] of app.renderResult.nodeElementsByViewId) {
      node.classList.toggle(
        "is-search-highlighted",
        app.state.highlightedViewId === viewId
      );
    }
  }

  function setActiveSearchResult(app, nextIndex) {
    const count = app.state.search.matches.length;
    if (count === 0) {
      return false;
    }

    app.state.search.activeIndex = (nextIndex + count) % count;
    renderSearchResults(app);
    const activeOption = app.elements.searchResults.querySelector(".is-active");
    if (activeOption && typeof activeOption.scrollIntoView === "function") {
      activeOption.scrollIntoView({ block: "nearest" });
    }
    return true;
  }

  function syncRovingTabIndex(app) {
    const focusedViewId = resolveKeyboardFocusViewId(
      app.state,
      app.renderResult.viewById,
      app.runtime.data.hierarchy.rootId
    );
    app.state.keyboard.focusedViewId = focusedViewId;
    for (const [viewId, node] of app.renderResult.nodeElementsByViewId) {
      node.tabIndex = viewId === focusedViewId ? 0 : -1;
    }
    return focusedViewId;
  }

  function getActiveTreeViewId(app) {
    const activeElement =
      app.elements.viewport.ownerDocument.activeElement;
    const node =
      activeElement && typeof activeElement.closest === "function"
        ? activeElement.closest("[data-view-id]")
        : null;
    return node && app.elements.nodeLayer.contains(node)
      ? node.dataset.viewId || null
      : null;
  }

  function restoreRenderedTreeFocus(app, preferredViewId) {
    if (!preferredViewId) {
      return false;
    }
    const focusedViewId = app.renderResult.viewById.has(preferredViewId)
      ? preferredViewId
      : resolveKeyboardFocusViewId(
          app.state,
          app.renderResult.viewById,
          app.runtime.data.hierarchy.rootId
        );
    const node = app.renderResult.nodeElementsByViewId.get(focusedViewId);
    if (!node) {
      return false;
    }
    app.state.keyboard.focusedViewId = focusedViewId;
    syncRovingTabIndex(app);
    node.focus({ preventScroll: true });
    return true;
  }

  function focusNodeInViewport(app, viewId, options = {}) {
    const layout = app.renderResult.layoutByViewId.get(viewId);
    const node = app.renderResult.nodeElementsByViewId.get(viewId);
    if (!layout || !node) {
      return false;
    }

    app.state.keyboard.focusedViewId = viewId;
    syncRovingTabIndex(app);

    const zoom = app.state.viewport.zoom;
    const viewport = app.elements.viewport;
    let targetLeft;
    let targetTop;
    if (options.alignment === "nearest") {
      const margin = 28;
      const nodeLeft = layout.x * zoom;
      const nodeRight = (layout.x + layout.width) * zoom;
      const nodeTop = layout.y * zoom;
      const nodeBottom = (layout.y + layout.height) * zoom;
      targetLeft = viewport.scrollLeft;
      targetTop = viewport.scrollTop;
      if (nodeLeft < viewport.scrollLeft + margin) {
        targetLeft = nodeLeft - margin;
      } else if (
        nodeRight >
        viewport.scrollLeft + viewport.clientWidth - margin
      ) {
        targetLeft = nodeRight - viewport.clientWidth + margin;
      }
      if (nodeTop < viewport.scrollTop + margin) {
        targetTop = nodeTop - margin;
      } else if (
        nodeBottom >
        viewport.scrollTop + viewport.clientHeight - margin
      ) {
        targetTop = nodeBottom - viewport.clientHeight + margin;
      }
    } else {
      targetLeft =
        (layout.x + layout.width / 2) * zoom - viewport.clientWidth / 2;
      targetTop =
        (layout.y + layout.height / 2) * zoom - viewport.clientHeight / 2;
    }
    const maxLeft = Math.max(
      0,
      app.renderResult.worldBounds.width * zoom - viewport.clientWidth
    );
    const maxTop = Math.max(
      0,
      app.renderResult.worldBounds.height * zoom - viewport.clientHeight
    );
    viewport.scrollLeft = Math.min(Math.max(0, targetLeft), maxLeft);
    viewport.scrollTop = Math.min(Math.max(0, targetTop), maxTop);
    app.state.viewport.scrollLeft = viewport.scrollLeft;
    app.state.viewport.scrollTop = viewport.scrollTop;
    node.focus({ preventScroll: true });
    return true;
  }

  function focusTreeView(app, viewId) {
    finishPendingTreeTransition(app);
    const view = app.renderResult.viewById.get(viewId);
    if (!view) {
      return false;
    }

    cancelAllPendingAlgorithmClicks(app);
    app.state.keyboard.focusedViewId = view.viewId;
    app.state.selected.viewId = view.viewId;
    app.state.selected.entityId = view.entityId;
    app.state.highlightedViewId = null;
    app.state.search.targetEntityId = null;
    app.state.search.targetViewId = null;
    syncSelectionClasses(app);
    syncSearchHighlightClasses(app);
    focusNodeInViewport(app, view.viewId, { alignment: "nearest" });
    app.elements.liveRegion.textContent = UI_STRINGS[
      app.state.locale
    ].keyboardFocused(view.label);
    return true;
  }

  function revealSearchMatch(app, match) {
    if (!match) {
      return false;
    }

    const reveal =
      match.targetType === "hierarchy"
        ? applyHierarchySearchReveal(
            app.state,
            match.targetViewId,
            app.runtime.indexes
          )
        : applySearchReveal(
            app.state,
            match.entityId,
            app.runtime.indexes
          );
    if (!reveal) {
      return false;
    }

    cancelAllPendingAlgorithmClicks(app);
    if (app.state.detail.isOpen) {
      closeDetailPanel(app, { restoreFocus: false });
    }
    closeSearchResults(app);
    app.render();
    focusNodeInViewport(app, reveal.targetViewId);

    const pathLabel = reveal.path
      .map((node) =>
        getHierarchyNodeLabel(node, app.runtime.indexes, app.state.locale)
      )
      .join(" → ");
    const targetName =
      match.localizedNames[app.state.locale] || match.name;
    app.elements.liveRegion.textContent = UI_STRINGS[
      app.state.locale
    ].searchOpened(targetName, pathLabel);
    return true;
  }

  function revealSearchEntity(app, entityId) {
    const match = app.searchIndex.find(
      (entry) =>
        entry.targetType === "entity" && entry.entityId === entityId
    );
    return revealSearchMatch(app, match);
  }

  function handleSearchInput(event, app) {
    const query = event.target.value;
    app.state.search.query = query;
    app.state.highlightedViewId = null;
    app.state.search.targetEntityId = null;
    app.state.search.targetViewId = null;
    syncSearchHighlightClasses(app);

    if (!normalizeSearchText(query)) {
      app.state.search.matches = [];
      app.state.search.activeIndex = -1;
      app.state.search.typeFilter = "all";
      closeSearchResults(app);
      return;
    }

    updateSearchMatches(app);
    renderSearchResults(app);
  }

  function handleSearchFilterClick(event, app) {
    const button = event.target.closest("[data-search-filter]");
    if (!button || !app.elements.searchFilters.contains(button)) {
      return;
    }

    const nextFilter = normalizeSearchFilter(button.dataset.searchFilter);
    if (nextFilter === app.state.search.typeFilter) {
      return;
    }
    app.state.search.typeFilter = nextFilter;
    updateSearchMatches(app);
    renderSearchResults(app);
    const activeButton = app.elements.searchFilters.querySelector(
      `[data-search-filter="${nextFilter}"]`
    );
    if (activeButton) {
      activeButton.focus({ preventScroll: true });
    }
  }

  function handleSearchFocus(_event, app) {
    if (!normalizeSearchText(app.state.search.query)) {
      return;
    }

    if (app.state.search.matches.length > 0 && app.state.search.activeIndex < 0) {
      app.state.search.activeIndex = 0;
    }
    renderSearchResults(app);
  }

  function handleSearchKeydown(event, app) {
    const { matches, activeIndex } = app.state.search;

    if (event.key === "ArrowDown" && matches.length > 0) {
      event.preventDefault();
      setActiveSearchResult(app, activeIndex + 1);
    } else if (event.key === "ArrowUp" && matches.length > 0) {
      event.preventDefault();
      setActiveSearchResult(app, activeIndex - 1);
    } else if (event.key === "Enter" && matches.length > 0) {
      event.preventDefault();
      const match = matches[activeIndex >= 0 ? activeIndex : 0];
      revealSearchMatch(app, match);
    } else if (event.key === "Escape" && !app.elements.searchPopover.hidden) {
      event.preventDefault();
      event.stopPropagation();
      closeSearchResults(app);
    }
  }

  function handleSearchResultClick(event, app) {
    const option = event.target.closest("[data-search-key]");
    if (!option || !app.elements.searchResults.contains(option)) {
      return;
    }
    const match = app.state.search.matches.find(
      (entry) => entry.searchKey === option.dataset.searchKey
    );
    revealSearchMatch(app, match);
  }

  function handleDocumentClick(event, app) {
    const eventPath =
      typeof event.composedPath === "function" ? event.composedPath() : [];
    const clickedInsideSearch =
      eventPath.includes(app.elements.search) ||
      app.elements.search.contains(event.target);
    if (!clickedInsideSearch) {
      closeSearchResults(app);
    }
  }

  function handleViewportScroll(_event, app) {
    app.state.viewport.scrollLeft = app.elements.viewport.scrollLeft;
    app.state.viewport.scrollTop = app.elements.viewport.scrollTop;
    updateViewControls(app);
  }

  function handleViewportPointerDown(event, app) {
    if (
      event.isPrimary === false ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return false;
    }

    const interactiveTarget =
      event.target.closest &&
      event.target.closest("button, input, a, [data-view-id]");
    if (interactiveTarget) {
      return false;
    }

    app.panSession = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startScrollLeft: app.elements.viewport.scrollLeft,
      startScrollTop: app.elements.viewport.scrollTop
    };
    app.elements.viewport.classList.add("is-panning");
    if (typeof app.elements.viewport.setPointerCapture === "function") {
      app.elements.viewport.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    return true;
  }

  function handleViewportPointerMove(event, app) {
    const session = app.panSession;
    if (!session || session.pointerId !== event.pointerId) {
      return false;
    }

    const startedAt = getPerformanceNow();

    const nextScroll = calculatePanScroll(
      session.startScrollLeft,
      session.startScrollTop,
      session.startClientX,
      session.startClientY,
      event.clientX,
      event.clientY
    );
    app.elements.viewport.scrollLeft = Math.max(0, nextScroll.scrollLeft);
    app.elements.viewport.scrollTop = Math.max(0, nextScroll.scrollTop);
    app.state.viewport.scrollLeft = app.elements.viewport.scrollLeft;
    app.state.viewport.scrollTop = app.elements.viewport.scrollTop;
    updateViewControls(app);
    recordPerformanceMetric(app, "pan", startedAt);
    event.preventDefault();
    return true;
  }

  function endViewportPan(event, app) {
    const session = app.panSession;
    if (!session || session.pointerId !== event.pointerId) {
      return false;
    }

    if (
      typeof app.elements.viewport.hasPointerCapture === "function" &&
      app.elements.viewport.hasPointerCapture(event.pointerId)
    ) {
      app.elements.viewport.releasePointerCapture(event.pointerId);
    }
    app.panSession = null;
    app.elements.viewport.classList.remove("is-panning");
    return true;
  }

  function handleViewportWheel(event, app) {
    if (!event.ctrlKey && !event.metaKey) {
      return false;
    }

    event.preventDefault();
    const rect = app.elements.viewport.getBoundingClientRect();
    const exponent = clampNumber(
      -event.deltaY * ZOOM_CONFIG.wheelSensitivity,
      -0.2,
      0.2
    );
    const changed = setZoom(
      app,
      app.state.viewport.zoom * Math.exp(exponent),
      {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      }
    );
    if (changed) {
      app.elements.liveRegion.textContent = UI_STRINGS[
        app.state.locale
      ].zoomAnnouncement(Math.round(app.state.viewport.zoom * 100));
    }
    return changed;
  }

  function handleZoomButton(app, direction) {
    const changed = setZoom(
      app,
      app.state.viewport.zoom + direction * ZOOM_CONFIG.step
    );
    if (changed) {
      app.elements.liveRegion.textContent = UI_STRINGS[
        app.state.locale
      ].zoomAnnouncement(Math.round(app.state.viewport.zoom * 100));
    }
    return changed;
  }

  function handleTreeNodeKeydown(event, app, node) {
    const view = app.renderResult.viewById.get(node.dataset.viewId);
    const algorithmAction = getAlgorithmKeyboardAction(event.key, view);
    if (algorithmAction === "open_detail") {
      event.preventDefault();
      event.stopPropagation();
      cancelPendingAlgorithmClick(app, view.viewId);
      openAlgorithmDetailFromView(app, view);
      return true;
    }

    const navigationKeys = new Set([
      "ArrowDown",
      "ArrowUp",
      "ArrowRight",
      "ArrowLeft",
      "Home",
      "End"
    ]);
    if (!navigationKeys.has(event.key)) {
      return false;
    }

    event.preventDefault();
    event.stopPropagation();
    const action = getTreeKeyboardAction(
      event.key,
      node.dataset.viewId,
      app.renderResult.visibleNodes,
      app.renderResult.viewById
    );
    if (action.type === "focus") {
      focusTreeView(app, action.targetViewId);
    } else if (action.type === "expand" || action.type === "collapse") {
      const actionView = app.renderResult.viewById.get(action.targetViewId);
      if (actionView?.entityType === "algorithm") {
        activateAlgorithmView(app, action.targetViewId);
      } else {
        activateHierarchyView(app, action.targetViewId);
      }
    }
    return true;
  }

  function calculateDetailScrollTop(
    key,
    currentScrollTop,
    clientHeight,
    scrollHeight
  ) {
    const maximum = Math.max(0, scrollHeight - clientHeight);
    const pageStep = Math.max(40, clientHeight * 0.85);
    const lineStep = 48;
    const targets = {
      ArrowDown: currentScrollTop + lineStep,
      ArrowUp: currentScrollTop - lineStep,
      PageDown: currentScrollTop + pageStep,
      PageUp: currentScrollTop - pageStep,
      Home: 0,
      End: maximum
    };
    return Object.prototype.hasOwnProperty.call(targets, key)
      ? clampNumber(targets[key], 0, maximum)
      : null;
  }

  function handleDetailContentKeydown(event, app) {
    if (event.target !== app.elements.detailContent) {
      return false;
    }
    const content = app.elements.detailContent;
    const nextScrollTop = calculateDetailScrollTop(
      event.key,
      content.scrollTop,
      content.clientHeight,
      content.scrollHeight
    );
    if (nextScrollTop === null) {
      return false;
    }
    event.preventDefault();
    content.scrollTop = nextScrollTop;
    return true;
  }

  function handleViewportKeydown(event, app) {
    const node =
      typeof event.target.closest === "function"
        ? event.target.closest("[data-view-id]")
        : null;
    const isTreeNode = Boolean(
      node && app.elements.nodeLayer.contains(node)
    );
    if (isTreeNode && handleTreeNodeKeydown(event, app, node)) {
      return;
    }
    if (event.target !== app.elements.viewport && !isTreeNode) {
      return;
    }

    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      handleZoomButton(app, 1);
    } else if (event.key === "-") {
      event.preventDefault();
      handleZoomButton(app, -1);
    } else if (event.key === "0") {
      event.preventDefault();
      resetView(app);
    }
  }

  function getStoredLocale(fallback = "ko") {
    try {
      const storedLocale = global.localStorage.getItem("algoria-locale");
      return storedLocale
        ? normalizeLocale(storedLocale)
        : normalizeLocale(fallback);
    } catch (_error) {
      return normalizeLocale(fallback);
    }
  }

  function storeLocale(locale) {
    try {
      global.localStorage.setItem("algoria-locale", locale);
    } catch (_error) {
      // file:// 환경에서 저장소 접근이 제한돼도 현재 세션 전환은 유지한다.
    }
  }

  function getStoredTheme() {
    let storedTheme = null;
    try {
      storedTheme = global.localStorage.getItem("algoria-theme");
    } catch (_error) {
      // 저장소를 사용할 수 없으면 시스템 테마를 따른다.
    }
    const prefersDark = Boolean(
      global.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    );
    return resolveThemePreference(storedTheme, prefersDark);
  }

  function storeTheme(theme) {
    try {
      global.localStorage.setItem("algoria-theme", theme);
    } catch (_error) {
      // file:// 환경에서 저장소 접근이 제한돼도 현재 세션 전환은 유지한다.
    }
  }

  function updateThemeChrome(app) {
    const theme = normalizeTheme(app.state.theme);
    const strings = UI_STRINGS[app.state.locale];
    const documentRef = app.elements.viewport.ownerDocument;
    const isDark = theme === "dark";
    const actionLabel = isDark ? strings.themeToLight : strings.themeToDark;
    documentRef.documentElement.dataset.theme = theme;
    documentRef
      .querySelector('meta[name="color-scheme"]')
      ?.setAttribute("content", theme);
    app.elements.themeToggleButton.setAttribute(
      "aria-pressed",
      String(isDark)
    );
    app.elements.themeToggleButton.setAttribute("aria-label", actionLabel);
    app.elements.themeToggleButton.title = actionLabel;
    app.elements.themeToggleIcon.textContent = isDark ? "☀" : "☾";
  }

  function updateLocalizedChrome(app) {
    const locale = app.state.locale;
    const strings = UI_STRINGS[locale];
    const documentRef = app.elements.viewport.ownerDocument;
    documentRef.documentElement.lang = locale;
    documentRef.title =
      locale === "ko"
        ? "Algoria — 알고리즘 계통도"
        : "Algoria — Algorithm Lineage Atlas";
    app.elements.toolbar.setAttribute("aria-label", strings.toolbarLabel);
    app.elements.brandDescriptor.textContent = strings.brandDescriptor;
    app.elements.searchLabel.textContent = strings.searchLabel;
    app.elements.searchInput.placeholder = strings.searchPlaceholder;
    app.elements.viewControls.setAttribute(
      "aria-label",
      strings.viewControlsLabel
    );
    app.elements.treeHeading.textContent = strings.treeHeading;
    app.elements.canvasInstructions.textContent = strings.canvasInstructions;
    app.elements.resetViewButton.textContent = strings.resetView;
    app.elements.zoomOutButton.setAttribute("aria-label", strings.zoomOut);
    app.elements.zoomOutButton.title = strings.zoomOut;
    app.elements.zoomInButton.setAttribute("aria-label", strings.zoomIn);
    app.elements.zoomInButton.title = strings.zoomIn;
    app.elements.canvasHint.innerHTML = strings.canvasHint;
    app.elements.detailEyebrow.textContent = strings.detailEyebrow;
    app.elements.detailCloseButton.setAttribute(
      "aria-label",
      strings.closeDetail
    );
    app.elements.detailCloseButton.title = strings.closeDetail;
    app.elements.detailContent.setAttribute(
      "aria-label",
      strings.detailContentLabel
    );
    app.elements.localeSwitch.setAttribute(
      "aria-label",
      locale === "ko" ? "표시 언어" : "Display language"
    );
    app.elements.searchResults.setAttribute(
      "aria-label",
      locale === "ko" ? "검색 결과" : "Search results"
    );
    app.elements.searchFilters.setAttribute(
      "aria-label",
      strings.searchFilterLabel
    );
    app.elements.nodeLayer.setAttribute(
      "aria-label",
      locale === "ko" ? "Algoria 계통도 노드" : "Algoria lineage nodes"
    );
    app.elements.lineagePath.setAttribute("aria-label", strings.currentPath);

    for (const button of app.elements.localeButtons) {
      const isActive = button.dataset.locale === locale;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    }
    updateThemeChrome(app);
  }

  function setTheme(app, requestedTheme, options = {}) {
    const theme = normalizeTheme(requestedTheme, app.state.theme);
    if (theme === app.state.theme) {
      updateThemeChrome(app);
      return false;
    }
    app.state.theme = theme;
    if (options.persist !== false) {
      storeTheme(theme);
    }
    updateThemeChrome(app);
    app.elements.liveRegion.textContent =
      theme === "dark"
        ? UI_STRINGS[app.state.locale].darkThemeAnnouncement
        : UI_STRINGS[app.state.locale].lightThemeAnnouncement;
    return true;
  }

  function handleThemeToggle(app) {
    return setTheme(app, app.state.theme === "dark" ? "light" : "dark");
  }

  function setLocale(app, requestedLocale) {
    const locale = normalizeLocale(requestedLocale);
    if (locale === app.state.locale) {
      updateLocalizedChrome(app);
      return false;
    }

    finishPendingTreeTransition(app);
    cancelAllPendingAlgorithmClicks(app);
    const anchorViewId =
      app.state.selected.viewId || app.runtime.data.hierarchy.rootId;
    const anchor = captureViewportAnchor(
      anchorViewId,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport.zoom
    );
    const searchWasOpen = !app.elements.searchPopover.hidden;
    app.state.locale = locale;
    storeLocale(locale);
    updateLocalizedChrome(app);
    app.render({ animate: false });
    restoreViewportAnchor(
      anchor,
      app.renderResult.layoutByViewId,
      app.elements.viewport,
      app.state.viewport,
      app.state.viewport.zoom
    );

    if (app.state.detail.isOpen && app.state.detail.entityId) {
      renderDetailPanelForEntity(app, app.state.detail.entityId);
    }
    if (searchWasOpen) {
      renderSearchResults(app);
    }

    app.elements.liveRegion.textContent =
      locale === "ko"
        ? "표시 언어를 한국어로 변경했습니다."
        : "Display language changed to English.";
    return true;
  }

  function handleLocaleClick(event, app) {
    const button = event.target.closest("[data-locale]");
    if (!button || !app.elements.localeSwitch.contains(button)) {
      return;
    }
    setLocale(app, button.dataset.locale);
  }

  function handleDocumentKeydown(event, app) {
    if (event.key !== "Escape") {
      return;
    }

    cancelAllPendingAlgorithmClicks(app);
    if (!app.elements.searchPopover.hidden) {
      event.preventDefault();
      if (
        app.elements.search.contains(app.elements.viewport.ownerDocument.activeElement) &&
        app.elements.viewport.ownerDocument.activeElement !== app.elements.searchInput
      ) {
        app.elements.searchInput.focus({ preventScroll: true });
      }
      closeSearchResults(app);
      return;
    }
    if (app.state.detail.isOpen) {
      event.preventDefault();
      closeDetailPanel(app);
    }
  }

  function showDataLoadFailure(documentRef, error = null) {
    if (!documentRef) {
      return false;
    }
    const appShell = documentRef.getElementById("app");
    const workspace = documentRef.getElementById("workspace");
    const status = documentRef.getElementById("app-status");
    if (!status) {
      return false;
    }
    status.hidden = false;
    status.dataset.errorType = error?.name || "DataLoadError";
    appShell?.setAttribute("aria-busy", "false");
    workspace?.classList?.add("is-error");
    for (const control of documentRef.querySelectorAll("button, input")) {
      control.disabled = true;
    }
    return true;
  }

  function findRequiredElements(documentRef) {
    const elements = {
      appShell: documentRef.getElementById("app"),
      appStatus: documentRef.getElementById("app-status"),
      toolbar: documentRef.getElementById("toolbar"),
      search: documentRef.querySelector(".search"),
      searchLabel: documentRef.getElementById("search-label"),
      searchInput: documentRef.getElementById("search-input"),
      searchPopover: documentRef.getElementById("search-popover"),
      searchFilters: documentRef.getElementById("search-filters"),
      searchResults: documentRef.getElementById("search-results"),
      brandDescriptor: documentRef.getElementById("brand-descriptor"),
      viewControls: documentRef.getElementById("view-controls"),
      lineagePath: documentRef.getElementById("lineage-path"),
      localeSwitch: documentRef.getElementById("locale-switch"),
      localeButtons: [...documentRef.querySelectorAll("[data-locale]")],
      themeToggleButton: documentRef.getElementById("theme-toggle-button"),
      themeToggleIcon: documentRef.getElementById("theme-toggle-icon"),
      zoomOutButton: documentRef.getElementById("zoom-out-button"),
      zoomLevel: documentRef.getElementById("zoom-level"),
      zoomInButton: documentRef.getElementById("zoom-in-button"),
      resetViewButton: documentRef.getElementById("reset-view-button"),
      workspace: documentRef.getElementById("workspace"),
      viewport: documentRef.getElementById("tree-viewport"),
      treeHeading: documentRef.getElementById("tree-heading"),
      canvasInstructions: documentRef.getElementById("canvas-instructions"),
      surface: documentRef.getElementById("tree-surface"),
      world: documentRef.getElementById("tree-world"),
      connectorLayer: documentRef.getElementById("connector-layer"),
      nodeLayer: documentRef.getElementById("node-layer"),
      canvasHint: documentRef.getElementById("canvas-hint"),
      detailPanel: documentRef.getElementById("detail-panel"),
      detailEyebrow: documentRef.getElementById("detail-eyebrow"),
      detailTitle: documentRef.getElementById("detail-title"),
      detailAliases: documentRef.getElementById("detail-aliases"),
      detailContent: documentRef.getElementById("detail-content"),
      detailCloseButton: documentRef.getElementById("detail-close-button"),
      liveRegion: documentRef.getElementById("live-region")
    };

    for (const [name, element] of Object.entries(elements)) {
      if (!element || (Array.isArray(element) && element.length === 0)) {
        throw new Error(`Algoria app shell is missing required element "${name}".`);
      }
    }

    return elements;
  }

  function initApp(documentRef = global.document) {
    if (!documentRef) {
      return null;
    }
    if (!global.ALGORIA_RUNTIME) {
      showDataLoadFailure(documentRef, global.ALGORIA_BOOT_ERROR);
      return null;
    }

    const runtime = global.ALGORIA_RUNTIME;
    const state = createInitialState(runtime);
    state.locale = getStoredLocale(runtime.data.meta.defaultLocale || "ko");
    state.theme = getStoredTheme();
    const elements = findRequiredElements(documentRef);
    elements.appStatus.hidden = true;
    elements.appShell.setAttribute("aria-busy", "false");
    const app = {
      runtime,
      state,
      elements,
      searchIndex: buildSearchIndex(runtime),
      renderResult: null,
      panSession: null,
      pendingTreeTransition: null,
      reflowFrameId: null,
      resizeObserver: null,
      performanceMetrics: {},
      onNodeClick: null,
      onNodeDoubleClick: null,
      onDetailClose: null,
      onDetailContentKeydown: null,
      onSearchInput: null,
      onSearchFocus: null,
      onSearchKeydown: null,
      onSearchResultClick: null,
      onSearchFilterClick: null,
      onLineagePathClick: null,
      onViewportScroll: null,
      onViewportPointerDown: null,
      onViewportPointerMove: null,
      onViewportPointerEnd: null,
      onViewportWheel: null,
      onViewportKeydown: null,
      onZoomOut: null,
      onZoomIn: null,
      onResetView: null,
      onLocaleClick: null,
      onThemeToggle: null,
      onDocumentKeydown: null,
      onDocumentClick: null,
      pendingAlgorithmClicks: new Map(),
      render(options = {}) {
        const startedAt = getPerformanceNow();
        if (app.reflowFrameId !== null) {
          global.cancelAnimationFrame(app.reflowFrameId);
          app.reflowFrameId = null;
        }
        const activeTreeViewId = getActiveTreeViewId(app);
        cancelPendingTreeTransition(app);
        const previousVisibleViewIds = new Set(
          app.renderResult
            ? app.renderResult.visibleNodes.map((view) => view.viewId)
            : []
        );
        app.renderResult = renderTree(runtime, state, elements, {
          animate: options.animate !== false && previousVisibleViewIds.size > 0,
          previousVisibleViewIds
        });
        elements.viewport.scrollLeft = state.viewport.scrollLeft;
        elements.viewport.scrollTop = state.viewport.scrollTop;
        state.viewport.scrollLeft = elements.viewport.scrollLeft;
        state.viewport.scrollTop = elements.viewport.scrollTop;
        updateViewControls(app);
        renderCurrentPath(app);
        restoreRenderedTreeFocus(app, activeTreeViewId);

        for (const viewId of app.pendingAlgorithmClicks.keys()) {
          if (!app.renderResult.viewById.has(viewId)) {
            cancelPendingAlgorithmClick(app, viewId);
          }
        }

        elements.liveRegion.textContent = UI_STRINGS[
          state.locale
        ].nodeCountAnnouncement(app.renderResult.visibleNodes.length);
        recordPerformanceMetric(app, "structuralRender", startedAt);
        return app.renderResult;
      },
      reflow() {
        if (!app.renderResult) {
          return app.render({ animate: false });
        }
        const startedAt = getPerformanceNow();
        reflowTreeGeometry(app.renderResult, state, elements, {
          animateConnections: false
        });
        state.viewport.scrollLeft = elements.viewport.scrollLeft;
        state.viewport.scrollTop = elements.viewport.scrollTop;
        updateViewControls(app);
        recordPerformanceMetric(app, "geometryReflow", startedAt);
        return app.renderResult;
      },
      scheduleReflow() {
        if (app.reflowFrameId !== null) {
          return;
        }

        app.reflowFrameId = global.requestAnimationFrame(() => {
          app.reflowFrameId = null;
          app.reflow();
        });
      },
      activateView(viewId) {
        const view = app.renderResult.viewById.get(viewId);
        return view && view.entityType === "algorithm"
          ? activateAlgorithmView(app, viewId)
          : activateHierarchyView(app, viewId);
      },
      activateAlgorithmView(viewId) {
        return activateAlgorithmView(app, viewId);
      },
      openDetail(viewId) {
        return openDetailPanel(app, app.renderResult.viewById.get(viewId));
      },
      closeDetail() {
        return closeDetailPanel(app);
      },
      setZoom(zoom, anchor) {
        return setZoom(app, zoom, anchor);
      },
      resetView() {
        return resetView(app);
      },
      setLocale(locale) {
        return setLocale(app, locale);
      },
      setTheme(theme) {
        return setTheme(app, theme);
      },
      getPerformanceSnapshot() {
        return getPerformanceSnapshot(app);
      }
    };

    app.onNodeClick = (event) => handleNodeLayerClick(event, app);
    app.onNodeDoubleClick = (event) => handleNodeLayerDoubleClick(event, app);
    app.onDetailClose = () => closeDetailPanel(app);
    app.onDetailContentKeydown = (event) =>
      handleDetailContentKeydown(event, app);
    app.onSearchInput = (event) => handleSearchInput(event, app);
    app.onSearchFocus = (event) => handleSearchFocus(event, app);
    app.onSearchKeydown = (event) => handleSearchKeydown(event, app);
    app.onSearchResultClick = (event) => handleSearchResultClick(event, app);
    app.onSearchFilterClick = (event) =>
      handleSearchFilterClick(event, app);
    app.onLineagePathClick = (event) => handleLineagePathClick(event, app);
    app.onViewportScroll = (event) => handleViewportScroll(event, app);
    app.onViewportPointerDown = (event) =>
      handleViewportPointerDown(event, app);
    app.onViewportPointerMove = (event) =>
      handleViewportPointerMove(event, app);
    app.onViewportPointerEnd = (event) => endViewportPan(event, app);
    app.onViewportWheel = (event) => handleViewportWheel(event, app);
    app.onViewportKeydown = (event) => handleViewportKeydown(event, app);
    app.onZoomOut = () => handleZoomButton(app, -1);
    app.onZoomIn = () => handleZoomButton(app, 1);
    app.onResetView = () => resetView(app);
    app.onLocaleClick = (event) => handleLocaleClick(event, app);
    app.onThemeToggle = () => handleThemeToggle(app);
    app.onDocumentKeydown = (event) => handleDocumentKeydown(event, app);
    app.onDocumentClick = (event) => handleDocumentClick(event, app);
    elements.nodeLayer.addEventListener("click", app.onNodeClick);
    elements.nodeLayer.addEventListener("dblclick", app.onNodeDoubleClick);
    elements.detailCloseButton.addEventListener("click", app.onDetailClose);
    elements.detailContent.addEventListener(
      "keydown",
      app.onDetailContentKeydown
    );
    elements.searchInput.addEventListener("input", app.onSearchInput);
    elements.searchInput.addEventListener("focus", app.onSearchFocus);
    elements.searchInput.addEventListener("keydown", app.onSearchKeydown);
    elements.searchResults.addEventListener("click", app.onSearchResultClick);
    elements.searchFilters.addEventListener("click", app.onSearchFilterClick);
    elements.lineagePath.addEventListener("click", app.onLineagePathClick);
    elements.viewport.addEventListener("scroll", app.onViewportScroll, {
      passive: true
    });
    elements.viewport.addEventListener(
      "pointerdown",
      app.onViewportPointerDown
    );
    elements.viewport.addEventListener(
      "pointermove",
      app.onViewportPointerMove
    );
    elements.viewport.addEventListener("pointerup", app.onViewportPointerEnd);
    elements.viewport.addEventListener(
      "pointercancel",
      app.onViewportPointerEnd
    );
    elements.viewport.addEventListener(
      "lostpointercapture",
      app.onViewportPointerEnd
    );
    elements.viewport.addEventListener("wheel", app.onViewportWheel, {
      passive: false
    });
    elements.viewport.addEventListener("keydown", app.onViewportKeydown);
    elements.zoomOutButton.addEventListener("click", app.onZoomOut);
    elements.zoomInButton.addEventListener("click", app.onZoomIn);
    elements.resetViewButton.addEventListener("click", app.onResetView);
    elements.localeSwitch.addEventListener("click", app.onLocaleClick);
    elements.themeToggleButton.addEventListener("click", app.onThemeToggle);
    documentRef.addEventListener("keydown", app.onDocumentKeydown);
    documentRef.addEventListener("click", app.onDocumentClick);
    elements.viewport.classList.add("is-pannable");
    updateLocalizedChrome(app);
    app.render();

    if (typeof global.ResizeObserver === "function") {
      app.resizeObserver = new global.ResizeObserver(() => app.scheduleReflow());
      app.resizeObserver.observe(elements.viewport);
    } else {
      global.addEventListener("resize", app.scheduleReflow);
    }

    if (documentRef.fonts && documentRef.fonts.ready) {
      documentRef.fonts.ready.then(() => app.scheduleReflow()).catch(() => {});
    }

    return app;
  }

  const AlgoriaApp = {
    TREE_LAYOUT,
    ALGORITHM_CLICK_DELAY,
    ALGORITHM_DOUBLE_CLICK_GUARD_MS,
    MAX_ALGORITHM_ADVANCEMENTS,
    ALGORITHM_EXPANSION_TYPES,
    SUPPORTED_LOCALES,
    SUPPORTED_THEMES,
    ENTITY_TYPE_LABELS,
    SEARCH_FILTER_TYPES,
    SEARCH_FILTER_LABELS,
    UI_STRINGS,
    SEARCH_RESULT_LIMIT,
    ZOOM_CONFIG,
    COLLAPSE_ANIMATION_MS,
    getPerformanceNow,
    recordPerformanceMetric,
    getPerformanceSnapshot,
    createInitialState,
    normalizeLocale,
    normalizeTheme,
    resolveThemePreference,
    getLocalizedEntityName,
    getLocalizedHierarchyLabel,
    getLocalizedEntityContent,
    localizeEntity,
    normalizeSearchText,
    buildSearchIndex,
    searchEntities,
    normalizeSearchFilter,
    getSearchFilterCounts,
    getHierarchyPath,
    getPrimaryHierarchyPath,
    getLocalizedPrimaryPath,
    getLocalizedHierarchyPath,
    getRenderedViewPath,
    getVisiblePathViewIds,
    applySearchReveal,
    applyHierarchySearchReveal,
    buildAlgorithmDetailModel,
    renderDetailPanelContent,
    getHierarchyNodeLabel,
    getAlgorithmAdvancements,
    getPinnedViewIds,
    buildLocalEntityCollisionPlan,
    buildVisibleTree,
    flattenVisibleTree,
    resolveKeyboardFocusViewId,
    getTreeKeyboardAction,
    computeTreeLayout,
    applyHierarchyActivation,
    applyAlgorithmActivation,
    getAlgorithmKeyboardAction,
    createAlgorithmClickTransaction,
    restoreAlgorithmClickTransaction,
    clampNumber,
    normalizeZoom,
    calculateAnchoredZoomScroll,
    calculatePanScroll,
    applyViewportTransform,
    updateViewControls,
    setZoom,
    resetView,
    setTheme,
    captureViewportAnchor,
    restoreViewportAnchor,
    createOrthogonalConnectorGeometry,
    createConnectorBranchPathData,
    buildConnectorDescriptors,
    drawConnections,
    reflowTreeGeometry,
    renderTree,
    collectDescendantViewIds,
    cancelPendingTreeTransition,
    finishPendingTreeTransition,
    prefersReducedMotion,
    beginCollapseTransition,
    beginViewReplacementTransition,
    finalizeTreeActivation,
    activateHierarchyView,
    activateAlgorithmView,
    syncActivePathHighlight,
    syncSelectionClasses,
    cancelPendingAlgorithmClick,
    cancelAllPendingAlgorithmClicks,
    pausePendingAlgorithmClickForDoubleClick,
    rollbackAlgorithmClickBeforeDetail,
    scheduleAlgorithmSingleClick,
    handleNodeLayerClick,
    handleNodeLayerDoubleClick,
    renderDetailPanelForEntity,
    openDetailPanel,
    closeDetailPanel,
    renderSearchResults,
    renderSearchFilters,
    updateSearchMatches,
    renderCurrentPath,
    focusPathView,
    handleLineagePathClick,
    closeSearchResults,
    syncSearchHighlightClasses,
    setActiveSearchResult,
    syncRovingTabIndex,
    getActiveTreeViewId,
    restoreRenderedTreeFocus,
    focusNodeInViewport,
    focusTreeView,
    revealSearchMatch,
    revealSearchEntity,
    handleSearchInput,
    handleSearchFilterClick,
    handleSearchFocus,
    handleSearchKeydown,
    handleSearchResultClick,
    handleDocumentClick,
    handleViewportScroll,
    handleViewportPointerDown,
    handleViewportPointerMove,
    endViewportPan,
    handleViewportWheel,
    handleTreeNodeKeydown,
    calculateDetailScrollTop,
    handleDetailContentKeydown,
    handleZoomButton,
    handleViewportKeydown,
    getStoredLocale,
    storeLocale,
    updateLocalizedChrome,
    setLocale,
    handleLocaleClick,
    handleDocumentKeydown,
    showDataLoadFailure,
    initApp,
    instance: null
  };

  global.AlgoriaApp = AlgoriaApp;

  if (global.document) {
    AlgoriaApp.instance = initApp(global.document);
  }
})(typeof window !== "undefined" ? window : globalThis);
