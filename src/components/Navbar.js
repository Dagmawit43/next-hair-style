import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-300 h-20.5 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-3xl font-bold">Hairstyle Blog</Link>
        <div className="space-x-4">
          <Link href="/" className="text-xl hover:underline">Home</Link>
          <Link href="/blog" className="text-xl hover:underline">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
