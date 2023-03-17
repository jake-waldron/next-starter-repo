import Link from "next/link";

export default function About() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1>About Page</h1>
      <Link href="/">Homepage</Link>
    </div>
  );
}
