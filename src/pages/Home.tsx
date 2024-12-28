import { Box } from "@src/atoms/Box";
import { Paragraph } from "@src/atoms/Paragraph";

export const HomePage = () => {
  return (
    <>
      <Box ml="400px">test</Box>
      {[...Array(70)].map(() => (
        <Paragraph key={Math.random()}>
          Hello world!
          <br />
        </Paragraph>
      ))}
    </>
  );
};
