import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import logoPeacock from '../../assets/logo-locytech-dark.png';
import { useTheme } from '../../hooks/useTheme';
import '../../styles/logo-animation.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3 }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-[#020617]/90 backdrop-blur-xl shadow-md border-b border-gray-200/50 dark:border-white/5 py-2 md:py-3' : ''}`}>
            <div className="max-w-7xl mx-auto py-2 px-0 bg-transparent">
                <div className="flex justify-between items-center">
                        <a href="#hero" className="flex items-center gap-3">
                            <img src={logoPeacock} alt="LocyTech Logo" className="h-10 w-auto object-contain" />
                            <div className="text-2xl font-bold">
                                Locy<span className="text-primary">Tech</span>
                            </div>
                        </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Início', 'Sobre Nós', 'Serviços', 'Processo'].map((item, index) => {
                            const href = item === 'Início' ? '/#hero' :
                                item === 'Sobre Nós' ? '/#about' :
                                    item === 'Serviços' ? '/#services' :
                                        '/#process';
                            return (
                                <a
                                    key={index}
                                    href={href}
                                    className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors relative group font-sans"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            );
                        })}

                        {/* Theme Toggle Desktop */}
                        <button
                            onClick={toggleTheme}
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-yellow-400 hover:text-yellow-300 border border-white/5"
                            aria-label="Alternar tema"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} className="text-blue-300" />}
                        </button>

                        <a
                            href="/#contact"
                            className="bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary text-sm font-bold py-2.5 px-6 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(13,185,242,0.3)]"
                        >
                            Pedir Orçamento
                        </a>
                    </nav>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-4">
                        {/* Theme Toggle Mobile */}
                        <button
                            onClick={toggleTheme}
                            className="z-50 bg-black/20 p-2 rounded-full text-yellow-400 border border-white/10 backdrop-blur-md"
                            aria-label="Alternar tema"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} className="text-blue-300" />}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="z-50 p-2 text-gray-900 dark:text-white focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center z-40"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {['Início', 'Sobre Nós', 'Serviços', 'Processo'].map((item, index) => {
                                const href = item === 'Início' ? '/#hero' :
                                    item === 'Sobre Nós' ? '/#about' :
                                        item === 'Serviços' ? '/#services' :
                                            '/#process';
                                return (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        className="text-2xl font-light text-white hover:text-primary transition-colors font-display"
                                        onClick={() => setIsMenuOpen(false)}
                                        variants={itemVariants}
                                    >
                                        {item}
                                    </motion.a>
                                );
                            })}
                            <motion.a
                                href="/#contact"
                                className="nav-btn-mobile mt-4 px-8 py-3 rounded-lg text-lg bg-primary text-black font-bold"
                                onClick={() => setIsMenuOpen(false)}
                                variants={itemVariants}
                            >
                                Pedir Orçamento
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
