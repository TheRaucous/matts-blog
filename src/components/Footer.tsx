import ThemeSwitcher from './ThemeSwitcher';

function Footer() {
  return (
    <footer className="border-t py-4 c-trans">
      <div className="flex justify-center py-2 items-center md:space-x-20 flex-col md:flex-row">
        <ul className="flex items-center justify-center space-x-3">
          <LIA href="">GitHub</LIA>
          <LIA href="">Twitter</LIA>
          <LIA href="">More Socials</LIA>
        </ul>
        <ul className="flex items-center py-2 justify-center space-x-3 list-none">
          <LIA href="">Tutorials</LIA>
          <LIA href="">Blog</LIA>
          <LIA href="">Misc.</LIA>
        </ul>
      </div>
      <div className="flex justify-center items-center py-2 md:space-x-20 flex-col md:flex-row">
        <p className="text-center text-c-text-03">
          Made with <InlineA href="https://nextjs.org/">Next.js</InlineA>,{' '}
          <InlineA href="https://tailwindcss.com/">Tailwind</InlineA>,{' '}
          <InlineA href="https://mdxjs.com/">MDX</InlineA> and{' '}
          <InlineA href="https://www.typescriptlang.org/">Typescript</InlineA>
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
      className="text-c-text-02 hover:text-c-text transition-colors duration-75"
    >
      {children}
    </a>
  );
}

function InlineA({ children, href }) {
  return (
    <a
      href={href}
      className="hover:text-c-text transition-colors duration-75 hover:underline"
    >
      {children}
    </a>
  );
}

export default Footer;
