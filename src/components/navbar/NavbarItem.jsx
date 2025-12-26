import Icon from "../icon/Icon";
import Text from "../text/Text";

function NavbarItem({ defaultIcon, selectedIcon, label, action, isActive }) {
  return (
    <div onClick={action} className="w-full py-2 cursor-pointer">
      <div className="flex flex-col justify-center items-center gap-1">
        <Icon
          name={isActive ? selectedIcon : defaultIcon}
          size={24}
          variant={isActive ? "brand" : "subtle"}
        />
        <Text
          as="h3"
          className={isActive ? "text-(--text-brand)" : "text-(--text-subtle)"}
          size={"buttonSmall"}
        >
          {label}
        </Text>
      </div>
    </div>
  );
}

export default NavbarItem;
