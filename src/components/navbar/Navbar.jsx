import NavbarItem from "./NavbarItem";
import clsx from "clsx";

function Navbar({
  action1,
  action2,
  action3,
  action4,
  pathName,
  className,
  ...props
}) {
  return (
    <nav
      className={clsx(
        `fixed w-full bottom-0 flex justify-center items-center backdrop-blur-2xl border-t border-t-(--border-subtle) lg:hidden`,
        className
      )}
      {...props}
    >
      <NavbarItem
        defaultIcon={"sparkling-line"}
        selectedIcon={"sparkling-fill"}
        action={action1}
        label={"Overview"}
        isActive={pathName === "/"}
      />
      <NavbarItem
        defaultIcon={"layout-4-line"}
        selectedIcon={"layout-4-fill"}
        action={action2}
        label={"Foundations"}
        isActive={pathName === "/foundations"}
      />
      <NavbarItem
        defaultIcon={"puzzle-2-line"}
        selectedIcon={"puzzle-2-fill"}
        action={action3}
        label={"Components"}
        isActive={pathName === "/components"}
      />
      <NavbarItem
        defaultIcon={"information-line"}
        selectedIcon={"information-fill"}
        action={action4}
        label={"About"}
        isActive={pathName === "/about"}
      />
    </nav>
  );
}

export default Navbar;
