import TextBlock from "../../components/content/text-block/TextBlock";
import TextListBlockAction from "../../components/content/text-list-block-action/TextListBlockAction";
import TextListBlockComposed from "../../components/content/text-list-block-composed/TextListBlockComposed";
import TextListBlock from "../../components/content/text-list-block/TextListBlock";
import Text from "../../components/text/Text";
import ContentViewColumn from "../../layout/ContentViewColumn";

function AboutPage() {
  const width = window.innerWidth;

  const principlesList = [
    {
      title: "Consistency over customization",
      description:
        "Design decisions are centralized to reduce fragmentation and improve coherence",
    },
    {
      title: "Tokens as the foundation",
      description:
        "All visual decisions originate from semantic tokens, not hardcoded values",
    },
    {
      title: "Clarity and simplicity",
      description:
        "The system favors clear naming, predictable structures, and minimal abstraction.",
    },
    {
      title: "Designed to evolve",
      description:
        "Solitude is built to grow incrementally without compromising existing interfaces.",
    },
  ];

  const techStackList = [
    {
      title: "Design decisions — Figma",
      description:
        "Visual decisions are explored and defined in Figma, serving as the starting point of the system",
    },
    {
      title: "Token modeling — Tokens Studio",
      description:
        "Design decisions are translated into structured, semantic design tokens",
    },
    {
      title: "Source of truth — GitHub",
      description:
        "Tokens are versioned, reviewed, and maintained as a single source of truth",
    },
    {
      title: "Transformation — Style Dictionary",
      description:
        "Tokens are transformed into platform-ready formats and distributed across targets",
    },
    {
      title: "System consumption — Solitude",
      description:
        "Tokens are documented and consumed throughout the Solitude design system",
    },
  ];

  return (
    <ContentViewColumn>
      <div
        id="hero"
        className={`
        flex flex-col items-stretch gap-12
        `}
      >
        <img src="/images/about/page-hero-display.png" alt="" />
        <Text
          as="h1"
          variant={"base"}
          size={width > 840 ? "headlineLarge" : "headlineLarge"}
          className={`
            lg:w-[80%]
            `}
        >
          Where design meets development
        </Text>
      </div>
      <TextBlock
        title={"About Solitude"}
        description={
          "Solitude is a modular design system created to align design and development through a shared visual and semantic foundation. It provides a structured set of foundations, tokens, and components that help teams build consistent and scalable interfaces"
        }
      />
      <TextBlock
        title={"Principles"}
        description={
          "Digital products often suffer from visual inconsistency, duplicated decisions, and misalignment between design and engineering. Solitude was created to address these challenges by:"
        }
      >
        <TextListBlockComposed contentList={principlesList} />
      </TextBlock>
      <TextBlock
        title={"Tech stack"}
        description={
          "A structured pipeline that translates design decisions into versioned, platform-ready tokens consumed by the Solitude design system"
        }
      >
        <img
          src="/images/about/development-stack-explained.png"
          alt="Pipeline"
        />
        <TextListBlockComposed contentList={techStackList} />
      </TextBlock>
      <TextBlock
        title={"How to use the system"}
        description={
          "Solitude can be used across different stages of the product workflow, from early design exploration to implementation"
        }
      >
        <TextListBlockAction
          title={"Figma"}
          description={"Use the design library as the visual source of truth"}
          actionLabel={"View source on GitHub"}
          link={
            "https://www.figma.com/design/rHu3JvZyZiKd0MJkFxxafy/Solitude-Design-System?node-id=304-466&t=LT5JQGsN5sLdZdN8-1"
          }
        />
        <TextListBlockAction
          title={"GitHub"}
          description={"Access tokens, documentation, and system structure"}
          actionLabel={"View source on GitHub"}
          link={"https://github.com/emanoelviana/solitude-design-system"}
        />
      </TextBlock>
    </ContentViewColumn>
  );
}

export default AboutPage;
