"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Check if the browser supports the View Transitions API
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get the position of the click
    const x = event.clientX;
    const y = event.clientY;

    // Use the View Transitions API
    document.startViewTransition(() => {
      // Set the CSS variables for the animation's origin
      document.documentElement.style.setProperty('--x', `${x}px`);
      document.documentElement.style.setProperty('--y', `${y}px`);
      // Change the theme
      setTheme(newTheme);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange} // Use our new handler function
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}