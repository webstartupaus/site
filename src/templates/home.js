import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from '../components/footer';
import Section from "../components/sections";

import { homeSections } from "../data/homeSections";
import { useEffect } from "react";

const Home = () => {
    const params = useParams();
    const navigate = useNavigate();

    const sections = ['intro', 'work', 'projects', 'about', 'contact'];
    const isSection = sections.indexOf(params.section) !== -1;

    useEffect(() => {
        document.title = 'Josh Winkler Portfolio';

        if (params.id && !isSection) {
            navigate('/');
        }
        else if (isSection) {
            window.scrollTo({
                top: document.getElementById(params.section).offsetTop,
                behavior: "smooth"
            });
        }
        else {
            window.scrollTo({
                top: document.getElementById('toTop').offsetTop,
                behavior: "smooth"
            });
        }
    }, [navigate, isSection, params]);

    return (
        <>
            <Header scroll={true} />
            <main>
                {sections.map((id, i) => <Section id={id} content={homeSections} key={`section-${i}`} />)}
            </main>
            <Footer />
        </>
    );
}

export default Home;