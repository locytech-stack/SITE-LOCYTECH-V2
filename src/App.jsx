import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import { ThemeProvider } from './hooks/useTheme';

import Hero from './features/Hero';
const About = lazy(() => import('./features/About'));
const Services = lazy(() => import('./features/Services'));
const Pricing = lazy(() => import('./features/Pricing'));
const Portfolio = lazy(() => import('./features/Portfolio'));
const Contact = lazy(() => import('./features/Contact'));
const Privacy = lazy(() => import('./features/Privacy'));
const Terms = lazy(() => import('./features/Terms'));
// Pricing removida — trabalhamos apenas com orçamentos personalizados

// Loading component
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-transparent text-primary">
        <div className="w-10 h-10 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <Router>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={
                                    <>
                                        <Hero />
                                        <About />
                                        <Services />
                                        <Portfolio />
                                        <Contact />
                                    </>
                                } />
                                <Route path="privacidade" element={<Privacy />} />
                                <Route path="termos" element={<Terms />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
