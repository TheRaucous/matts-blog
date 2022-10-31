// import Ajv from 'ajv';
// import fs from 'fs';
// import matter from 'gray-matter';
// import { GetStaticPaths } from 'next';
// import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import Button from '../../components/Button';
import MDXComponents from '../../components/MDXComponents';
import ThemeSwitcher from '../../components/ThemeSwitcher';

import { getContentByDirectory } from '../../lib/MDXContent';

const components = {
  Button,
  ThemeSwitcher,
  ...MDXComponents,
};

export default function BlogPost({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title + ' - MatMac'}</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <main className=" w-full max-w-[45rem]">
          <h1 className="text-5xl font-bold py-10 c-trans">
            {frontmatter.title}
          </h1>
          <MDXRemote {...content} components={components} />
        </main>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const content = getContentByDirectory('src/_content/blogPosts');

  const paths = content.map((x) => ({
    params: {
      slug: x.slug.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = getContentByDirectory('src/_content/blogPosts').find(
    (x) => x.slug === slug + '.mdx'
  );

  const options = {
    theme: {
      light: 'github-light',
      dark: 'dark-plus',
      blackout: 'dark-plus',
    },
    onVisitHighlightedLine(node) {
      node.properties.className.push('line--highlighted');
    },
  };

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        [rehypePrettyCode, options],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  });

  return {
    props: {
      content: mdxSource,
      frontmatter: post.frontmatter,
    },
  };
};

// export default function BlogPost({ source, data }) {
//   return (
//     <>
//       <Head>
//         <title>{data.title + ' - MatMac'}</title>
//       </Head>
//       <div className="flex flex-col items-center justify-center">
//         <main className=" w-full max-w-[45rem]">
//           <h1 className="text-5xl font-bold py-10 c-trans">{data.title}</h1>
//           <MDXRemote {...source} components={components} />
//         </main>
//       </div>
//     </>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const files = fs.readdirSync('src/_content/blogPosts');

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace('.mdx', ''),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   const markdownWithMetaData = fs
//     .readFileSync(path.join('src/_content/blogPosts', slug + '.mdx'))
//     .toString();

//   const { content, data } = matter(markdownWithMetaData);

//   const ajv = new Ajv();

//   const frontmatterSchema = {
//     type: 'object',
//     properties: {
//       title: { type: 'string' },
//       author: { type: 'string' },
//       date: { type: 'string' },
//     },
//     required: ['title', 'author', 'date'],
//     additionalProperties: false,
//   };

//   const validate = ajv.compile(frontmatterSchema);
//   const valid = validate(data);

//   if (!valid) {
//     console.error('Blog Post frontmatter validation failed: ', validate.errors);
//     return { notFound: true };
//   }

//   const options = {
//     theme: {
//       light: 'github-light',
//       dark: 'dark-plus',
//       blackout: 'dark-plus',
//     },
//     onVisitHighlightedLine(node) {
//       node.properties.className.push('line--highlighted');
//     },
//   };

//   const mdxSource = await serialize(content, {
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: [
//         [rehypePrettyCode, options],
//         rehypeSlug,
//         [rehypeAutolinkHeadings, { behavior: 'wrap' }],
//       ],
//     },
//   });

//   return {
//     props: {
//       source: mdxSource,
//       data,
//     },
//   };
// };
