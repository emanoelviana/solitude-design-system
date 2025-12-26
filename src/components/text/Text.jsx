import { createElement } from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      brand: "text-(--text-brand)",
      base: "text-(--text-base)",
      subtle: "text-(--text-subtle)",
      disabled: "text-(--text-disabled)",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

function Text({ as = "span", variant, children, className, ...props }) {
  return createElement(
    as,
    {
      className: clsx(textVariants({ variant }), className),
      ...props,
    },
    children
  );
}

export default Text;
