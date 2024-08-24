import {
    AboutMeContainer,
    AboutMePhoto,
    AboutMeDetailSection,
    AboutMeTitle,
    AboutMeText,
    AboutMePhotoSection,
    ButtonMore,
    ButtonDiv,
    AncorDownload
} from "./AboutMe.style";

const AboutMe = () => {

    return (
        <AboutMeContainer id="Resume">

            {/* Foto - Sobre Mim */}
            <AboutMePhotoSection>
                <AboutMePhoto src="/assets/images/perfil-sobremim.png" alt="Daniel Gonçalves" />
            </AboutMePhotoSection>

            {/* Text - Sobre Mim */}
            <AboutMeDetailSection>
                <AboutMeTitle>
                    Sobre Mim
                </AboutMeTitle>
                <AboutMeText>
                    Meu nome é Daniel Gonçalves dos Santos. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas
                    na Descomplica Faculdade Digital, com previsão de conclusão em 2025. Tenho formação em Administração de
                    Empresas e uma sólida experiência em operações aeroportuárias. Sou apaixonado por tecnologia e estou em
                    transição para a área de desenvolvimento de software, buscando aplicar minhas habilidades em projetos que
                    unam eficiência e inovação. Nos meus momentos livres, gosto de explorar novas tecnologias e aprimorar meus
                    conhecimentos em programação.
                </AboutMeText>
                <ButtonDiv>
                    <ButtonMore>
                        <AncorDownload href="/assets/docs/CV Daniel Goncalves.pdf" download>
                            Resumo
                        </AncorDownload>
                    </ButtonMore>
                </ButtonDiv>
            </AboutMeDetailSection>
        </AboutMeContainer>
    )
}

export default AboutMe;