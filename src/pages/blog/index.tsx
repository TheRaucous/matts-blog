import Head from 'next/head';
import { getContentByDirectory } from '../../lib/MDXContent';
import PostsFeed from '../../components/PostsFeed';

export default function index({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - MatMac</title>
      </Head>
      <main>
        <h1 className="py-10 text-center text-4xl">Blog</h1>
        <PostsFeed posts={posts} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const files = getContentByDirectory('src/_content/blogPosts');
  const posts = files.map((file) => {
    return {
      slug: file.slug,
      ...file.frontmatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
};
