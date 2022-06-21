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
