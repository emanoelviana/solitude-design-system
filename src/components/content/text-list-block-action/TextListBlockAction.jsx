import Text from "../../text/Text";

function TextListBlockAction({ title, description, actionLabel, link }) {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

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
      <button onClick={() => handleClick(link)} className="cursor-pointer">
        {actionLabel}
      </button>
    </div>
  );
}

export default TextListBlockAction;
