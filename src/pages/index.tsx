import Head from 'next/head';
import Link from 'next/link';
import {
  getValidatedContent, initContent
} from '../lib/MDXContent';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - MatMac</title>
      </Head>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={'/blog/' + post.slug}>{post.title}</Link>
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps = async () => {
  initContent();

  const content = getValidatedContent();

  const posts: { title: string; slug: string }[] = [];

  content.forEach((x) => {
    posts.push({
      title: x.frontmatter.title,
      slug: x.slug.replace('.mdx', ''),
    });
  });

  return {
    props: {
      posts,
    },
  };

  // interface Post {
  //   slug: string;
  //   dataContainer: any;
  // }

  // const filesContents = slugs.map((fileName) =>
  //   fs.readFileSync(path.join('src/_content/blogPosts', fileName)).toString()
  // );

  // let posts: Post[] = [];

  // for (let i = 0; i < slugs.length; i++) {
  //   posts.push({ slug: slugs[i], dataContainer: filesContents[i] });
  // }

  // const frontmatter = posts.map(
  //   (content) => matter(content.dataContainer).data
  // );

  // for (let i = 0; i < frontmatter.length; i++) {
  //   const fm = frontmatter[i];
  //   posts[i].dataContainer = fm;
  // }

  // const validatedPosts = posts.filter((post) =>
  //   validate(post.dataContainer, blogSchema)
  // );

  // return {
  //   props: {
  //     posts: validatedPosts.map((post) => {
  //       const data = post.dataContainer;

  //       return {
  //         slug: post.slug.replace('.mdx', ''),
  //         ...data,
  //       };
  //     }),
  //   },
  // };
};
