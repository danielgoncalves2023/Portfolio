import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import Main from "../components/Main/Main";
import Skills from "../components/Skills/Skills";
import { Projects } from "../components/Projects/Projects";

const Home = () => {

    return (
        <>
            <Header />
                <Main />
                <AboutMe />
                <Projects />
                <Skills />
            <Footer />
        </>
    )
}

export default Home;