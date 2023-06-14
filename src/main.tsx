import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { SWRConfig } from 'swr';

import Display from './layouts/Display';

import About from './pages/About';
import Account from './pages/Account';
import Account_Single from './pages/Account_Single';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Map from './pages/Map';
import Pins from './pages/Pins';
import Pins_Single from './pages/Pins_Single';
import Privacy from './pages/Privacy';
import Rankings from './pages/Rankings';
import Terms from './pages/Terms';

import Error from './pages/statuses/Error';
import Fallback from './pages/statuses/Fallback';
import NotFound from './pages/statuses/NotFound';

import './features/keyboard';
import './features/secret';
import './features/speech';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/keyframes.scss';
import './styles/media.scss';
import './styles/dev.scss';

const config: { refreshInterval: number } = {
    refreshInterval: 3600e3,
};

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="" element={<Display />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="account">
            <Route path="" element={<Account />} />
            <Route path=":id" element={<Account_Single />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="error" element={<Error />} />
        <Route path="fallback" element={<Fallback />} />
        <Route path="guide" element={<Guide />} />
        <Route path="home" element={<Navigate to="/" replace={true} />} />
        <Route path="map" element={<Map />} />
        <Route path="pins">
            <Route path="" element={<Pins />} />
            <Route path=":id" element={<Pins_Single />} />
        </Route>
        <Route path="privacy" element={<Privacy />} />
        <Route path="rankings" element={<Rankings />} />
        <Route path="terms" element={<Terms />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig value={config}>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </SWRConfig>
    </React.StrictMode>
);
