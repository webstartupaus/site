import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from '../components/footer';
import Slides from '../components/slides';

import { Projects } from '../data/projects';
import { Work } from '../data/work';

const Post = () => {
    const params = useParams();
    const navigate = useNavigate();

    let content = params.cat === 'work' ? Work : (params.cat === 'project' ? Projects : null);
    let article = content.articles[params.post];

    useEffect(() => {
        if (!content || article === undefined) navigate('/');
        document.title = `${article.name} | JW`;
        console.log('scroll');
        window.scrollTo({
            top: document.getElementById('toTop').offsetTop,
            behavior: "smooth"
        });
    });

    return (
        <>
            <Header scroll={false} />
            <main className="article">
                <section className="head">
                    <h2>{article.name}</h2>
                    <p>{article.tech.map((t, i) => <Tech tech={t} key={`tech-${i}`} />)}</p>
                    {article.images ? <div className="slide-container"><Slides images={article.images} /></div> : ''}
                </section>
                {!article.body() ? '' : <section className="content">
                    <div className="narrow">
                        {article.body()}
                    </div>
                </section> }
            </main>
            <Footer />
        </>
    );
}

export default Post;

const Tech = ({ tech }) => {
    return (
        <span>
            {`//${tech}`}&nbsp;
        </span>
    );
}