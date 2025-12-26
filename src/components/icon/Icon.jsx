import { cva } from "class-variance-authority";
import clsx from "clsx";

const iconVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      brand: "text-(--icon-brand)",
      base: "text-(--icon-base)",
      subtle: "text-(--icon-subtle)",
      disabled: "text-(--icon-disabled)",
      empty: "",
    },
  },
  defaultVariants: {
    variant: "base",
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
