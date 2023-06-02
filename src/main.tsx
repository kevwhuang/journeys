import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { SWRConfig } from 'swr';

import Navbar from './layouts/Navbar';

import Error from './pages/Error';
import Fallback from './pages/Fallback';
import Home from './pages/Home';
import Map from './pages/Map';
import NotFound from './pages/NotFound';
import Pins from './pages/Pins';
import Profile from './pages/Profile';
import Rankings from './pages/Rankings';

import './styles/rectify.scss';
import './styles/root.scss';
import './styles/main.scss';
import './styles/utilities.scss';
import './styles/keyframes.scss';
import './styles/media.scss';

const config: Config = {};

const router: any = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="map" element={<Map />} />
        <Route path="pins " element={<Pins />} >
            <Route path=":id" />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="rankings" element={<Rankings />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig value={config}>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
        </SWRConfig>
    </React.StrictMode>
);
