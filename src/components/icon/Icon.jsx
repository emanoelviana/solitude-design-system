import { cva } from "class-variance-authority";
import clsx from "clsx";

const iconVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      primary: "text-(--icon-neutral-primary)",
      primaryInverse: "text-(--icon-inverse-primary)",
      secondary: "text-(--icon-neutral-secondary)",
      secondaryInverse: "text-(--icon-inverse-secondary)",
      disabled: "text-(--icon-neutral-disabled)",
      disabledInverse: "text-(--icon-inverse-disabled)",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Icon({ name, variant, size, className, ...props }) {
  return (
    <i
      className={clsx(`ri-${name}`, iconVariants({ variant }), className)}
      style={size ? { fontSize: size, lineHeight: 1, width: size } : undefined}
      {...props}
    ></i>
  );
}

export default Icon;
