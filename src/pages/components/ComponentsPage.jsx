import PlainCard from "../../components/card/plain/PlainCard";
import ContentViewColumn from "../../layout/ContentViewColumn";

function ComponentsPage() {
  return (
    <ContentViewColumn>
      <PlainCard
        title={"Components"}
        description={"Reusable UI components used across the system"}
      />
    </ContentViewColumn>
  );
}

export default ComponentsPage;
