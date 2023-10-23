import { Link } from 'react-router-dom';
import Slides from './slides';

const Posts = ({ posts }) => {
    if (!posts) return;

    const articles = Object.keys(posts.articles);

    return (
        <>
            {articles.map((article, i) =>
                <Post className='' cat={posts.cat} post={{ ...posts.articles[article] }} key={`article-${i}`} />
            )}
        </>
    );
}

export default Posts;

const Post = ({ cat, post: { name, slug, business, tech, summary, images, body } }) => {
    return (
        <div className='post'>
            <div className='details'>
                <Link to={`/${cat}/${slug}`} className='read-more'>
                    <h3>
                        {name}
                        {business ? <><br /><span>for {business}</span></> : ''}
                    </h3>
                </Link>
                <div className='tech-list'>
                    {tech.map((t, i) => <Tech tech={t} key={`tech-${i}`} />)}
                </div>
                <p className='summary'>{summary}</p>
                
                {body() ? <Link to={`/${cat}/${slug}`} className='read-more'>read more</Link> : ''}
            </div>

            <Slides images={images} />
        </div>
    );
}

const Tech = ({ tech }) => {
    return (
        <span>
            {`//${tech}`}&nbsp;
        </span>
    );
}