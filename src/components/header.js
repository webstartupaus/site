import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import ScrollLink from './scrollLink';
import { Icon } from "../assets/icons";

const Header = ({ scroll }) => {
    const [isOpen, setOpen] = useState(false);

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const menu = [{ text: 'work', id: 'work' }, { text: 'projects', id: 'project' }, { text: 'about' }, { text: 'contact' }];

    function toggleMenu(e) {
        if (!isMobile) return;
        document.querySelector('body').classList.toggle('hide');
        document.querySelector('#header').classList.toggle('active');
        setOpen(isOpen ? false : true);
    }

    function closeMenu(e) {
        if (!isMobile) return;
        document.querySelector('body').classList.remove('hide');
        document.querySelector('#header').classList.remove('active');
        setOpen(false);
    }

    function dark(e) {
        document.querySelector('body').classList.toggle('dark');
        if (e) localStorage.setItem('dark', e.currentTarget.checked);
    }

    return (
        <>
            <div id="toTop"></div>

            <header id='header'>
                <h1><ScrollLink isScroll={scroll} target='toTop' onMenu={closeMenu}><span className='highlight'>josh</span>winkler</ScrollLink></h1>
                <Toggle onClick={dark} id='dark' />
                <nav>
                    {menu.map(
                        (item, i) =>
                            <ScrollLink
                                link={`/${item.text}`}
                                target={item.text}
                                highlight={item.id}
                                isScroll={scroll}
                                onMenu={toggleMenu}
                                key={`link-${i}`}
                            >{item.text}</ScrollLink>
                    )}
                </nav>
                <button className='mobile-menu' onClick={toggleMenu}>{!isOpen ? Icon.bars : Icon.close}</button>
            </header>

            <ScrollLink
                target='toTop'
                css='backUp'
                onMenu={closeMenu}
            >{Icon.chevronUp}</ScrollLink>
        </>
    );
}

export default Header;


const Toggle = ({ onClick, id }) => {
    return (
        <div className='toggle'>
            <input type="checkbox" id={id} onClick={onClick}></input>
            <div className='bg'></div>
            <div className='icons'>
                {Icon.sun}
                {Icon.moon}
            </div>
            <div className='circle'></div>
            <label htmlFor={id}></label>
        </div>
    );
}