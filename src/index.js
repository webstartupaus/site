import { createRoot } from 'react-dom/client'
import App from './app';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.querySelector('#root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);