import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;    
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;
    padding: 0 50px;
    background-color: #DCDCDC;

    @media (max-width: 555px) {
        padding: 0 20px;
    }
`

export const Title = styled.h1`
    font-size: clamp(1.5rem, 2vw, 2.5rem);
`

export const PTextFooter = styled.p`
    height: auto;
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    line-height: 1.5;
`

export const LinkMail = styled.span`
    color: blue;
`

export const SpanName = styled.span`
    font-size: clamp(0.7rem, 2vw, 1.2rem);
    background-color: rgb(70,70,70);
    color: white;
    padding: 2px 5px;
    border-radius: 10px;
    white-space: nowrap;
`

export const SpanAncorWhatsapp = styled.span<{$cursor?: string}>`
    padding: 0 10px;
    font-size: clamp(1rem, 2vw, 1.3rem);
    cursor: ${({ $cursor }) => $cursor};
`