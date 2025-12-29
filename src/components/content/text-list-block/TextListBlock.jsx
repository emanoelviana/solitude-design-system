import Text from "../../text/Text";

function TextListBlock({ title, description }) {
  return (
    <div
      className={`
          flex flex-col
          gap-1
          `}
    >
      <Text as="h3" size={"titleMedium"} variant={"base"}>
        {title}
      </Text>
      <Text as="p" size={"bodyMedium"} variant={"subtle"}>
        {description}
      </Text>
    </div>
  );
}

export default TextListBlock;
