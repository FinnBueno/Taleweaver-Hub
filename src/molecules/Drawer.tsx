import { Box } from "@src/atoms/Box";
import { WithChildren } from "@src/utils/children";

type Props = {
  open: boolean;
  onClose: () => void;
};

const transitionTime = 300;

export const Drawer = ({ children, open, onClose }: WithChildren<Props>) => (
  <Box
    position="fixed"
    top={0}
    left={0}
    w="100%"
    h="100%"
    zIndex={10}
    backgroundColor={`rgba(0, 0, 0, ${open ? ".5" : "0"})`}
    transition
    transitionDuration={transitionTime}
    pointerEvents={open ? "initial" : "none"}
    onClick={onClose}
  >
    <Box
      backgroundColor="background"
      transition="transform"
      transitionDuration={transitionTime}
      transform={`translateX(${open ? 0 : "-100%"})`}
      w="fit-content"
      h="100%"
    >
      {children}
    </Box>
  </Box>
);
