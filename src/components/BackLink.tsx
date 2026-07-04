import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink({ href = "/" }: { href?: string }) {
  return (
    <div className="section-container pt-28 pb-6">
      <Link href={href} className="back-link">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
