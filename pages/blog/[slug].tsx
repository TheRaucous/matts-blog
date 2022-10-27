import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import path from 'path';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

function BlogPost({ htmlString, data }) {
  return (
    <>
      <Head>
        <title>{data.title + ' - MatMac'}</title>
      </Head>
      <div className="flex justify-center">
        <div
          className="prose max-w-none w-[40rem] prose-headings:text-c-text-00 prose-h4:text-[1.075rem] prose-h6:text-c-text-00/60 prose-p:text-c-text prose-pre:bg-black prose-strong:text-c-text prose-headings:font-bold"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('_content/blogPosts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetaData = fs
    .readFileSync(path.join('_content/blogPosts', slug + '.mdx'))
    .toString();

  const parsedMarkdown = matter(markdownWithMetaData);

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(parsedMarkdown.content);

  return {
    props: {
      htmlString: String(file),
      data: parsedMarkdown.data,
    },
  };
};

export default BlogPost;
