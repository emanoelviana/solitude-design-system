import Badge from "../../badge/Badge";
import IconButton from "../../buttons/icon-button/IconButton";
import ToggleTheme from "../../buttons/toggle-theme/ToggleTheme";
import Text from "../../text/Text";

function Header() {
  return (
    <header
      className={`
        w-full 
        flex justify-between items-center
        py-3 px-4
        fixed
        lg:hidden
        backdrop-blur-2xl
        lg:bg-(--background-base) 
        `}
    >
      <div className="flex gap-2 items-center">
        <Text as="h1" size={"titleLarge"} variant={"base"}>
          Solitude
        </Text>
        <Badge>Alpha</Badge>
      </div>
      <ul className="flex gap-2">
        <li>
          <IconButton
            icon={"figma-line"}
            title="Figma"
            variant={"ghost"}
            link={
              "https://www.figma.com/design/rHu3JvZyZiKd0MJkFxxafy/Solitude-Design-System?node-id=304-466&t=LT5JQGsN5sLdZdN8-1"
            }
          />
        </li>
        <li>
          <IconButton
            icon={"github-line"}
            title="GitHub"
            variant={"ghost"}
            link={"https://github.com/emanoelviana/solitude-design-system"}
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
