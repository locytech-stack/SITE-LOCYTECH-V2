import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import WaveDivider from '../components/ui/WaveDivider';
import teamMarcelo from '../assets/team-marcelo.png';
// import teamLucas from '../assets/team-lucas.png'; // Removed as per user request
import teamAna from '../assets/team-ana.png';
// import teamProfessional from '../assets/team_professional_dev.png'; // Image generation failed

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const carouselImages = [teamMarcelo, teamAna];

    return (
        <section id="about" className="py-24 bg-[#f0f9ff] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[15%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">A Verdade Sobre Seu Site</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue dark:text-white leading-tight">
                                Sua Presença Digital <br />
                                Está <span className="text-gradient-cyan">Custando Vendas?</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                            <p>
                                Se o seu site atual não gera contatos qualificados e funciona apenas como um "cartão de visitas", ele é uma despesa. E tráfego sem conversão é dinheiro jogado fora.
                            </p>
                            <p>
                                Na LocyTech, nós não entregamos apenas "sites bonitos". Nós construímos ecossistemas digitais de alta performance. Cada pixel, texto e botão é projetado estrategicamente para transformar visitantes frios em clientes reais.
                            </p>
                            <p>
                                Não deixe mais dinheiro na mesa. Nossa equipe combina design premium com engenharia de conversão para colocar sua empresa na frente das melhores oportunidades do mercado.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                            <h3 className="text-xl font-bold text-darkblue dark:text-white mb-2">Foco Obsessivo em ROI</h3>
                            <p className="text-gray-500 dark:text-gray-500 text-sm">
                                "Não vendemos código. Construímos máquinas de vendas."
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            effect="fade"
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 8000,
                                disableOnInteraction: false,
                            }}
                            className="h-full w-full absolute inset-0"
                        >
                            {carouselImages.map((img, index) => (
                                <SwiperSlide key={index} className="overflow-hidden">
                                    <div className="w-full h-full relative overflow-hidden">
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear scale-100 hover:scale-105 animate-subtle-zoom"
                                            alt={`Equipe LocyTech ${index + 1}`}
                                            style={{
                                                transformOrigin: 'center center'
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                            <p className="font-display text-xl leading-snug">"Conectando visão de negócios com precisão técnica para resultados escaláveis."</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <WaveDivider lightFill="#fdfbf6" darkFill="#020617" type="slant-right" />
        </section>
    );
};

export default About;
