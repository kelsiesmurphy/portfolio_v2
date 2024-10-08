import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ModeToggleMobile() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light"
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <div className="flex gap-4">
      <Button
        onClick={() => setThemeState("theme-light")}
        variant="outline"
        className="flex-1"
      >
        <Sun className="h-6 w-6" />
      </Button>
      <Button
        onClick={() => setThemeState("dark")}
        variant="outline"
        className="flex-1"
      >
        <Moon className="h-6 w-6" />
      </Button>
    </div>
  );
}
