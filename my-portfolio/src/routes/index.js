import React from "react";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Header from '../components/Header/';
import HeroImg from '../components/HeroImg'
import Inital from '../pages/Initial/';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";


const Layout = () => {
    return (
        <>
            <Header/>
            <HeroImg/>
            <Outlet/>
        </>
    )
}


const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element:<Inital/>,
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/projects',
                element:<Projects/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ],

    },

]);


export { router }