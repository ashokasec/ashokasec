import { ADMIN_SOCIALS } from "@/lib/config";
import { bricolage } from "@/lib/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <p className="grid place-items-center p-8 pb-20 sm:p-20 text-center text-gray-400 cursor-default">
      <span className="select-none">hey hii,</span>
      <span className="select-none">whats up?</span>
      <span>
        <span className="select-none">let&apos;s have a </span>
        <Link
          style={bricolage.style}
          href={ADMIN_SOCIALS.telegram}
          className="inline underline text-gray-100 font-medium"
        >
          chat
        </Link>
      </span>
    </p>
  );
}
