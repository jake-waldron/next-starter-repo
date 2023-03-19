import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="absolute top-0 flex w-full  items-baseline justify-between bg-slate-700 px-10 py-6 text-white">
        <Link href="/">
          <h1 className="text-2xl">Hello World!</h1>
        </Link>
        <ul className="flex gap-10">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/users/new">Add New User</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
