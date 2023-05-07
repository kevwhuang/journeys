import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './layouts/Navbar.tsx';

import Error from './pages/Error.tsx';
import Home from './pages/Home.tsx';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/keyframes.scss';
import './styles/media.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
