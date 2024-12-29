import { Paragraph } from "@src/atoms/Paragraph";

export const HomePage = () => {
  return (
    <>
      {[...Array(70)].map(() => (
        <Paragraph key={Math.random()}>
          Hello world!
          <br />
        </Paragraph>
      ))}
    </>
  );
};
