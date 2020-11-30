import React from 'react';

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"HomePage"*/ /*webpackMode:"lazy"*/ '../pages/HomePage/HomePage'
            )
        ),
        exact: true,
    },
    {
        name: '關於我們',
        path: '/about',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"AboutPage"*/ /*webpackMode:"lazy"*/ '../pages/AboutPage/AboutPage'
            )
        ),
        exact: true,
    },
    {
        name: '產品項目',
        path: '/product',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"ProductPage"*/ /*webpackMode:"lazy"*/ '../pages/ProductPage/ProductPage'
            )
        ),
        exact: true,
    },
    {
        name: '找不到此頁面',
        path: '*',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"404"*/ /*webpackMode:"lazy"*/ '../pages/NotMatchPage/NotMatchPage'
                )
        ),
    },
];
