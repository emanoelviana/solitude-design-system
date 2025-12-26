import Text from "../text/Text";

function Badge({ children, ...props }) {
  return (
    <div
      id="badge"
      className="py-1 px-2 rounded-full ring-1 ring-(--border-subtle)"
    >
      <Text as="h5" variant={"subtle"} size={"captionMedium"} {...props}>
        {children}
      </Text>
    </div>
  );
}

export default Badge;
