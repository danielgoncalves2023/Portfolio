import { useEffect, useState } from "react";
import { Ancor, ButtonMoreAboutMe, Cursor, DivSocials, LISocials, MainContainer, SubTitle, TitleMain, ULSocials } from "./Main.style";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

const Main = () => {
    const [text, setText] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const fullTextSubtitle = "Programando o futuro, uma linha de cada vez.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullTextSubtitle.slice(0, index));
            index++;
            if (index > fullTextSubtitle.length) {
                clearInterval(interval);
                setIsFinished(true); // Marca como terminado
            }
        }, 100); // Velocidade de digitação

        return () => clearInterval(interval);
    }, []);

    // Animação do gradiente background
    const gradientVariantsMain = {
        animate: {
            background: [
                "linear-gradient(90deg, #6a82fb, #fc5c7d)", // Início
                "linear-gradient(90deg, #36d1dc, #5b86e5)", // Meio
                "linear-gradient(90deg, #ff6f61, #ffb347)", // Final ao Início
                "linear-gradient(90deg, #6a82fb, #fc5c7d)"  // Volta
            ],
            transition: {
                duration: 10,
                ease: "linear",
                repeat: Infinity,
            },
        },
    };

    // Animação do cursor piscante
    const cursorVariants: any = {
        animate: {
            opacity: 0, // Alterna entre visível e invisível
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse", // Faz o ciclo de ida e volta
            },
        },
    };

    return (
        <MainContainer variants={gradientVariantsMain} animate="animate">

            {/* Título */}
            <div>
                <TitleMain>
                    Daniel Gonçalves dos Santos
                </TitleMain>
            </div>

            {/* Subtitulo */}
            <div>
                <SubTitle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {text}
                    {isFinished && (
                        <Cursor
                            variants={cursorVariants}
                            animate="animate"
                        />
                    )
                    }
                </SubTitle>
            </div>

            {/* Rede Sociais */}
            <DivSocials>
                <ULSocials>
                    <LISocials>
                        <Ancor href={'https://www.facebook.com/danielgoncalvesdossantos2012/'} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={40} />
                        </Ancor>
                    </LISocials>
                    <LISocials>
                        <Ancor href={'https://github.com/danielgoncalves2023/'} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={40} />
                        </Ancor>
                    </LISocials>
                    <LISocials>
                        <Ancor href={'https://www.instagram.com/daniel59253/'} target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={40} />
                        </Ancor>
                    </LISocials>
                    <LISocials>
                        <Ancor href={'https://www.facebook.com/danielgoncalvesdossantos2012/'} target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={40} />
                        </Ancor>
                    </LISocials>
                </ULSocials>
            </DivSocials>

            <div>
                <ButtonMoreAboutMe>
                    <Link
                        to="Resume"
                        smooth={true}
                        duration={500}
                    >
                        Mais sobre mim
                    </Link>
                </ButtonMoreAboutMe>
            </div>
        </MainContainer>
    )
}

export default Main;