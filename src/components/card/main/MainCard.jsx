import Icon from "../../icon/Icon";
import Text from "../../text/Text";
import clsx from "clsx";

function MainCard({ icon, label }) {
  return (
    <div
      className={clsx(
        "group shadow-xs hover:shadow-xl transition-shadow flex flex-col gap-8 lg:gap-12 rounded-lg p-6 lg:p-12 bg-(--surface-neutral-container) cursor-pointer"
      )}
    >
      <Icon
        name={icon}
        size={32}
        variant={"secondary"}
        className={"group-hover:text-blue-600"}
      />
      <Text
        as="h3"
        variant={"primary"}
        className={"text-md lg:text-2xl font-medium"}
      >
        {label}
      </Text>
    </div>
  );
}

export default MainCard;
