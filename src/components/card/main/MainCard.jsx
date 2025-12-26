import Icon from "../../icon/Icon";
import Text from "../../text/Text";
import clsx from "clsx";

function MainCard({ icon, label }) {
  const width = window.innerWidth;

  return (
    <div
      className={clsx(
        "flex flex-col gap-8 lg:gap-12 p-4 lg:p-6  rounded-lg bg-(--background-elevated) shadow-xs hover:shadow-xl transition-shadow cursor-pointer"
      )}
    >
      <Icon name={icon} size={32} variant={"subtle"} />
      <Text
        as="h3"
        variant={"base"}
        size={width > 840 ? "titleLarge" : "titleMedium"}
      >
        {label}
      </Text>
    </div>
  );
}

export default MainCard;
