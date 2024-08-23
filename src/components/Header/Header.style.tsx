import { motion } from "framer-motion";
import styled from "styled-components";

// Container HEADER
export const HeaderDiv = styled.header<{ $scrolled: boolean }>`
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    background-color: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0)')};
    transition: 1s;
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    z-index: 1;

    @media (max-width: 555px) {
        justify-content: space-between;
    }
`

export const DivDefault = styled.div`
    display: flex;

    @media (max-width: 650px) {
        display: none;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    margin-right: 40px;

    @media (max-width: 555px) {
        font-size: 1.5rem;
    }
`

export const ListDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 650px) {
        flex-direction: column;
    }
`

export const ListItem = styled.li`
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.5s;
    color: rgb(50, 50, 50);

    &:hover {
    color: rgb(0, 0, 0);
    transition: 0.5s;
    }
`

// MENU RESPONSIVO PARA DISPOSITIVOS até 550px
export const DivMobile = styled.div`
    display: none;

    @media (max-width: 650px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

export const NavBarHamburger = styled.div`
    @media (max-width: 555px) {
        display: flex;
        flex-direction: column;
        padding-right: 5px;
        cursor: pointer;
    }
`

export const NavBarDetails = styled.div`
    width: 40px;
    height: 9px;
    border-bottom: 3px solid rgb(75,75,75);
    cursor: pointer;
`

export const DivNavBar = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const DivOptions = styled(motion.div)<{ $scrolled: boolean }>`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: end;
    position: fixed;
    top: 70px;
    padding: 20px;
    background-color: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0)')};
    transition: background-color 1s;
`
