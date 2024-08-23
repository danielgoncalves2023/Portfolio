import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 2rem;
    text-align: center;
    background-color: #d4d4d4;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 555px) {
        font-size: 2rem;
    }
`;

export const Tabs = styled.ul`
width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    list-style: none;
    padding: 0;
`;

export const Tab = styled.li`
    margin: clamp(5px, 3vw, 1rem);
`;

interface TabButtonProps {
    $active: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
    background: none;
    border: none;
    font-size: clamp(1rem, 4vw, 1.5rem);
    padding: 0;
    cursor: pointer;
    color: ${({ $active }) => ($active ? '#000' : '#555')};
    position: relative;
    transition: color 1s;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: #000;
        transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
    }

    &:not(:$active)::after {
        transform-origin: left;
    }

    &:hover {
        color: #000;
        transition: color 1s;
    }
`;

interface TabContentProps {
    $active: boolean;
}

export const TabContent = styled.div<TabContentProps>`
    display: ${({ $active }) => ($active ? 'block' : 'none')};
`;

export const SkillsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Skill = styled.div`
    width: 95%;
    max-width: 300px;
    margin: 1rem;
`;

export const SkillTitle = styled.p`
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 0.5rem;
`;

export const ProgressBar = styled.div`
    background-color: #f3f3f3;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: 10px;
`;

interface ProgressProps {
    width: number;
}

export const Progress = styled.div<ProgressProps>`
    background-color: #007bff;
    width: ${({ width }) => `${width}%`};
    height: 100%;
`;
