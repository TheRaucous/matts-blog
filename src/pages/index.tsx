import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/blog/tut">
        <a>go to test blogpost</a>
      </Link>
    </>
  );
}
