import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="page-shell">
      <div className="page-mesh" aria-hidden="true" />
      <Navbar />
      <main className={`relative z-10 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
}
