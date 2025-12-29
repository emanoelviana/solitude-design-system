import Text from "../../text/Text";

function TextBlock({ title, description, children, className }) {
  const width = window.innerWidth;

  return (
    <div
      id="about"
      className={`
         flex flex-col
            pb-8 lg:pb-12
            gap-8
            border-b border-b-(--border-base)
        `}
    >
      <div
        className={`
          flex flex-col gap-8
          `}
      >
        <Text
          as="h1"
          variant={"base"}
          size={width > 840 ? "headlineMedium" : "headlineSmall"}
          className={`
            lg:w-[80%]
            `}
        >
          {title}
        </Text>
        <Text
          as="p"
          variant={"subtle"}
          size={"bodyMedium"}
          className={`
          w-[88%] lg:w-[64%]
          `}
        >
          {description}
        </Text>
      </div>
      {children && children}
    </div>
  );
}

export default TextBlock;
