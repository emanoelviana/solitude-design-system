import clsx from "clsx";
import Text from "../../text/Text";

function PlainCard({ title, description, className, ...props }) {
  return (
    <div
      id="hero"
      className={clsx(
        "flex flex-col gap-6 lg:gap-6 px-6 lg:px-0 pt-8 pb-12 lg:pb-16 lg:pt-20",
        className
      )}
      {...props}
    >
      <Text
        as="h1"
        variant={"base"}
        className={"text-4xl font-semibold tracking-wide lg:text-6xl"}
      >
        {title}
      </Text>
      {description && (
        <Text
          as="h3"
          variant={"subtle"}
          className={
            "text-lg leading-6 lg:text-xl lg:leading-7 font-medium max-w-70 lg:max-w-xl"
          }
        >
          {description}
        </Text>
      )}
    </div>
  );
}

export default PlainCard;
