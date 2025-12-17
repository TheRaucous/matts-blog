import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  return (
    <header className="border-brdrclr c-trans top-0 z-40 flex h-[var(--header-height)] w-full justify-between border-b bg-c-bg/[var(--header-opacity)] px-[10%] backdrop-blur">
      <Link href="/" className="flex h-full items-center">
        <span className="select-none text-3xl leading-none">McLeroy</span>
      </Link>

      <nav className="flex">
        <HeaderLink
          routeCheck={(href: string) => router.asPath === href}
          href="/"
        >
          Blog
        </HeaderLink>
        <HeaderLink
          routeCheck={(href: string) => router.asPath.startsWith(href)}
          href="/contact"
        >
          Contact
        </HeaderLink>
      </nav>
    </header>
  );
}

function HeaderLink(props: {
  children: any;
  href: string;
  routeCheck: Function;
}) {
  const isOnPage = props.routeCheck(props.href);
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
