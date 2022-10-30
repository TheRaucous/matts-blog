function P(props) {
  return <p className="c-trans">{props.children}</p>;
}

function H1(props) {
  return (
    <h1
      id={props.id}
      className="text-3xl scroll-m-10 tracking-wide font-bold text-c-text-00 pt-10 pb-8 border-b c-trans"
    >
      {props.children}
    </h1>
  );
}

function H2(props) {
  return (
    <h2
      id={props.id}
      className="text-2xl scroll-m-10 tracking-wide font-bold text-c-text-00 pt-10 pb-8 border-b c-trans"
    >
      {props.children}
    </h2>
  );
}

function H3(props) {
  return (
    <h3
      id={props.id}
      className="text-xl scroll-m-10 tracking-wide font-bold text-c-text-00 pt-8 pb-6 c-trans"
    >
      {props.children}
    </h3>
  );
}

function H4(props) {
  return (
    <h4
      id={props.id}
      className="text-base scroll-m-10 tracking-wide font-bold text-c-text-00 pt-6 pb-2 c-trans"
    >
      {props.children}
    </h4>
  );
}

function H5(props) {
  return (
    <h5
      id={props.id}
      className="text-sm scroll-m-10 tracking-wider font-extrabold text-c-text-00 pb-2 pt-3 c-trans"
    >
      {props.children}
    </h5>
  );
}

function H6(props) {
  return (
    <h6
      id={props.id}
      className="text-sm scroll-m-10 tracking-wider font-extrabold text-c-text-00/60 pb-2 pt-3 c-trans"
    >
      {props.children}
    </h6>
  );
}

function HR() {
  return <hr className="my-10 c-trans"></hr>;
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
      className={`flex border-l-[6px] border-gray-500/50 rounded px-4 py-4 c-trans bg-gray-500/10`}
    >
      {props.children}
    </blockquote>
  );
}

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
