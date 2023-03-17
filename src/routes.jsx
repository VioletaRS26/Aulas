import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemplo2 from './pages/Exemplo2';

const routes = [
    { path: '/HomePage', element: <HomePage /> },
    { path: '/login', element: <LoginPage />},
    { path: '/Exemplo2', element: <Exemplo2 />},
];
export default routes;