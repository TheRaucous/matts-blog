import Head from 'next/head';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Contact - MatMac</title>
      </Head>
      <main className='flex justify-center'>
        <form className="flex flex-col w-96" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" />
          <SubmitInput />
        </form>
      </main>
    </>
  );
}

function SubmitInput() {
  return (
    <>
      <input
        type="submit"
        value="Send"
        className="rounded border-2 px-2 py-1 text-lg tracking-wide transition-colors duration-75 hover:cursor-pointer hover:border-c-theme hover:bg-c-bg-01"
      />
    </>
  );
}

// export default function contact() {
//   return (
//     <>
//       <main className="flex flex-col items-center">
//         <h1 className="my-10 text-3xl font-semibold">Contact me</h1>
//         <form className="flex w-[45rem] max-w-full flex-col items-center">
//           <TextInput name="email" label="Email" />
//           <SubmitInput />
//         </form>
//       </main>
//     </>
//   );
// }

// function TextInput({ name, label }) {
//   return (
//     <div className="flex w-full flex-col justify-center items-center sm:flex-row">
//       <label htmlFor={name} className="sm:pr-10">
//         {label}
//       </label>
//       <input type="text" name={name} className="rounded border-2 w-full max-w-[20rem]" />
//     </div>
//   );
// }
