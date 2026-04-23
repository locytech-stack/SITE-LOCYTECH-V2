import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import WaveDivider from '../components/ui/WaveDivider';
import teamMarcelo from '../assets/team-marcelo.png';
import teamAna from '../assets/team-ana.png';

const About = () => {
    const carouselImages = [teamMarcelo, teamAna];

    return (
        <section id="about" className="py-24 bg-[#f0f9ff] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[15%] right-[-5%] w-[400px] h-[400px] bg-secondary/5 dark:bg-secondary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-darkblue dark:text-white leading-tight">
                                Sobre a <span className="text-gradient-cyan">LocyTech</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
                            <p>
                                Somos uma equipe de desenvolvimento com sede em <strong className="text-darkblue dark:text-white">Santa Cruz do Sul (RS)</strong>, fundada em 2024. Trabalhamos com empresas e profissionais que querem uma presença digital sólida, funcional e pensada para o negócio — não só para o visual.
                            </p>
                            <p>
                                Desenvolvemos <strong className="text-darkblue dark:text-white">sites institucionais, landing pages, e-commerces e sistemas sob medida</strong>. Cada projeto é conduzido diretamente com quem codifica — sem atravessadores, sem retrabalho, sem promessa que não se cumpre.
                            </p>
                            <p>
                                Nosso diferencial é simples: <strong className="text-darkblue dark:text-white">não aceitamos qualquer projeto</strong>. Priorizamos quem realmente quer construir algo bem feito. Em troca, entregamos código limpo, performance real e suporte direto com o time que desenvolveu o seu projeto.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 dark:border-white/10">
                            <div>
                                <p className="text-3xl font-display font-bold text-primary">2024</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">Fundação</p>
                            </div>
                            <div>
                                <p className="text-3xl font-display font-bold text-primary">RS</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">Santa Cruz do Sul</p>
                            </div>
                            <div>
                                <p className="text-3xl font-display font-bold text-primary">100%</p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mt-1">Sob Medida</p>
                            </div>
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
                            <p className="font-display text-xl leading-snug">"Cada projeto é conduzido diretamente por quem desenvolve. Sem intermediários."</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <WaveDivider lightFill="#fdfbf6" darkFill="#020617" type="slant-right" />
        </section>
    );
};

export default About;
