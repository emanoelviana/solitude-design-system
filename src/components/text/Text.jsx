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
    size: {
      displayLarge:
        "font-display-large text-display-large leading-display-large [font-weight:600] tracking-display-large",

      displayMedium:
        "font-display-medium text-display-medium leading-display-medium [font-weight:600] tracking-display-medium",

      displaySmall:
        "font-display-small text-display-small leading-display-small [font-weight:600] tracking-display-small",

      headlineLarge:
        "font-headline-large text-headline-large leading-headline-large [font-weight:600] tracking-headline-large",

      headlineMedium:
        "font-headline-medium text-headline-medium leading-headline-medium [font-weight:600] tracking-headline-medium",

      headlineSmall:
        "font-headline-small text-headline-small leading-headline-small [font-weight:600] tracking-headline-small",

      titleLarge:
        "font-title-large text-title-large leading-title-large [font-weight:500] tracking-title-large",

      titleMedium:
        "font-title-medium text-title-medium leading-title-medium [font-weight:500] tracking-title-medium",

      titleSmall:
        "font-title-small text-title-small leading-title-small [font-weight:500] tracking-title-small",

      bodyLarge:
        "font-body-large text-body-large leading-body-large [font-weight:400] tracking-body-large",

      bodyMedium:
        "font-body-medium text-body-medium leading-body-medium [font-weight:400] tracking-body-medium",

      bodySmall:
        "font-body-small text-body-small leading-body-small [font-weight:400] tracking-body-small",

      captionLarge:
        "font-caption-large text-caption-large leading-caption-large [font-weight:500] tracking-caption-large",

      captionMedium:
        "font-caption-medium text-caption-medium leading-caption-medium [font-weight:500] tracking-caption-medium",

      captionSmall:
        "font-caption-small text-caption-small leading-caption-small [font-weight:500] tracking-caption-small",

      buttonLarge:
        "font-button-large text-button-large leading-button-large [font-weight:500] tracking-button-large",

      buttonMedium:
        "font-button-medium text-button-medium leading-button-medium [font-weight:500] tracking-button-medium",

      buttonSmall:
        "font-button-small text-button-small leading-button-small [font-weight:500] tracking-button-small",
    },
  },
  defaultVariants: {
    variant: "base",
    size: "bodyLarge",
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
