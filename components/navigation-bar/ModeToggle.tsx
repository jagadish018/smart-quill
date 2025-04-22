"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const modes = ["light", "dark", "system"];
  const [index, setIndex] = React.useState(0);

  // Update index based on the current theme
  React.useEffect(() => {
    const currentIndex = modes.indexOf(theme || "dark");
    setIndex(currentIndex === -1 ? 2 : currentIndex);
  }, [theme]);

  const toggleTheme = () => {
    const nextIndex = (index + 1) % modes.length;
    setIndex(nextIndex);
    setTheme(modes[nextIndex]);
  };

  const mode = modes[index];

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      className="flex items-center gap-2 rounded-full"
    >
      {mode === "dark" && <Moon className="h-4 w-4" />}
      {mode === "light" && <Sun className="h-4 w-4" />}
      {mode === "system" && <Laptop className="h-4 w-4" />}
    </Button>
  );
}
