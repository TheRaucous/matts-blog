import Head from 'next/head';
import Hero from '../components/home/Hero'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
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
        <title>Contact - McLeroy</title>
      </Head>
      <Hero Title="Contact me"/>
      <main className="flex justify-center">
        <form ref={form} onSubmit={sendEmail} className="p-4 border-2">
          <div className="mb-8">
            <label className="block">Name</label>
            <input type="text" name="user_name" required className=" w-full textinput" />
          </div>
          <div className="mb-8">
            <label className="w-full block">Email</label>
            <input type="email" name="user_email" required className="block w-full textinput"/>
          </div>
          <div className="mb-8">
            <label className="block">Message</label>
            <textarea className="w-[25rem] max-w-[90vw] textinput min-h-[20rem]" name="message" />
          </div>
          <div className="flex w-full justify-center">
            <SubmitInput />
          </div>
        </form>
      </main>
    </>
  );

/*   return (
    <>
      <Head>
        <title>Contact - McLeroy</title>
      </Head>
      <Hero Title="Contact me"/>
      <main className="flex justify-center">
        <form ref={form} onSubmit={sendEmail} className="rounded-md p-8 max-w-[45rem] border-4">
          <label className="text-center inline-block flex-1">Name</label>
          <input type="text" name="user_name" required className="bg-slate-200 rounded-lg" />
          <label className="w-20">Email</label>
          <input type="email" name="user_email" required className="bg-slate-200 rounded-lg"/>
          <div>
            <label className="w-20">Message</label>
            <textarea className="w-full min-h-[200px] p-1 box-border bg-slate-200 rounded-lg" name="message" />
          </div>
          <div className="justify-center">
            <SubmitInput />
          </div>
        </form>
      </main>
    </>
  ); */
}

function FormItem({ label, type }) {
  return (
    <>
      <label className="pr-8">{label}</label>
      <input className="inline-block w-96" type={type} />
    </>
  );
}

function SubmitInput() {
  return (
    <>
      <input
        type="submit"
        value="Send"
        className="rounded w-40 border-2 px-2 py-1 text-lg tracking-wide transition-colors duration-75 hover:cursor-pointer hover:border-c-theme hover:bg-c-bg-01"
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
