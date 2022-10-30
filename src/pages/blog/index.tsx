import fs from 'fs';
import Head from 'next/head';
import Link from 'next/link';

function index({ slugs }) {
  return (
    <>
      <Head>
        <title>Blog - MatMac</title>
      </Head>
      {slugs.map((slug) => {
        return (
          <div key={slug}>
            <Link href={'/blog/' + slug}>{slug}</Link>
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('src/_content/blogPosts');
  return {
    props: {
      slugs: files.map((filename) => filename.replace('.mdx', '')),
    },
  };
};

export default index;
