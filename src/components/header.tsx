import { ThemeButton } from "@/components/themeButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 m-1 gap-4 bg-zinc-200 dark:bg-zinc-900 rounded-2xl min-w-[calc(100%-2rem)] md:min-w-1/2 shadow-lg shadow-gray-600 dark:shadow-blue-400">
      <img src="/favIcon.svg" alt="logo" width={50} />
      <h1>Bernardino, Nicolas Portfolio</h1>
      <ThemeButton />
    </header>
  );
}
