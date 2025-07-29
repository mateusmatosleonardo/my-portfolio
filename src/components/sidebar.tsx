// import Link from "./Link";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed flex flex-col justify-center w-48 gap-1 p-2 h-screen bg-black/0">
      <Link
        href="/"
        className="w-full px-2 py-1.5 rounded-md text-[0.925rem] hover:bg-[#262626] text-[#e5e5e5] duration-200 transition-all"
      >
        Sobre
      </Link>
      <Link
        href="/"
        className="w-full px-2 py-1.5 rounded-md text-[0.925rem] hover:bg-[#262626] text-[#e5e5e5] duration-200 transition-all"
      >
        Stack
      </Link>
      <Link
        href="/"
        className="w-full px-2 py-1.5 rounded-md text-[0.925rem] hover:bg-[#262626] text-[#e5e5e5] duration-200 transition-all"
      >
        Extra
      </Link>
    </div>
  );
}
