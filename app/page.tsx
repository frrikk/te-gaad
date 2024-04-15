import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/bad">Bad a11y</Link>
      <Link href="/good">Good a11y</Link>
    </main>
  );
}
