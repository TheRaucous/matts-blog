function P(props) {
  return <p className="c-trans">{props.children}</p>;
}

function H1(props) {
  return (
    <h1
      id={props.id}
      className="c-trans scroll-m-10 border-b pt-10 pb-8 text-3xl font-bold tracking-wide text-c-text-00"
    >
      {props.children}
    </h1>
  );
}

function H2(props) {
  return (
    <h2
      id={props.id}
      className="c-trans scroll-m-10 border-b pt-10 pb-8 text-2xl font-bold tracking-wide text-c-text-00"
    >
      {props.children}
    </h2>
  );
}

function H3(props) {
  return (
    <h3
      id={props.id}
      className="c-trans scroll-m-10 pt-8 pb-6 text-xl font-bold tracking-wide text-c-text-00"
    >
      {props.children}
    </h3>
  );
}

function H4(props) {
  return (
    <h4
      id={props.id}
      className="c-trans scroll-m-10 pt-6 pb-2 text-base font-bold tracking-wide text-c-text-00"
    >
      {props.children}
    </h4>
  );
}

function H5(props) {
  return (
    <h5
      id={props.id}
      className="c-trans scroll-m-10 pb-2 pt-3 text-sm font-extrabold tracking-wider text-c-text-00"
    >
      {props.children}
    </h5>
  );
}

function H6(props) {
  return (
    <h6
      id={props.id}
      className="c-trans scroll-m-10 pb-2 pt-3 text-sm font-extrabold tracking-wider text-c-text-00/60"
    >
      {props.children}
    </h6>
  );
}

function HR() {
  return <hr className="c-trans my-10"></hr>;
}

function Strong(props) {
  return <strong className="c-trans">{props.children}</strong>;
}

function Em(props) {
  return <em className="c-trans">{props.children}</em>;
}

function Blockquote(props) {
  return (
    <blockquote
      className={`c-trans flex rounded border-l-[6px] border-gray-500/50 bg-gray-500/10 px-4 py-4`}
    >
      {props.children}
    </blockquote>
  );
}

/**
 * Custom html components for use when parsing markdown.
 */
const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HR,
  p: P,
  strong: Strong,
  em: Em,
  blockquote: Blockquote,
};

export default MDXComponents;
