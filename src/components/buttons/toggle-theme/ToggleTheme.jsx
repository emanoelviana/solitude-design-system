import IconButton from "../icon-button/IconButton";

function ToggleTheme({ size = "md" }) {
  return (
    <IconButton
      icon={"sun-line"}
      size={size}
      iconSize={24}
      variant={"filled"}
      onClick={() => {}}
      title={"z"}
    />
  );
}

export default ToggleTheme;
