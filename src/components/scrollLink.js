import { useParams, useNavigate } from "react-router-dom";

const ScrollLink = ({ link = '/', target ='', children, highlight = null, css = '', isScroll = true, onMenu }) => {
    const params = useParams();
    const navigate = useNavigate();
    
    function scroll(e) {
        e.preventDefault();
        
        if (isScroll) {
            // remove active links
            let activeLink = document.querySelector('nav .active');
            if (activeLink) activeLink.classList.remove('active');

            // add section to URL to keep place if refreshed
            if (target === 'toTop') {
                window.history.pushState(null, 'J Portfolio', `${process.env.REACT_APP_URL}`);
            }
            else {
                window.history.pushState(null, 'J Portfolio', `${process.env.REACT_APP_URL}${link}`);

                // set current link to active
                e.currentTarget.classList.add('active');               
            }

            // scroll to location
            window.scrollTo({
                top: document.getElementById(target).offsetTop,
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
        <a href={`${link}`} className={style} onClick={e => { scroll(e); onMenu(); }
        }>{children}</a>
    );
}

export default ScrollLink;