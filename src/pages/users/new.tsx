import React from "react";
import { useRouter } from "next/router";

export default function NewUser() {
  const router = useRouter();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
    router.push("/");
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl">New User Page</h1>
      <form
        onSubmit={handleSubmit}
        className="my-10 flex flex-col gap-3 rounded-3xl bg-slate-300 p-10"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-500 p-2"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-500 p-2"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
