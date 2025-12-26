import { cva } from "class-variance-authority";
import clsx from "clsx";
import Icon from "../../icon/Icon";

const iconButtonVariants = cva("rounded-full cursor-pointer", {
  variants: {
    variant: {
      filled: "bg-(--background-surface) hover:bg-(--background-elevated)",
      outlined:
        "text-(--icon-color-base-rest) hover:text-(--icon-color-base-hover) ring-1 ring-inset ring-(--border-subtle) hover:ring-(--border-base) bg-transparent",
      ghost: "bg-transparent hover:bg-(--background-surface)",
    },
    size: {
      sm: "p-1",
      md: "p-2",
      lg: "p-4",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "md",
  },
});

function IconButton({
  icon,
  iconSize = 24,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      className={clsx(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      <Icon name={icon} size={iconSize} variant={"empty"} />
    </button>
  );
}

export default IconButton;
