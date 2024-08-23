import { CardContainer } from "./CardSkeleton.style";

// Define a configuração da animação
const shimmerAnimation = {
  hidden: { backgroundPosition: '-100% 0' },
  visible: { backgroundPosition: '100% 0' },
};

// CardSkeleton com animação usando framer-motion
export const CardSkeleton = () => {
  return (
    <CardContainer
      variants={shimmerAnimation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "linear", repeat: Infinity }}
    />
  );
}