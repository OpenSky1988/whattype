/**
 * Defines whether a value is of a 'null' data type.
 * @param {any} value Data of any type
 * @returns boolean
 */
function isNull(value) {
  return value === null;
}

/**
 * Defines whether a value is of a primitive data type. See https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 * @param {any} value Data of any type
 * @returns boolean
 */
function isPrimitiveType(value) {
  if (isNull(value)) {
    return true;
  }

  if (typeof value === 'object' || typeof value === 'function') {
    return false;
  } else {
    return true;
  }
}

/**
 * Returns a primitive type
 * @param {any} value Data of primitive type
 * @returns "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "null"
 */
 function typeOfPrimitive(value) {
  if (typeof value === 'object' || typeof value === 'function') {
    if (isNull(value)) {
      return 'null';
    }

    return null;
  }

  return typeof value;
}

/**
 * Defines whether a value is of a reference data type.
 * @param {any} value Data of any type
 * @returns boolean
 */
 function isReferenceType(value) {
  return !isPrimitiveType(value);
}

/**
 * Returns a keyed collection type. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections
 * @param {object} value Data of object type
 * @returns "set" | "map" | "weakset" | "weakmap"
 */
function typeofKeyedCollection(value) {
  if (isNull(value)) {
    return null;
  }

  if (value instanceof Set) {
    return 'set';
  }

  if (value instanceof Map) {
    return 'map';
  }

  if (value instanceof WeakSet) {
    return 'weakset';
  }

  if (value instanceof WeakMap) {
    return 'weakmap';
  }

  return null;
}

/**
 * Returns a reference type
 * @param {function | object} value Data of reference type
 * @returns "object" | "function" | "array" | "regexp"
 */
function typeOfReference(value) {
  const keyedCollectionType = typeofKeyedCollection(value);

  if (keyedCollectionType) {
    return keyedCollectionType;
  }

  if (value instanceof RegExp) {
    return 'regexp';
  }

  if (isNull(value)) {
    return null;
  }

  if (Array.isArray(value)) {
    return 'array';
  }

  return typeof value;
}

/**
 * Returns a type
 * @param {any} value Data of any type
 * @returns "object" | "function" | "array" | "regexp" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "null"
 */
function typeOf(value) {
  if (isPrimitiveType(value)) {
    return typeOfPrimitive(value);
  }

  return typeOfReference(value);
}

module.exports ={
  isNull,
  isPrimitiveType,
  isReferenceType,
  typeOf,
};
