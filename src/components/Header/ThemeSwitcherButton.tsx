"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcherButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={toggleTheme}
      className="flex items-center gap-3 px-4 py-2 rounded-full border bg-secondary/70 border-border dark:bg-background dark:hover:bg-background/70 hover:bg-secondary transition-colors duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Light Mode Section */}
      <div className="flex items-center gap-2">
        <Sun className={`w-5 h-5 transition-all duration-300 ${isDark ? "text-muted-foreground" : "text-primary"}`} />
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            isDark ? "text-muted-foreground" : "text-foreground"
          }`}
        >
          Light
        </span>
      </div>

      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        onClick={toggleTheme}
        className="transition-all duration-300"
      />

      {/* Dark Mode Section */}
      <div className="flex items-center gap-2">
        <Moon className={`w-5 h-5 transition-all duration-300 ${isDark ? "text-primary" : "text-muted-foreground"}`} />
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            isDark ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Dark
        </span>
      </div>
    </div>
  );
}

export default ThemeSwitcherButton;
