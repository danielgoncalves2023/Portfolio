import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  width: 100%;
  height: 350px;
  background: linear-gradient(90deg, #eeeeee 25%, #e0e0e0 50%, #eeeeee 75%);
  background-size: 200% 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  align-items: center;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  gap: 10px;
`;