import { cva } from "class-variance-authority";
import clsx from "clsx";
import Icon from "../../icon/Icon";

const iconButtonVariants = cva("rounded-full cursor-pointer", {
  variants: {
    variant: {
      filled:
        "bg-(--surface-neutral-container) hover:bg-(--surface-neutral-contrast)",
      outlined:
        "ring-2 ring-inset ring-(--border-neutral-subtle) hover:ring-(--color-zinc-600) bg-transparent",
      ghost: "bg-transparent hover:bg-(--surface-neutral-container)",
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
      <Icon name={icon} size={iconSize} variant={"primary"} />
    </button>
  );
}

export default IconButton;
