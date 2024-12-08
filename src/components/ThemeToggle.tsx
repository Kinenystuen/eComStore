import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-lg p-2  m-0 mt-[0.2rem] rounded hover:border-transparent transition-colors duration-300 bg-transparent hover:bg-transparent dark:text-whiteFont-500 dark:hover:text-whiteFont-600 text-gray-700 z-30 lg:mx-1"
      aria-label={`${darkMode ? "Toggle Light mode" : "Toggle Dark mode"}`}
      title={`${darkMode ? "Light mode" : "Dark mode"}`}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
