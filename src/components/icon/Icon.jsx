import { cva } from "class-variance-authority";
import clsx from "clsx";

const iconVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      brand: "text-(--icon-brand)",
      primary: "text-(--icon-primary)",
      secondary: "text-(--icon-secondary)",
      disabled: "text-(--icon-disabled)",
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
