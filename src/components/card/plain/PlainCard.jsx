import clsx from "clsx";
import Text from "../../text/Text";

function PlainCard({ title, description, className, ...props }) {
  const width = window.innerWidth;

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 lg:gap-6 px-4 lg:px-0 pt-24 pb-12 lg:pb-16 lg:pt-20",
        className
      )}
      {...props}
    >
      <Text
        as="h1"
        variant={"base"}
        size={width > 840 ? "displayLarge" : "displaySmall"}
      >
        {title}
      </Text>
      {description && (
        <Text
          as="h3"
          variant={"subtle"}
          size={width > 840 ? "titleLarge" : "titleMedium"}
        >
          {description}
        </Text>
      )}
    </div>
  );
}

export default PlainCard;
