import { useEffect, useState } from "react";
import { DivDefault, DivMobile, DivNavBar, DivOptions, HeaderDiv, List, ListDiv, ListItem, NavBarDetails, NavBarHamburger, Title } from "./Header.style";
import { Link } from 'react-scroll';
import { AnimatePresence } from "framer-motion";

const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Valor rolagem da barra
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuMobile = () => {
        if (openMenuMobile) {
            setOpenMenuMobile(false)
        } else {
            setOpenMenuMobile(true)
        }
    }

    return (
        <>
            <HeaderDiv $scrolled={scrolled}>
                <DivDefault>
                    <Title>{`<Daniel />`}</Title>

                    {/* Menu Padrão */}
                    <ListDiv>
                        <List>
                            <ListItem>
                                <Link
                                    to="Resume"
                                    smooth={true}
                                    duration={500}
                                >
                                    Sobre Mim
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    to="Projects"
                                    smooth={true}
                                    duration={500}
                                >
                                    Projetos
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    to="Skills"
                                    smooth={true}
                                    duration={500}
                                >
                                    Habilidades
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    to="Contact"
                                    smooth={true}
                                    duration={500}
                                >
                                    Contato
                                </Link>
                            </ListItem>
                        </List>
                    </ListDiv>
                </DivDefault>

                <DivMobile>
                    <DivNavBar>
                        <Title>{`<Daniel />`}</Title>

                        {/* Menu Hamburger */}
                        <NavBarHamburger onClick={handleMenuMobile}>
                            <NavBarDetails />
                            <NavBarDetails />
                            <NavBarDetails />
                        </NavBarHamburger>
                    </DivNavBar>
                </DivMobile>
            </HeaderDiv>
            <AnimatePresence>
                {
                    openMenuMobile && (
                        <DivOptions
                            $scrolled={scrolled}
                            initial={{ x: 1000 }}
                            animate={{ x: 0 }}
                            exit={{ x: 1000 }} // Ajuste para sair de baixo para cima
                            transition={{ duration: 0.5 }} // Tempo da animação
                        >
                            <ListDiv>
                                <List>
                                    <ListItem>
                                        <Link
                                            onClick={handleMenuMobile}
                                            to="Resume"
                                            smooth={true}
                                            duration={500}
                                        >
                                            Sobre Mim
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link
                                            onClick={handleMenuMobile}
                                            to="Projects"
                                            smooth={true}
                                            duration={500}
                                        >
                                            Projetos
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link
                                            onClick={handleMenuMobile}
                                            to="Skills"
                                            smooth={true}
                                            duration={500}
                                        >
                                            Habilidades
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link
                                            onClick={handleMenuMobile}
                                            to="Contact"
                                            smooth={true}
                                            duration={500}
                                        >
                                            Contato
                                        </Link>
                                    </ListItem>
                                </List>
                            </ListDiv>
                        </DivOptions>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Header;