import Ajv from 'ajv';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { blogSchema } from './ContentSchemas';

const ajv = new Ajv();

interface Source {
  dir: string;
  schema: Object;
}

interface Content {
  slug: string;
  frontmatter: { [key: string]: any };
  content: string;
  source: Source;
}

const sources: Source[] = [
  {
    dir: 'src/_content/blogPosts',
    schema: blogSchema,
  },
  {
    dir: 'src/_content/tutorials',
    schema: blogSchema,
  },
];

var content: Content[] = [];
var validatedContent: Content[] = [];

export const getContent = () => {
  initContent();
  return content;
};

export const getValidatedContent = () => {
  initContent();
  return validatedContent;
};

export const getContentByDirectory = (dir: string) => {
  initContent();
  return content.filter((x) => {
    return x.source.dir === dir;
  });
};

export const findBySlug = (slug: string) => {
  initContent();
  return content.find((x) => x.slug === slug);
};

const initContent = () => {
  /************************************************************************* */

  // This script is loaded as a single, persistant instance on the server. In development,
  // when the page that calls this function in its 'getStaticProps' method
  // is loaded, this function will be ran, but the script will not be reloaded.
  // The 'content' and 'validatedContent' variables need to be checked to avoid
  // being recursively added onto during development.

  // Use this if you are editing markdown files and want changes to show up
  // in the application without restarting the server. Just refresh the page after 
  // making any changes.
  content = [];
  validatedContent = [];

  // Use this for better build time performance during development.
  // if (content.length !== 0 || validatedContent.length !== 0) return;

  /************************************************************************* */

  let files: { slug: string; source: Source }[] = [];

  sources.forEach((source) => {
    const slugs = fs.readdirSync(path.normalize(source.dir));

    slugs.forEach((slug) => {
      files.push({ slug: slug.replace('.mdx', ''), source: source });
    });
  });

  files.forEach((file) => {
    content.push({
      slug: file.slug,
      frontmatter: null,
      content: null,
      source: file.source,
    });
  });

  content.forEach((x) => {
    const fileContent = fs
      .readFileSync(path.join(x.source.dir, x.slug + '.mdx'))
      .toString();
    const { content, data } = matter(fileContent);
    x.frontmatter = data;
    x.content = content;
  });

  validateContent();
};

const validateContent = () => {
  content.forEach((x) => {
    const validate = ajv.compile(x.source.schema);

    const valid = validate(x.frontmatter);

    if (!valid) {
      console.error(
        'Markdown frontmatter validation failed on file: ' +
        x.source.dir +
        '/' +
        x.slug
      );
      console.log('Content: ', x);
      console.log('AJV: ', validate.errors);
    } else {
      validatedContent.push(x);
    }
  });
};
