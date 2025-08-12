"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button variant="ghost" size="icon" className="rounded-full " onClick={() => toggleTheme()}>
      <Sun className="h-[1.2rem] w-[1.2rem] dark:scale-100 dark:rotate-0 transition-all scale-0 -rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] dark:scale-0 dark:rotate-90 transition-all scale-100 rotate-0" />
    </Button>
  );
}
