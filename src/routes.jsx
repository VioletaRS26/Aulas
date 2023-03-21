import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemplo2 from './pages/Exemplo2';
import Cronometro from './pages/Cronometro';
import FormuPage from './pages/FormuPage';

const routes = [
    { path: '/', element: <HomePage/> },
    { path: '/login', element: <LoginPage/>},
    { path: '/Exemplo2', element: <Exemplo2 />},
    { path: '/Cronometro', element: <Cronometro/>},
    { path: '/FormuP', element: <FormuPage />},
];
export default routes;