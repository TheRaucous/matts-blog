import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  return (
    <header className="border-brdrclr c-trans fixed top-0 z-40 flex h-[var(--header-height)] w-full justify-between border-b bg-c-bg/[var(--header-opacity)] px-[10%] backdrop-blur">
      <Link href="/" className="flex h-full items-center">
        <span className="select-none text-xl leading-none font-bold italic">
          MATTMCLEROY
          <span className="text-sm">.net</span>
        </span>
      </Link>

      <nav className="flex">
        <HeaderLink href="/blog">Blog</HeaderLink>
        <HeaderLink href="/contact">Contact</HeaderLink>
      </nav>
    </header>
  );
}

function HeaderLink(props: { children: any; href: string }) {
  const router = useRouter();
  const isOnPage = router.asPath.startsWith(props.href);
  return (
    <Link
      href={props.href}
      className={`c-trans box-content block h-full border-b px-3 text-lg ${
        isOnPage ? 'select-none border-c-theme' : ''
      }`}
    >
      <span
        className={`font-semibold leading-[calc(var(--header-height)-1px)] transition-colors duration-100 hover:text-c-theme ${
          isOnPage ? 'text-c-theme' : ''
        }`}
      >
        {props.children}
      </span>
    </Link>
  );
}

export default Header;
