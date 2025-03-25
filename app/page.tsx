import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>欢迎来到我的网站</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">首页</Link>
          </li>
          <li>
            <Link href="/about">关于</Link>
          </li>
          <li>
            <Link href="/blog">博客</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}