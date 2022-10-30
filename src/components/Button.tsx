import { useState } from 'react';

export default function Button() {
  const [text, setText] = useState('Click Me! ...Please?');
  const click = () => {
    alert("YOU DIDN'T PRESS THE BUTTON, DID YOU?!?!?!");
    setText('Why? 😥😥😥😥')
  };

  return (
    <button onClick={click} className="border-2 border-slate-700 rounded bg-blue-300/50">
      {text}
    </button>
  );
}
