import { useTheme } from "../../../contexts/useTheme";
import IconButton from "../icon-button/IconButton";

function ToggleTheme({ size = "md" }) {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      icon={theme === "dark" ? "moon-line" : "sun-line"}
      size={size}
      iconSize={24}
      variant={"outlined"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={theme === "dark" ? "Change to light mode" : "Change to dark mode"}
    />
  );
}

export default ToggleTheme;
