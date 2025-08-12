import { ThemeButton } from "@/components/themeButton";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center p-4 gap-4">
      <Image src="/favicon.svg" alt="logo" width={50} height={50} />
      <h1>Header</h1>
      <ThemeButton />
    </header>
  );
}
