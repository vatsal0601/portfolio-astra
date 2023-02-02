export const checkIsDarkMode = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    return true;
  }
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  return false;
};
