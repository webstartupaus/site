import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from '../components/footer';
import Section from "../components/sections";

import { homeSections } from "../data/homeSections";
import { useEffect } from "react";

let sectionTops = {};
let timeout;

function getSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionTops[section.offsetTop] = section.id;
    });
    console.log(sectionTops);
    console.log('href', document.querySelector('nav a[href="work"]'));
}

window.addEventListener('load', () => getSections());

window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        getSections()
    }, 100);
});

window.addEventListener('scroll', (e) => {
    let tops = Object.keys(sectionTops);
    let top = e.target.scrollingElement.scrollTop;
    console.log('top: ', top, tops.indexOf(top));
    tops.forEach(key => {

    })
    // if (keys.indexOf(top) !== -1) console.log('scroll');
});

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