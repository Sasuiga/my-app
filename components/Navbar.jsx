
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold">我的网站</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">首页</Link></li>
          <li><Link href="/about">关于</Link></li>
          <li><Link href="/blog">博客</Link></li>
        </ul>
      </div>
    </nav>
  );
}