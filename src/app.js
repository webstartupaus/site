import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './main.min.css';

import Home from './templates/home';
import Post from './templates/post';

const App = () => {
    
    //dark mode
    useEffect(() => {
        const isDark = localStorage.getItem('dark');
        let dark;

        // if dark mode has been set manually
        if (isDark) {
            document.querySelector('#dark').checked = isDark;
            dark = isDark === 'true';
        }
        // set dark mode
        else {
            const d = new Date();
            dark = d.getHours() < 6 || d.getHours() > 18;
            localStorage.setItem('dark', dark);
        }
        document.querySelector('#dark').checked = dark;
        if (dark) document.querySelector('body').classList.add('dark');
        else document.querySelector('body').classList.remove('dark');
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:section" element={<Home />} />
                <Route path="/:cat/:post" element={<Post />} />
            </Routes>
        </>
    );
}

export default App;