import Posts from "../components/posts";
import Form from "../components/form";
import { Icon } from "../assets/icons";

import { skills } from "./skills";
import { Projects } from '../data/projects';
import { Work } from '../data/work';

export const homeSections = {
    intro: {
        container: 'narrow large-text',
        title: false,
        fn: () => {
            return (
                <>
                    <p>Hi, I'm Josh,</p>
                    <p>I am a <strong><span className="highlight">web developer</span></strong> currently situated in the suburbs of Sydney, Australia. I love problem solving and learning, working with various web technologies to make things usable and functional.</p>
                </>
            );
        }
    },
    projects: {
        container: 'narrow',
        title: 'Projects',
        fn: () => {
            return (
                <>
                    <Posts posts={Projects} />
                </>
            );
        }
    },
    work: {
        container: 'narrow',
        title: 'Work',
        fn: () => {
            return (
                <>
                    <Posts posts={Work} />
                    <div className='flex-center'>
                        <a href="/web-resume.pdf" target="_blank">PDF Resume</a>
                    </div>
                </>
            );
        }
    },
    about: {
        container: 'narrow',
        title: 'About',
        fn: () => {
            let skillsList = Object.keys(skills);

            return (
                <>
                    <p>Born in Bristol, England, I moved to Australia in 2006 with my family of 6. I have always had an interest in technology, with that interest becoming more specific over time.</p>
                    <p>My first "website" was made in PowerPoint for school; we were tasked with creating a hypothetical informational PowerPoint for display in the foyer.I made mine with the basic principles of a website, with slides as pages, a home page, links to different areas with relevant information and, as it was the early thousands, the odd few sound effects, gifs and clipart.</p>
                    <p className="icons bean">{Icon.bean}</p>
                    <p>Through school and beyond, I continued to learn things like what are HTML and CSS. In 2014, I had a short job where I learnt about databases which left me with a problem; I understood the front end and had an idea of how databases work, but how to connect the two?</p>
                    <p>In 2015, after years of self-taught learning, I took a 6-month diploma course in web development to fill that gap. It taught me web programming and SQL, bringing me to a point where I could cover all ends of building a website. Since, I have continued to learn and grow in design, front-end and back-end skills.</p>
                    <h3>Skills</h3>
                    <div className="skills">
                        {skillsList.map((skill, i) => {
                            return (
                                <div key={i}>
                                    <h3>{skill}</h3>
                                    <ul>
                                        {skills[skill].map((skill, i) => <li key={i}>{skill}</li>)}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </>
            );
        }
    },
    contact: {
        container: 'narrow',
        title: 'Contact',
        fn: () => {
            function email(e) {
                e.preventDefault();
                let email = 'w|e|b|s|t|a|r|t|u|p|a|u@|g|m|a|i|l|.|c|o|m';
                window.location.href = 'mailto:' + email.replaceAll('|', '');
            }

            const inputs = [
                { tag: 'input', type: 'text', name: 'name', required: true, pattern: false },
                { tag: 'input', type: 'email', name: 'email', required: true, pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g },
                { tag: 'textarea', type: null, name: 'message', required: false, pattern: false },
                { tag: 'hidden', name: 'form-name', value: 'hello' }
            ]

            return (
                <>
                    <Form button='send' inputs={inputs} name='hello' />

                    <p className="icons"><a href="https://www.linkedin.com/in/josh-winkler-17703b86/" rel='noreferrer'>{Icon.linkedin}</a> <a href="https://github.com/webstartupaus" rel='noreferrer'>{Icon.github}</a> <button className="link" onClick={email}>{Icon.email}</button></p>
                </>
            );
        }
    }
}