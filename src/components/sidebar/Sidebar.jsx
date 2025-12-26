import Badge from "../badge/Badge";
import Text from "../text/Text";

function Sidebar() {
  return (
    <aside className="fixed left-0 inset-y-0 h-dvh hidden lg:block w-70 border-r border-r-(--border-subtle) bg-(--background-base)">
      <div className="flex items-center gap-2 py-3 px-6">
        <Text as="h1" className={"text-xl font-medium"} variant={"base"}>
          Solitude
        </Text>
        <Badge>Alpha</Badge>
      </div>
    </aside>
  );
}

export default Sidebar;
