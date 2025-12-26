import Icon from "../icon/Icon";
import Text from "../text/Text";

function NavbarItem({ defaultIcon, selectedIcon, label, action, isActive }) {
  return (
    <div onClick={action} className="w-full py-2 cursor-pointer">
      <div className="flex flex-col justify-center items-center gap-1">
        <Icon
          name={isActive ? selectedIcon : defaultIcon}
          size={24}
          variant={isActive ? "brand" : "secondary"}
        />
        <Text
          as="h3"
          className={`text-xs ${
            isActive ? "text-(--text-brand)" : "text-(--text-subtle)"
          } font-medium text-center tracking-wider`}
        >
          {label}
        </Text>
      </div>
    </div>
  );
}

export default NavbarItem;
