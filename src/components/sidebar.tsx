import Link from "next/link";
import { navItems } from "@/lib/nav-items";

const linkClassName =
  "w-full px-2 py-1.5 rounded-md text-[0.84rem] hover:bg-[#262626] text-[#e5e5e5] duration-200 transition-all";

export default function Sidebar() {
  return (
    <div className="hidden fixed lg:flex flex-col justify-center w-48 gap-1 p-2 h-screen bg-black/0">
      {navItems.map((item) => (
        <Link key={item.label} href={item.href} className={linkClassName}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
