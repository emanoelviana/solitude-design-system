import Badge from "../../badge/Badge";
import IconButton from "../../buttons/icon-button/IconButton";
import ToggleTheme from "../../buttons/toggle-theme/ToggleTheme";
import Text from "../../text/Text";

function Header() {
  return (
    <header className="w-full fixed backdrop-blur-2xl lg:bg-(--background-base) flex justify-between items-center py-3 px-4">
      <div className="flex gap-2 items-center">
        <Text as="h1" size={"titleLarge"} variant={"base"}>
          Solitude
        </Text>
        <Badge>Alpha</Badge>
      </div>
      <ul className="flex gap-2">
        <li>
          <IconButton icon={"figma-line"} title="Figma" variant={"outlined"} />
        </li>
        <li>
          <IconButton
            icon={"github-line"}
            title="GitHub"
            variant={"outlined"}
          />
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </header>
  );
}

export default Header;
