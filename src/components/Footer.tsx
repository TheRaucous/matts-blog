import ThemeSwitcher from './ThemeSwitcher';

function Footer() {
  return (
    <footer className="c-trans border-t py-4">
      <div className="flex flex-col items-center justify-center py-2 md:flex-row md:space-x-20">
        <ul className="flex items-center justify-center space-x-3">
          <LIA href="">GitHub</LIA>
          <LIA href="">Twitter</LIA>
        </ul>
        <ul className="flex list-none items-center justify-center space-x-3 py-2">
          <LIA href="">Blog</LIA>
          <LIA href="">Contact</LIA>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center py-2 md:flex-row md:space-x-20">
        <p className="text-center text-c-text-03">
          Made with <InlineA href="https://nextjs.org/">Next.js</InlineA>,{' '}
          <InlineA href="https://tailwindcss.com/">Tailwind</InlineA>,{' '}
          <InlineA href="https://www.typescriptlang.org/">Typescript</InlineA>{' '}
          and <InlineA href="https://mdxjs.com/">MDX</InlineA>
        </p>
        <div className="py-2">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}

function LIA({ children, href }) {
  return (
    <li>
      <A href={href}>{children}</A>
    </li>
  );
}

function A({ children, href }) {
  return (
    <a
      href={href}
      className="text-c-text-02 transition-colors duration-75 hover:text-c-text"
    >
      {children}
    </a>
  );
}

function InlineA({ children, href }) {
  return (
    <a
      href={href}
      className="transition-colors duration-75 hover:text-c-text hover:underline"
    >
      {children}
    </a>
  );
}

export default Footer;
