function ContentViewColumn({ children }) {
  return (
    <section
      className={`
        w-full min-h-dvh 
        flex flex-col items-center
        bg-(--background-surface)
    `}
    >
      <div
        className={`
        w-full
        flex flex-col
        gap-16 lg:gap-24
        px-4 lg:px-0
        pt-18 lg:pt-14
        pb-24 lg:pb-16
        md:w-[72%] lg:w-[72%] lg:max-w-7xl
        `}
      >
        {children}
      </div>
    </section>
  );
}

export default ContentViewColumn;
