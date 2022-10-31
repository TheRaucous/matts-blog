import Ajv from 'ajv';

const ajv = new Ajv();

/**
 * Validates markdown frontmatter against a Json schema.
 * @param {Object} frontmatter Frontmatter as a Json object.
 * @param {Object} schema Json schema to validate against.
 */
export const validate = (
  frontmatter: { [key: string]: any },
  schema: Object
): Boolean => {
  const validateFrontmatter = ajv.compile(schema);
  const valid = validateFrontmatter(frontmatter);

  if (valid === true) {
    return true;
  } else {
    console.error('Markdown frontmatter validation failed: ', validateFrontmatter.errors);
    console.log('frontmatter: ', frontmatter);
    return false;
  }
};
