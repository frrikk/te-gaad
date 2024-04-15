import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <main>
      <Link
        href="/bad"
        className={cn(
          "mx-auto w-fit uppercase font-light mt-20 bg-slate-800 text-white rounded-md px-4 py-2 flex self-center",
        )}
      >
        The site
      </Link>
      {/*<Link href="/good">Good a11y</Link>*/}
    </main>
  );
}
