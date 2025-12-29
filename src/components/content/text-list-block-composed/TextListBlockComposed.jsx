import TextListBlock from "../text-list-block/TextListBlock";

function TextListBlockComposed({ contentList }) {
  return (
    <div
      className={`
          flex flex-col
          gap-6
          `}
    >
      {contentList.map((item, index) => (
        <TextListBlock
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default TextListBlockComposed;
