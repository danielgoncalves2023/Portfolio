import { FaCode, FaHeart, FaReact } from "react-icons/fa";
import { FooterContainer, Title, LinkMail, PTextFooter, SpanName, SpanAncorWhatsapp } from "./Footer.style";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {

    return (
        <FooterContainer id="Contact">
            <Title>Entre em contato</Title>
            <PTextFooter>Atualmente estou a procura de uma oportunidade na área de Desenvolvimento. Se você conhece alguma vaga disponível,
                possui alguma dúvida, ou apenas quer dizer um "Hello World", por favor envie um email para <LinkMail>daniel.tekla123@gmail.com</LinkMail>.
            </PTextFooter>

            <PTextFooter>Ou, clique aqui 
                <SpanAncorWhatsapp $cursor={'pointer'}>
                    <a href="https://wa.me/5511958927740" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp />
                    </a>
                </SpanAncorWhatsapp>
            </PTextFooter>

            <PTextFooter> <FaCode /> com <span><FaHeart /></span> por <SpanName>Daniel Gonçalves dos Santos</SpanName> usando <span><FaReact /></span>
            </PTextFooter>
        </FooterContainer>
    )
}

export default Footer;