import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/hero-stars.css';
import WaveDivider from '../components/ui/WaveDivider';

const Portfolio = () => {
    const projects = [
        {
            title: "Advocacia Silva & Barros",
            category: "Autoridade Digital",
            tags: ["Design Premium", "SEO"],
            description: "Posicionamento online focado em atrair clientes high-ticket.",
            metricTitle: "Leads Qualificados",
            metricValue: "+40%",
            color: "from-blue-600 to-slate-900",
            image: "AS",
            bentoClass: "lg:col-span-2 lg:row-span-2 h-[450px] md:h-auto"
        },
        {
            title: "EcoStore Brasil",
            category: "E-commerce",
            tags: ["Alta Conversão"],
            description: "Checkout otimizado e redução drástica de abandono de carrinho.",
            metricTitle: "Aumento de Vendas",
            metricValue: "+65%",
            color: "from-yellow-500 to-amber-900",
            image: "EB",
            bentoClass: "lg:col-span-1 lg:row-span-1 h-[280px]"
        },
        {
            title: "Dr. André Health",
            category: "Health-Tech",
            tags: ["Agendamento"],
            description: "Automação de consultas e lembretes integrados via WhatsApp.",
            metricTitle: "Redução de Faltas",
            metricValue: "-30%",
            color: "from-blue-400 to-cyan-900",
            image: "AH",
            bentoClass: "lg:col-span-1 lg:row-span-1 h-[280px]"
        },
        {
            title: "Fintech Nexus",
            category: "App Landing",
            tags: ["Lançamento", "UX"],
            description: "Página de alta conversão estruturada para maximizar o número de downloads no lançamento do App.",
            metricTitle: "Downloads Gerados",
            metricValue: "10k+",
            color: "from-blue-600 to-indigo-900",
            image: "FN",
            bentoClass: "lg:col-span-3 lg:row-span-1 h-[300px]"
        }
    ];

    const [previewProject, setPreviewProject] = useState(projects[0]);

    return (
        <section id="portfolio" className="py-24 bg-[#f8fafc] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Stars Effect (Only Visible in Dark Mode) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300">
                <div className="star-background">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left mb-16 px-4 md:px-0 max-w-3xl">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Resultados Comprovados</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
                            Investimentos que <span className="text-primary">Retornam</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-gray-300">
                            Não mostramos apenas sites bonitos. Apresentamos cases de negócios reais onde nossa engenharia e design geraram escala, eficiência e lucro.
                        </p>
                    </div>
                </div>

                {/* ---------- NEW BENTO GRID PORTFOLIO ---------- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto auto-rows-min">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`${project.bentoClass} w-full group relative rounded-3xl overflow-hidden cursor-pointer border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f172a] shadow-lg hover:shadow-2xl transition-all duration-500`}
                        >
                            {/* Glassmorphism Background Color */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-multiply dark:mix-blend-screen pointer-events-none group-hover:scale-110 transition-transform duration-700`}></div>

                            {/* Dark Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-0"></div>

                            {/* Content Grid */}
                            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                                {/* Top Badges */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                                    <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-white border border-white/20 shadow-lg">
                                        {project.category}
                                    </span>
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white font-display font-bold text-xl shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        {project.image}
                                    </div>
                                </div>

                                {/* Default Content (Fades out / Moves up on hover) */}
                                <div className="transform group-hover:-translate-y-8 transition-transform duration-500 ease-out flex-1 flex flex-col justify-end">
                                    <h3 className="text-3xl font-display font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 flex-wrap mb-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-sm font-medium text-gray-300">#{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Reveal Metrics Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-black/60 backdrop-blur-md border-t border-white/10 flex flex-col justify-center">
                                    <p className="text-gray-300 text-sm mb-4 hidden md:block">{project.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">{project.metricTitle}</p>
                                            <p className="text-3xl font-display font-bold text-white">{project.metricValue}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                            <span className="material-icons">arrow_forward</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Portfolio;
