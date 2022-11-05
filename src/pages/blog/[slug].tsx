import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import Button from '../../components/Button';
import MDXComponents from '../../components/MDXComponents';
import ThemeSwitcher from '../../components/ThemeSwitcher';

import { findBySlug, getContentByDirectory } from '../../lib/MDXContent';

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
          <h1 className="c-trans py-10 text-5xl font-bold">
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
      slug: x.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = findBySlug(slug);

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
