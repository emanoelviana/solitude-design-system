import clsx from "clsx";
import Text from "../../text/Text";

function PlainCard({ title, description, className, ...props }) {
  const width = window.innerWidth;

  return (
    <div
      className={clsx(
        `
        flex flex-col
        gap-4 lg:gap-6
        `,
        className
      )}
      {...props}
    >
      <Text
        as="h1"
        variant={"base"}
        size={width > 840 ? "displayLarge" : "displaySmall"}
        className={`w-[80%] lg:w-[64%]`}
      >
        {title}
      </Text>
      {description && (
        <Text
          as="h3"
          variant={"subtle"}
          size={width > 840 ? "titleLarge" : "titleMedium"}
          className={`w-[80%] lg:w-[64%]`}
        >
          {description}
        </Text>
      )}
    </div>
  );
}

export default PlainCard;
