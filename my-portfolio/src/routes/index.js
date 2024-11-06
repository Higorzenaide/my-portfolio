import React from "react";
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/';
import HeroHome from '../components/HeroImgHome';
import Initial from '../pages/Initial/';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Footer from "../components/Footer";
import HeroProjects from "../components/HeroImgProjects";

const Layout = () => {
    const location = useLocation();

    // Verifica se a rota atual é uma das rotas em que queremos exibir o HeroImg
    const showHeroHome = ["/"].includes(location.pathname);
    const showHeroProject = ['/projects','/contact','/about'].includes(location.pathname);

    const heroTexts = {
        "/projects": { title: "PROJECTS.", subtitle: "My projects" },    
        "/contact": { title: "CONTACT.", subtitle: "talk of me" },
        "/about": { title: "ABOUT.", subtitle: "I'm a programming student and this is my website" }
    };

    return (
        <div className="layout">
            <Header />
            {showHeroHome && <HeroHome/>}

            {showHeroProject && (
                <HeroProjects 
                    title={heroTexts[location.pathname]?.title} 
                    subtitle={heroTexts[location.pathname]?.subtitle} 
                />
            )}

            <main className="content">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Initial />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

export { router };
