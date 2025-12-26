import MainCard from "../../components/card/main/MainCard";
import PlainCard from "../../components/card/plain/PlainCard";
import Text from "../../components/text/Text";

function FoundationsPage() {
  const gridFoundations = [
    {
      icon: "font-size",
      label: "Typography",
    },
    {
      icon: "palette-line",
      label: "Color",
    },
    {
      icon: "space",
      label: "Spacing",
    },
    {
      icon: "ruler-line",
      label: "Sizing",
    },
    {
      icon: "layout-grid-line",
      label: "Grid & Layout",
    },
    {
      icon: "shape-line",
      label: "Border",
    },
    {
      icon: "speed-line ",
      label: "Motion",
    },
    {
      icon: "braces-line",
      label: "Design Tokens",
    },
    {
      icon: "shapes-line",
      label: "Iconography",
    },
    {
      icon: "contrast-2-line",
      label: "Theming",
    },
    {
      icon: "stack-line",
      label: "Elevation",
    },
  ];

  return (
    <section className="min-h-dvh w-full flex flex-col items-center">
      <div className="w-full lg:max-w-240 flex flex-col">
        <PlainCard
          title={"Foundations"}
          description={
            "A collection of core foundations that define the visual and structural rules of the system"
          }
        />
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-4 pb-24 lg:pb-16 px-4 lg:px-0">
          {gridFoundations.map((item, index) => (
            <MainCard
              key={`${index}-${item}`}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoundationsPage;
