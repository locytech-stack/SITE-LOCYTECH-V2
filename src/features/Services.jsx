import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from '../components/ui/WaveDivider';

const Services = () => {
    const services = [
        {
            title: "Plataformas Institucionais",
            description: "Esqueça sites que funcionam apenas como panfletos virtuais. Posicionamos sua marca como autoridade indiscutível no seu nicho de mercado.",
            icon: "domain_verification",
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Páginas de Alta Conversão",
            description: "Tráfego caro sem resultado? Nossas Landing Pages são estruturadas para transformar visitantes em contatos e vendas — sem desperdício de orçamento.",
            icon: "rocket_launch",
            color: "from-blue-400 to-cyan-400"
        },
        {
            title: "E-commerce de Performance",
            description: "Carrinhos abandonados são vendas perdidas. Construímos lojas ultrarrápidas com checkouts otimizados focados em conversão e ticket médio.",
            icon: "shopping_cart_checkout",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Sistemas Sob Medida",
            description: "Processos manuais custam tempo e dinheiro. Desenvolvemos sistemas exclusivos que automatizam sua operação e escalam junto com o negócio.",
            icon: "memory",
            color: "from-blue-600 to-blue-400"
        }
    ];

    const certificates = [
        { text: "SSL Seguro", icon: "lock" },
        { text: "Parceiro Google", icon: "verified" },
        { text: "Proteção LGPD", icon: "verified_user" },
        { text: "Top Web Design RS", icon: "star" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="services" className="py-24 bg-[#fdfbf6] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            {/* Dot Grid Pattern (Hidden in Light Mode) */}
            <div className="absolute inset-0 opacity-0 dark:opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Subtle Gradient Spot */}
            <div className="absolute top-[10%] right-0 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none will-change-transform mix-blend-screen"></div>
            <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-yellow-100/30 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none will-change-transform mix-blend-screen"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Sua Máquina de Vendas</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue dark:text-white mb-6">
                        Engenharia de <span className="text-gradient-blue">Conversão</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Cada ecossistema que desenvolvemos é rigorosamente planejado com um único objetivo: maximizar o retorno do seu investimento digital.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white dark:bg-white/5 backdrop-blur-[16px] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50 dark:border-white/10 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                            <div className="w-14 h-14 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
                                <span className="material-icons text-3xl text-primary" aria-hidden="true">
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-darkblue dark:text-gray-100 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certificates Section Moved Here */}
                <div className="mt-20 pt-10 border-t border-gray-100 dark:border-white/5">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                        {certificates.map((cert, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 font-semibold group cursor-default">
                                <span className="material-icons text-2xl group-hover:text-primary transition-colors">{cert.icon}</span>
                                <span>{cert.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Services;
