import styled from "styled-components";

// CARD CONTAINER
export const CardContainer = styled.div`
    width: 100%;
    height: 350px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: auto;
    align-items: center;
    border-radius: 8px;
    border: 1px solid darkgray;
    box-sizing: border-box;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 1s;

    &:hover {
        transform: scale(1.02);
        transition: 1s;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

// CARD TOP
export const CardTopDiv = styled.div`
    width: 100%;
    height: 230px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    `

export const NameProject = styled.h1`
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: clamp(1.05rem, 3vw, 1.5rem);
`

export const DescriptionProject = styled.p`
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: clamp(0.7rem, 2vw, 0.8rem);
`

export const Button = styled.button`
    height: 40px;
    background-color: rgba( 0, 0, 0, 0);
    border: 1px solid gray;
    border-radius: 4px;
    font-size: clamp(1rem, 3vw, 1.2rem);
    transition: 1s;

    &:hover {
        background-color: gray;
        transition: 1s;
    }

    &:active {
        background-color: black;
        transition: 0.2s;
    }
`

export const Ancor = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
    gap: 10px;
    transition: 1s;

    &:hover {
        color: white;
        transition: 1s;
    }
`

// CARD BOTTOM
export const CardBottomDiv = styled.div`
    width: 100%;
    height: 120px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-top: 1px solid darkgray;
    padding-top: 20px;
`

export const TechnologiesTitle = styled.p`
    display: flex;
    flex-direction: column;
    font-size: clamp(0.8rem, 2vw, 1rem);
    gap: 10px;
    `

export const TechnologiasList = styled.span`
    display: flex;
    justify-content: center;
    font-size: clamp(0.8rem, 2vw, 1rem);
`

export const LastUpdate = styled.p`
    font-size: clamp(0.6rem, 2vw, 0.7rem);
`
