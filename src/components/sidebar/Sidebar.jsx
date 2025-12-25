import Badge from "../badge/Badge";
import Text from "../text/Text";

function Sidebar() {
  return (
    <aside className="fixed left-0 inset-y-0 h-dvh hidden lg:block w-70 border-r border-r-(--border-neutral-subtle) bg-(--surface-neutral-base)">
      <div className="py-3 px-6 flex gap-2 items-center">
        <Text as="h1" className={"text-xl font-medium"} variant={"primary"}>
          Solitude
        </Text>
        <Badge>Alpha</Badge>
      </div>
    </aside>
  );
}

export default Sidebar;
