import { createElement } from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      primary: "text-(--text-neutral-primary)",
      primaryInverse: "text-(--text-inverse-primary)",
      secondary: "text-(--text-neutral-secondary)",
      secondaryInverse: "text-(--text-inverse-secondary)",
      disabled: "text-(--text-neutral-disabled)",
      disabledInverse: "text-(--text-inverse-disabled)",
    },
    size: {
      sm: "text-md",
      md: "text-xl",
      lg: "text-2xl",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Text({ as = "span", variant, size, children, className, ...props }) {
  return createElement(
    as,
    {
      className: clsx(textVariants({ variant, size }), className),
      ...props,
    },
    children
  );
}

export default Text;
