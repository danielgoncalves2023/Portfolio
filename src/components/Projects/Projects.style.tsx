import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsContainer = styled(motion.section)`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 70px 20px;

    @media (max-width: 410px) {
        padding: 70px 5px;
    }
`

export const ProjectsTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`

export const ProjectsGrid = styled.div`
    background-color: #FFFFFF;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 410px) {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
`
