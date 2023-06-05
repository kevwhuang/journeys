import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { SWRConfig } from 'swr';

import Display from './layouts/Display';

import About from './pages/About';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Home from './pages/Home';
import Map from './pages/Map';
import Pins from './pages/Pins';
import Pins_Single from './pages/Pins_Single';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';
import Profile_Single from './pages/Profile_Single';
import Rankings from './pages/Rankings';
import Terms from './pages/Terms';

import Error from './pages/status/Error';
import Fallback from './pages/status/Fallback';
import NotFound from './pages/status/NotFound';

import './features/secret';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/keyframes.scss';
import './styles/media.scss';
import './styles/dev.scss';

const config: Config = {
    refreshInterval: 3600e3,
};

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Display />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="error" element={<Error />} />
        <Route path="fallback" element={<Fallback />} />
        <Route path="guide" element={<Guide />} />
        <Route path="map" element={<Map />} />
        <Route path="pins" element={<Pins />} />
        <Route path="pins/:id" element={<Pins_Single />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:id" element={<Profile_Single />} />
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
