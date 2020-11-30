import React from 'react';
import HomePage from '../pages/HomePage/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        name: '關於我們',
        path: '/about',
        component: AboutPage,
        exact: true,
    },
];
