import { useParams, useNavigate } from "react-router-dom";

const ScrollLink = ({ link = '/', text, highlight = null, css = '', isScroll = true, onMenu }) => {
    const params = useParams();
    const navigate = useNavigate();

    
    function scroll(e) {
        e.preventDefault();
        
        if (isScroll) {
            // if redirected from page, remove section from URL
            if (params.section) window.history.pushState(null, 'J Portfolio', 'http://localhost:3000');

            // remove active links
            let activeLink = document.querySelector('nav .active');
            if (activeLink) activeLink.classList.remove('active');

            // set current link to active
            e.currentTarget.classList.add('active');

            // scroll to location
            window.scrollTo({
                top: document.getElementById(link).offsetTop,
                behavior: "smooth"
            });

            return;
        }

        // else navigate to page
        navigate(e.currentTarget.pathname);
        return;
    }

    // set style
    let isHighlighted = highlight && params.cat && highlight === params.cat;
    isHighlighted = isHighlighted ?? (params.section && params.section === link);
    let style = isHighlighted ? 'active' : '';
    style = `${css} ${style}`;

    return (
        <a href={`/${link}`} className={style} onClick={e => { scroll(e); onMenu(); }
        }>{text}</a>
    );
}

export default ScrollLink;