import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from '../components/footer';
import Section from "../components/sections";

import helper from "../assets/helper";

import { homeSections } from "../data/homeSections";

const Home = () => {
    const params = useParams();
    const navigate = useNavigate();

    const sections = ['intro', 'work', 'projects', 'about', 'contact'];
    const isSection = sections.indexOf(params.section) !== -1;

    useEffect(() => {
        let meta = {
            title: 'Josh Winkler | Web Developer',
            description: 'A portfolio website showcasing some of my work and experience over the last 8 years of professional web development.'
        }

        helper.seo(meta);

        if (params.id && !isSection) {
            navigate('/');
        }
        else {
            window.scrollTo({
                top: document.getElementById(isSection ? params.section : 'toTop').offsetTop,
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