import { useTheme } from "../../../contexts/theme/UseTheme";
import IconButton from "../icon-button/IconButton";

function ToggleTheme({ size = "md" }) {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      icon={theme === "dark" ? "moon-line" : "sun-line"}
      size={size}
      iconSize={24}
      variant={"filled"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={
        theme === "dark" ? "Change theme to Light" : "Change theme to Dark"
      }
    />
  );
}

export default ToggleTheme;
