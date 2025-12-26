import Icon from "../../icon/Icon";
import Text from "../../text/Text";
import clsx from "clsx";

function MainCard({ icon, label }) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-8 lg:gap-12 p-6 lg:p-12 rounded-lg bg-(--background-elevated) shadow-xs hover:shadow-xl transition-shadow cursor-pointer"
      )}
    >
      <Icon name={icon} size={32} variant={"secondary"} />
      <Text
        as="h3"
        variant={"base"}
        className={"text-md lg:text-2xl font-medium"}
      >
        {label}
      </Text>
    </div>
  );
}

export default MainCard;
