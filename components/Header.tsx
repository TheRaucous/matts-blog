import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    <header className="flex justify-between sticky px-[10%] w-full h-[var(--header-height)] bg-c-bg/[var(--header-opacity)] top-0 border-b border-brdrclr c-trans">
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
        className={`block h-full  px-3 text-xl text-c-text c-trans border-b box-content ${
          router.asPath === props.href ? 'border-c-theme text-c-theme' : ''
        }`}
      >
        <span className="leading-[calc(var(--header-height)-1px)] hover:text-c-theme transition-colors duration-100">
          {props.children}
        </span>
      </a>
    </Link>
  );
}

export default Header;
