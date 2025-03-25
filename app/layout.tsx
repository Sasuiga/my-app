import "./globals.css";
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="text-center p-4">
          © 2025 我的网站
        </footer>
      </body>
    </html>
  );
}