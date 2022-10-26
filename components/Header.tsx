import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  return (
    <header className="flex justify-between sticky px-[10%] w-full h-[var(--header-height)] top-0 border-b border-brdrclr">
      <Link href="/">
        <a className="flex items-center h-full">
          <span className="text-3xl select-none leading-none">MatMac</span>
        </a>
      </Link>

      <nav className="flex">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/blog">Blog</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
      </nav>
    </header>
  );
}

function HeaderLink(props: { children: any; href: string }) {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <a
        className={`block h-full leading-[calc(var(--header-height)-1px)] px-3 text-xl text-white hover:text-theme transition-colors border-b box-content ${
          router.asPath === props.href ? 'border-theme' : 'border-brdrclr'
        }`}
      >
        {props.children}
      </a>
    </Link>
  );
}

export default Header;
