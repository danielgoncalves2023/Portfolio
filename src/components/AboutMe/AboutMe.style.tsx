import styled from "styled-components";

export const AboutMeContainer = styled.section`
    width: 100%;
    height: auto;
    background-color: #DCDCDC;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    padding: 80px 10px;

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
        padding: 80px 10px;
    }
`
// Seção da Foto 
export const AboutMePhotoSection = styled.div`
    display: grid;
    place-content: center;

    @media (max-width: 940px) {
        display: none;
    }
`

export const AboutMePhoto = styled.img`
    width: 18rem;
    border-radius: 50%;
`

// Seção de título, texto e botão
export const AboutMeDetailSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    line-height: 1.5;
    padding: 0 20px;
    gap: 30px;
`

export const AboutMeTitle = styled.h1`
    font-size: clamp(2rem, 4vw, 2.5rem);
`

export const AboutMeText = styled.p`
    font-size: clamp(0.8rem, 3vw, 1rem);
    text-align: justify;
    line-height: 1.5;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonMore = styled.button`
    width: 100px;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0, 0);
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 8px;
    font-size: clamp(0.8rem, 3vw, 1.2rem);
    transition: 0.5s;

    &:hover {
        background-color: black;
        color: white;
        transition: 0.5s;
    }
`

export const AncorDownload = styled.a`
    all: unset;
`