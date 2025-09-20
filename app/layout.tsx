import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Kipekee",
  description: "DIY Smart Menu & Ordering System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", background: "#faf7f3", color: "#333" }}>
        <nav style={{ padding: "1rem", background: "#7B4B2A", color: "#fff" }}>
          <Link href="/" style={{ marginRight: "1rem", color: "#fff" }}>Home</Link>
          <Link href="/owner" style={{ marginRight: "1rem", color: "#fff" }}>Owner</Link>
          <Link href="/manager" style={{ marginRight: "1rem", color: "#fff" }}>Manager</Link>
          <Link href="/waiter" style={{ marginRight: "1rem", color: "#fff" }}>Waiter</Link>
          <Link href="/cashier" style={{ marginRight: "1rem", color: "#fff" }}>Cashier</Link>
          <Link href="/kitchen" style={{ marginRight: "1rem", color: "#fff" }}>Kitchen</Link>
          <Link href="/diner" style={{ marginRight: "1rem", color: "#fff" }}>Diner</Link>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
