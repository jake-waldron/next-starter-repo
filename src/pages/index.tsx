import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-full flex-col items-center justify-center">
        <h1>Hello World!</h1>
        <Link href="/about">About</Link>
      </main>
    </>
  );
}
