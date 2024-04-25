export const PageLayout = ({ heading }: { heading: string }) => {
  return (
    <div className="mx-auto p-14">
      <h1 className="text-2xl uppercase">{heading}</h1>
    </div>
  );
};
