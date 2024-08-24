import { motion } from "framer-motion";
import styled from "styled-components";

// Crie o componente de banner com styled-components
export const MainContainer = styled(motion.main)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #ff6f61, #ffb347);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  gap: 20px;
`;

export const TitleMain = styled.h1`
    text-align: center;
    font-size: clamp(2.7rem, 4vw, 4rem);
`

export const SubTitle = styled(motion.p)`
    height: 30px;
    font-size: clamp(0.9rem, 4vw, 1.5rem);
`

export const Cursor = styled(motion.span)`
    display: inline-block;
    width: 2px;
    height: 1.3rem;
    background-color: #fff;
    margin-left: 5px;
    vertical-align: middle;
`

export const DivSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
`

export const ULSocials = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const LISocials = styled.li`
    transition: 0.5s;
    
    &:hover {
        color: black;
        transition: 0.5s;
    }
`

export const Ancor = styled.a`
    all: unset;
    width: 100%;
`

export const ButtonMoreAboutMe = styled.button`
    width: 180px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0);
    color: #FFFFFF;
    font-size: clamp(1rem, 3vw, 1.2rem);
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #FFFFFF;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        background-color: #FFFFFF;
        color: black;
        transition: 0.5s;
    }
`