import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">About</h1>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Link href={"/"}>&larr; Back to Home</Link>
    </div>
  );
}
