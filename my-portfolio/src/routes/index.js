import React from "react";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Header from '../components/Header/'
import Inital from '../pages/Initial/'


const Layout = () => {
    return (
        <>
            <Header/>
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
        ],

    },

]);


export { router }