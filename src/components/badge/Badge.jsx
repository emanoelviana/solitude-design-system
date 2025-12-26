import Text from "../text/Text";

function Badge({ children, ...props }) {
  return (
    <div
      id="badge"
      className="py-1 px-2 rounded-full ring-1 ring-(--border-base)"
    >
      <Text
        as="h5"
        variant={"subtle"}
        className="text-xs font-medium tracking-wide"
        {...props}
      >
        {children}
      </Text>
    </div>
  );
}

export default Badge;
