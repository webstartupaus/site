import Posts from "../components/posts";
import Form from "../components/form";
import Input from "../components/input";

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
                    <p>
                        Born in Bristol, England, I moved to Australia in 2006 with my family of 6. I have always had an interest in technology, with that interest becoming more specific over time.
                    </p>
                    <p>
                        My first "website" was made in PowerPoint, we were tasked with creating a hypothetical PowerPoint for display in the school foyer. I made mine with the basic principles of a website, with a home page, links to different areas with relevant information and, as it was the early thousands, the odd sound few sound effects, gifs and clipart.
                    </p>
                    <p>
                        Through school and beyond, I continued to learn things like what are HTML and CSS. In 2014, I had a short job where I learnt a lot about databases. That left me with a problem; I understood the front end and had an idea of how databases work, but how to connect the two?
                    </p>
                    <p>
                        In 2015, after years of self-taught learning, I took a 6-month diploma course in web development to fill that gap. It taught me web programming and SQL, bringing me to a point where I could cover all ends of building a website. Since, I have continued to learn and grow in design, front-end and back-end skills.
                    </p>
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
        container: 'wide',
        title: 'Contact',
        fn: () => {
            function validate(e, pattern) {
                let input = e.currentTarget;
                let val = input.value;
                
                if (input.attributes.required && val.length <= 0) return e.currentTarget.classList.add('error');

                if (pattern && !val.match(pattern)) return e.currentTarget.classList.add('error');

                e.currentTarget.classList.remove('error');
            }

            return (
                <>
                    <Form>
                        <Input onValidate={validate} type='text' name='text' label='name' required={true} />
                        <Input onValidate={e => validate(e, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)} type='email' name='email' label='email' required={true} />
                        <Input onValidate={validate} type='textarea' name='message' label='message' required={false} />
                        <button type="submit">Send</button>
                    </Form>

                    <p>To contact me, you can find me on <a href="https://www.linkedin.com/in/josh-winkler-17703b86/" rel='noreferrer'>LinkedIn</a></p>
                </>
            );
        }
    }
}