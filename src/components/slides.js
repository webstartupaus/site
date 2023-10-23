import { useRef } from "react";
import { Icon } from "./icons";

const Slides = ({ images }) => {
    const index = useRef(0);

    if (!images) return;

    function slide(e) {
        let direction = e.currentTarget.dataset.dir;
        if (!direction || (direction !== 'left' && direction !== 'right')) return;

        let slides = e.currentTarget.parentNode.nextSibling.childNodes;
        let current = index.current;

        slides[current].classList.add(direction);
        slides[current].classList.remove('active');

        if (direction === 'left') {
            index.current = index.current === 0 ? slides.length - 1 : index.current - 1;
        }
        if (direction === 'right') {
            index.current = index.current === slides.length - 1 ? 0 : index.current + 1;
        }

        slides[index.current].classList.add('active');

        setTimeout(() => {
            slides[current].classList.remove(direction);
        }, 350);
    }

    return (
        <div className="slides">
            <Controls onSlide={slide} on={images.length === 1 ? false : true} />
            <div className="images">
                {images.map((image, i) => <Images image={image} loading='lazy' index={index} key={`image-${i}`} />)}
            </div>
        </div>
    )
}

const Controls = ({ onSlide, on }) => {
    if (!on) return;

    return (
        <div className="controls">
            <button data-dir="left" onClick={onSlide}>{Icon.chevronLeft}</button>
            <button data-dir="right" onClick={onSlide}>{Icon.chevronRight}</button>
        </div>
    );
}

const Images = ({ image, index }) => {
    let alt = image.split('.');

    return (
        <div className={`slide${index === 0 ? ' active' : ''}`}>
            <figure>
                <img src={`/images/posts/${image}.jpg`} alt={alt[0]} />
            </figure>
        </div>
    );
}

export default Slides;