import '@testing-library/jest-dom';
import {
    describe,
    expect,
    test,
} from 'vitest';
import {
    render,
    screen,
} from '@testing-library/react';

import Display from '../layouts/Display';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Guide from '../pages/Guide';
import Home from '../pages/Home';
import Map from '../pages/Map';
import Pins from '../pages/Pins';
import Pins_Single from '../pages/Pins_Single';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Profile from '../pages/Profile';
import Profile_Single from '../pages/Profile_Single';
import Rankings from '../pages/Rankings';
import TermsOfService from '../pages/TermsOfService';

import Error from '../pages/status/Error';
import Fallback from '../pages/status/Fallback';
import NotFound from '../pages/status/NotFound';

describe('Render', () => {
    screen.debug();

    describe('Layouts', () => {
        test('Display', () => {
            render(<Display />);
            expect(document.body).toBeInTheDocument();
        });
    });

    describe('Pages', () => {
        test('About', () => {
            render(<About />);
            expect(document.body).toBeInTheDocument();
        });

        test('Contact', () => {
            render(<Contact />);
            expect(document.body).toBeInTheDocument();
        });

        test('Guide', () => {
            render(<Guide />);
            expect(document.body).toBeInTheDocument();
        });

        test('Home', () => {
            render(<Home />);
            expect(document.body).toBeInTheDocument();
        });

        test('Map', () => {
            render(<Map />);
            expect(document.body).toBeInTheDocument();
        });

        test('Pins', () => {
            render(<Pins />);
            expect(document.body).toBeInTheDocument();
        });

        test('Pins_Single', () => {
            render(<Pins_Single />);
            expect(document.body).toBeInTheDocument();
        });

        test('PrivacyPolicy', () => {
            render(<PrivacyPolicy />);
            expect(document.body).toBeInTheDocument();
        });

        test('Profile', () => {
            render(<Profile />);
            expect(document.body).toBeInTheDocument();
        });

        test('Profile_Single', () => {
            render(<Profile_Single />);
            expect(document.body).toBeInTheDocument();
        });

        test('Rankings', () => {
            render(<Rankings />);
            expect(document.body).toBeInTheDocument();
        });

        test('TermsOfService', () => {
            render(<TermsOfService />);
            expect(document.body).toBeInTheDocument();
        });
    });

    describe('Status', () => {
        test('Error', () => {
            render(<Error />);
            expect(document.body).toBeInTheDocument();
        });

        test('Fallback', () => {
            render(<Fallback />);
            expect(document.body).toBeInTheDocument();
        });

        test('NotFound', () => {
            render(<NotFound />);
            expect(document.body).toBeInTheDocument();
        });
    });
});
