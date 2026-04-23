import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────── MOCKUP COMPONENTS ─────────────────────────── */

/* ── Brand: VERANO & ASSOC. — advocacia premium, dark navy + ouro ── */
const VeranoLogo = () => (
    <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #b8963e, #e8c86a)', boxShadow: '0 0 10px rgba(184,150,62,0.35)' }}>
            <span style={{ color: '#0b0e18', fontWeight: 900, fontSize: 13, lineHeight: 1 }}>V</span>
        </div>
        <div style={{ lineHeight: 1.1 }}>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 10, letterSpacing: '0.14em' }}>VERANO</div>
            <div style={{ color: '#b8963e', fontWeight: 400, fontSize: 6.5, letterSpacing: '0.22em', marginTop: 1 }}>& ASSOCIADOS</div>
        </div>
    </div>
);

const SiteInstitucional = () => (
    <div className="font-sans text-[9px]" style={{ minHeight: 900, background: '#0b0e18' }}>
        {/* Nav */}
        <div className="h-12 flex items-center px-5 justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(11,14,24,0.97)' }}>
            <VeranoLogo />
            <div className="flex gap-4" style={{ color: '#4b5563' }}>
                {['Início', 'Áreas', 'Equipe', 'Casos'].map(i => <span key={i} className="text-[8px]">{i}</span>)}
            </div>
            <div className="h-7 px-3 rounded-lg flex items-center text-[8px] font-bold" style={{ background: 'linear-gradient(135deg, #b8963e, #e8c86a)', color: '#0b0e18' }}>Consulta Grátis</div>
        </div>
        {/* Hero */}
        <div className="px-7 py-9 relative overflow-hidden" style={{ background: 'linear-gradient(155deg, #0e1220 0%, #0b0e18 100%)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 40%, rgba(184,150,62,0.15) 0%, transparent 60%)' }}></div>
            <div className="absolute right-0 top-0 w-40 h-40 opacity-[0.05]" style={{ background: 'radial-gradient(circle, #e8c86a 0%, transparent 70%)', transform: 'translate(20%, -20%)' }}></div>
            {/* Gold accent line */}
            <div className="w-8 h-0.5 mb-4 relative" style={{ background: 'linear-gradient(to right, #b8963e, #e8c86a)' }}></div>
            <div className="relative">
                <div className="text-[8px] font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: '#b8963e' }}>Advocacia Empresarial · Porto Alegre, RS</div>
                <div className="text-[21px] font-bold text-white leading-[1.2] mb-3" style={{ maxWidth: 310 }}>
                    Estratégia jurídica<br />para quem <span style={{ background: 'linear-gradient(135deg, #b8963e, #e8c86a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>cresce</span>
                </div>
                <div className="text-[9.5px] mb-5" style={{ color: '#6b7280', maxWidth: 280, lineHeight: 1.75 }}>
                    Há 18 anos assessorando empresas em fusões, contratos e litígios corporativos com taxa de êxito de 97%.
                </div>
                <div className="flex gap-2.5">
                    <div className="h-8 px-5 rounded-xl flex items-center text-[9px] font-bold" style={{ background: 'linear-gradient(135deg, #b8963e, #e8c86a)', color: '#0b0e18' }}>Agendar Consulta</div>
                    <div className="h-8 px-4 rounded-xl flex items-center text-[9px]" style={{ border: '1px solid rgba(184,150,62,0.25)', color: '#b8963e' }}>Nossos Casos →</div>
                </div>
            </div>
        </div>
        {/* Stats bar */}
        <div className="flex" style={{ background: '#0e1118', borderTop: '1px solid rgba(184,150,62,0.1)', borderBottom: '1px solid rgba(184,150,62,0.1)' }}>
            {[['97%', 'Taxa de Êxito'], ['18+', 'Anos'], ['620+', 'Casos'], ['48h', 'Retorno']].map(([v, l], idx) => (
                <div key={l} className="flex-1 py-4 text-center" style={{ borderRight: idx < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div className="text-[14px] font-bold mb-0.5" style={{ color: '#c9a652' }}>{v}</div>
                    <div className="text-[7.5px] uppercase tracking-wider" style={{ color: '#374151' }}>{l}</div>
                </div>
            ))}
        </div>
        {/* Areas */}
        <div className="px-6 py-6" style={{ background: '#0b0e18' }}>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-0.5" style={{ background: 'linear-gradient(to right, #b8963e, transparent)' }}></div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest">Áreas de Prática</div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
                {[
                    { name: 'M&A', sub: 'Fusões e aquisições', color: '#b8963e', dot: '#e8c86a' },
                    { name: 'Societário', sub: 'Governança corp.', color: '#6366f1', dot: '#818cf8' },
                    { name: 'Trabalhista', sub: 'CLT e sindicatos', color: '#059669', dot: '#34d399' },
                ].map(s => (
                    <div key={s.name} className="rounded-2xl p-3" style={{ background: '#111827', border: `1px solid ${s.color}22` }}>
                        <div className="w-7 h-7 rounded-xl mb-2 flex items-center justify-center" style={{ background: s.color + '15' }}>
                            <div className="w-3 h-3 rounded-sm" style={{ background: s.dot }}></div>
                        </div>
                        <div className="font-bold text-white text-[9px] mb-0.5">{s.name}</div>
                        <div className="text-[7px]" style={{ color: '#4b5563' }}>{s.sub}</div>
                    </div>
                ))}
            </div>
        </div>
        {/* About */}
        <div className="px-6 py-5 grid grid-cols-2 gap-4 items-center" style={{ background: '#090c14' }}>
            <div className="rounded-2xl overflow-hidden relative" style={{ height: 100, background: 'linear-gradient(135deg, #0e1525, #1a2238)' }}>
                <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{ background: 'linear-gradient(to top, rgba(184,150,62,0.06), transparent)' }}></div>
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ background: '#b8963e', opacity: 0.5 }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-14 rounded-xl" style={{ background: 'linear-gradient(135deg, #1e2d45, #2a3f60)' }}></div>
                    <div className="w-16 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}></div>
                </div>
            </div>
            <div>
                <div className="text-[8px] font-bold mb-1.5 uppercase tracking-[0.18em]" style={{ color: '#b8963e' }}>O Escritório</div>
                <div className="text-[12px] font-bold text-white mb-2">Referência Nacional</div>
                <div className="space-y-1.5 mb-3">
                    {[1, 2, 3].map(i => <div key={i} className="h-1.5 rounded-full" style={{ width: i === 3 ? '60%' : '100%', background: 'rgba(255,255,255,0.06)' }}></div>)}
                </div>
                <div className="h-6 px-3 rounded-lg text-[8px] font-bold w-fit flex items-center" style={{ background: 'rgba(184,150,62,0.1)', color: '#c9a652', border: '1px solid rgba(184,150,62,0.18)' }}>Nossa Equipe →</div>
            </div>
        </div>
        {/* Testimonials */}
        <div className="px-6 py-5" style={{ background: '#0b0e18' }}>
            <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-0.5" style={{ background: 'linear-gradient(to right, #b8963e, transparent)' }}></div>
                <div className="text-[10px] font-bold text-white uppercase tracking-widest">Clientes</div>
            </div>
            {[
                { quote: 'A Verano conduziu nossa fusão com precisão. Processo sem nenhuma surpresa.', name: 'Ricardo Fontes', role: 'CEO · Grupo Avanti' },
                { quote: 'Defesa exemplar na ação trabalhista. Resultado além do esperado.', name: 'Mariana Luz', role: 'Diretora · Indústrias Magna' },
            ].map((t, i) => (
                <div key={i} className="rounded-2xl p-3 mb-2" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-2 h-2 rounded-sm" style={{ background: '#c9a652' }}></div>)}
                    </div>
                    <div className="text-[9px] text-white mb-2.5 italic" style={{ lineHeight: 1.55, color: '#d1d5db' }}>"{t.quote}"</div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: 'linear-gradient(135deg, #b8963e, #e8c86a)', color: '#0b0e18' }}>{t.name[0]}</div>
                        <div>
                            <div className="text-[8px] font-bold text-white">{t.name}</div>
                            <div className="text-[7px]" style={{ color: '#4b5563' }}>{t.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* CTA */}
        <div className="px-6 py-8 text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0e1525, #0b0e18)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(184,150,62,0.08) 0%, transparent 65%)' }}></div>
            <div className="relative">
                <div className="text-[13px] font-bold text-white mb-1.5">Seu negócio precisa de proteção jurídica?</div>
                <div className="text-[9px] mb-4" style={{ color: '#4b5563' }}>Primeira consulta gratuita — sem compromisso</div>
                <div className="h-8 px-6 rounded-full text-[9px] font-bold flex items-center justify-center mx-auto w-fit" style={{ background: 'linear-gradient(135deg, #b8963e, #e8c86a)', color: '#0b0e18' }}>Falar com Especialista</div>
            </div>
        </div>
        {/* Footer */}
        <div className="h-12 px-6 flex items-center justify-between" style={{ background: '#070910', borderTop: '1px solid rgba(184,150,62,0.08)' }}>
            <span className="text-[8px]" style={{ color: '#2d3748', letterSpacing: '0.08em' }}>VERANO & ASSOC. © 2025</span>
            <div className="flex gap-3">
                {['Privacidade', 'Termos'].map(l => <span key={l} className="text-[8px]" style={{ color: '#2d3748' }}>{l}</span>)}
            </div>
        </div>
    </div>
);

/* ── Brand: ORBIT — SaaS produtividade, dark space + violeta + ciano ── */
const OrbitLogo = () => (
    <div className="flex items-center gap-2">
        <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
            <div className="absolute w-7 h-7 rounded-full" style={{ border: '1px solid rgba(139,92,246,0.3)' }}></div>
            <div className="absolute w-[18px] h-[18px] rounded-full" style={{ border: '1.5px solid #7c3aed' }}></div>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)', boxShadow: '0 0 8px rgba(124,58,237,0.6)' }}></div>
        </div>
        <span style={{ color: 'white', fontWeight: 700, fontSize: 13, letterSpacing: '-0.02em' }}>orbit</span>
    </div>
);

const LandingPage = () => (
    <div className="font-sans text-[9px]" style={{ minHeight: 900, background: '#07040f' }}>
        {/* Nav */}
        <div className="h-12 flex items-center px-6 justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(7,4,15,0.97)' }}>
            <OrbitLogo />
            <div className="flex gap-4 text-[8px]" style={{ color: '#4b5563' }}>
                {['Produto', 'Preços', 'Empresa'].map(i => <span key={i}>{i}</span>)}
            </div>
            <div className="h-7 px-3 rounded-lg flex items-center text-[8px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)' }}>Começar Grátis</div>
        </div>
        {/* Hero */}
        <div className="px-7 pt-8 pb-6 text-center relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0e0620 0%, #07040f 100%)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(124,58,237,0.4) 0%, transparent 60%)' }}></div>
            {/* Decorative orbit rings */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-64 h-64 rounded-full opacity-[0.06]" style={{ border: '1px solid #7c3aed', transform: 'translateX(-50%) translateY(-40%)' }}></div>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-44 h-44 rounded-full opacity-[0.08]" style={{ border: '1px solid #22d3ee', transform: 'translateX(-50%) translateY(-55%)' }}></div>
            <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22d3ee' }}></div>
                    <span className="text-[8px] font-semibold" style={{ color: '#67e8f9' }}>orbit 4.0 — IA nativa lançada</span>
                </div>
                <div className="text-[22px] font-bold text-white leading-[1.2] mb-3">
                    Fluxos de trabalho<br /><span style={{ background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>sem fricção</span>
                </div>
                <div className="text-[9.5px] mb-5 mx-auto" style={{ color: '#6b7280', maxWidth: 270, lineHeight: 1.75 }}>
                    Automatize processos, visualize dados e integre ferramentas. Tudo num único espaço de trabalho.
                </div>
                <div className="flex gap-2.5 justify-center mb-5">
                    <div className="h-8 px-5 rounded-xl text-white text-[9px] font-bold flex items-center" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>Testar 14 dias grátis</div>
                    <div className="h-8 px-4 rounded-xl text-[9px] flex items-center" style={{ border: '1px solid rgba(34,211,238,0.2)', color: '#67e8f9' }}>Ver demo →</div>
                </div>
                {/* Product UI snapshot */}
                <div className="rounded-xl overflow-hidden" style={{ background: '#120e22', border: '1px solid rgba(124,58,237,0.2)', height: 82 }}>
                    <div className="h-5 flex items-center px-3 gap-1.5" style={{ background: '#0d0a1a', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <div className="w-5 h-5 rounded flex items-center justify-center">
                            <OrbitLogo />
                        </div>
                        <div className="flex-1 mx-2 h-3 rounded" style={{ background: 'rgba(255,255,255,0.04)' }}></div>
                        <div className="w-12 h-3 rounded" style={{ background: 'rgba(124,58,237,0.3)' }}></div>
                    </div>
                    <div className="p-2 flex gap-2">
                        {/* Sidebar */}
                        <div className="w-8 flex flex-col gap-1">
                            {[1, 2, 3, 4].map(i => <div key={i} className="h-4 rounded" style={{ background: i === 1 ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.03)' }}></div>)}
                        </div>
                        {/* Content */}
                        <div className="flex-1 grid grid-cols-3 gap-1.5">
                            {[{c:'#7c3aed',bars:[55,80,45,95,70]},{c:'#22d3ee',bars:[70,40,85,55,90]},{c:'#a78bfa',bars:[40,75,60,35,80]}].map((item, i) => (
                                <div key={i} className="rounded-lg p-1.5" style={{ background: item.c + '10' }}>
                                    <div className="h-1 rounded w-3/4 mb-1.5" style={{ background: item.c + '50' }}></div>
                                    <div className="flex items-end gap-0.5" style={{ height: 28 }}>
                                        {item.bars.map((bh, bi) => (
                                            <div key={bi} className="flex-1 rounded-sm" style={{ height: `${bh}%`, background: item.c + '60' }}></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Social proof */}
        <div className="px-5 py-3" style={{ background: '#0a0715', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="text-center text-[7px] mb-2 uppercase tracking-[0.18em]" style={{ color: '#2d3748' }}>USADO POR TIMES DE ALTA PERFORMANCE</div>
            <div className="flex justify-around items-center">
                {[{l:'K',c:'#7c3aed',name:'Kosmik'},{l:'F',c:'#22d3ee',name:'Flowline'},{l:'R',c:'#a78bfa',name:'Render'},{l:'S',c:'#6366f1',name:'Strato'}].map(item => (
                    <div key={item.name} className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: item.c + '20' }}>
                            <span style={{ color: item.c, fontWeight: 700, fontSize: 8 }}>{item.l}</span>
                        </div>
                        <span style={{ color: '#2d3748', fontSize: 8, fontWeight: 600 }}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
        {/* Stats */}
        <div className="flex" style={{ background: '#07040f', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            {[['3.400+', 'Times ativos'], ['99.9%', 'Uptime'], ['4.9/5', 'App Store']].map(([v, l], i) => (
                <div key={l} className="flex-1 py-4 text-center" style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div className="text-[14px] font-bold mb-0.5" style={{ background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{v}</div>
                    <div className="text-[8px]" style={{ color: '#374151' }}>{l}</div>
                </div>
            ))}
        </div>
        {/* Features */}
        <div className="px-6 py-5" style={{ background: '#090615' }}>
            <div className="text-[10px] font-bold text-white mb-4">Construído para escalar</div>
            <div className="grid grid-cols-2 gap-2">
                {[
                    { label: 'Automações IA', desc: 'Workflows inteligentes', color: '#7c3aed', accent: '#a78bfa' },
                    { label: 'Analytics Live', desc: 'Dados em tempo real', color: '#22d3ee', accent: '#67e8f9' },
                    { label: '120+ integrações', desc: 'Conecte qualquer app', color: '#6366f1', accent: '#818cf8' },
                    { label: 'Colaboração', desc: 'Time sempre alinhado', color: '#8b5cf6', accent: '#c4b5fd' },
                ].map(f => (
                    <div key={f.label} className="rounded-xl p-3 flex items-start gap-2" style={{ background: '#110e1f', border: `1px solid ${f.color}18` }}>
                        <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: f.color + '18' }}>
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: f.accent }}></div>
                        </div>
                        <div>
                            <div className="font-bold text-white text-[9px]">{f.label}</div>
                            <div className="text-[7.5px] mt-0.5" style={{ color: '#4b5563' }}>{f.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* Pricing */}
        <div className="px-6 py-5" style={{ background: '#07040f' }}>
            <div className="text-[10px] font-bold text-white mb-4">Planos</div>
            <div className="grid grid-cols-2 gap-2.5">
                {[
                    { name: 'Growth', price: 'R$ 79', features: ['10 usuários', '50 automações', 'Suporte email'], hi: false },
                    { name: 'Scale', price: 'R$ 149', features: ['Ilimitado', 'IA nativa', 'Suporte 24/7'], hi: true },
                ].map(p => (
                    <div key={p.name} className="rounded-2xl p-3" style={{ background: p.hi ? 'rgba(124,58,237,0.08)' : '#0e0b1c', border: p.hi ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.05)' }}>
                        {p.hi && <div className="text-[7px] font-bold mb-1.5 uppercase tracking-wider" style={{ color: '#22d3ee' }}>Mais popular</div>}
                        <div className="font-bold text-white text-[10px] mb-0.5">{p.name}</div>
                        <div className="text-[18px] font-bold mb-2.5" style={{ background: p.hi ? 'linear-gradient(135deg, #a78bfa, #22d3ee)' : 'none', WebkitBackgroundClip: p.hi ? 'text' : 'unset', WebkitTextFillColor: p.hi ? 'transparent' : '#9ca3af', color: p.hi ? 'transparent' : '#9ca3af' }}>{p.price}</div>
                        {p.features.map(f => (
                            <div key={f} className="flex items-center gap-1.5 mb-1">
                                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)', opacity: 0.7 }}></div>
                                <span className="text-[8px]" style={{ color: '#6b7280' }}>{f}</span>
                            </div>
                        ))}
                        <div className="h-7 rounded-xl flex items-center justify-center mt-3 text-[9px] font-bold" style={{ background: p.hi ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'rgba(255,255,255,0.04)', color: p.hi ? 'white' : '#4b5563', border: !p.hi ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>Começar agora</div>
                    </div>
                ))}
            </div>
        </div>
        {/* CTA */}
        <div className="px-6 py-8 text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0e0620, #07040f)' }}>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, transparent 60%)' }}></div>
            <div className="relative">
                <div className="text-[13px] font-bold text-white mb-1.5">Eleve a produtividade do seu time</div>
                <div className="text-[9px] mb-4" style={{ color: '#4b5563' }}>Sem cartão. Cancele quando quiser.</div>
                <div className="h-8 px-6 rounded-full text-[9px] font-bold flex items-center justify-center mx-auto w-fit text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)' }}>Criar workspace grátis →</div>
            </div>
        </div>
        {/* Footer */}
        <div className="h-12 px-6 flex items-center justify-between" style={{ background: '#040309', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <span className="text-[8px]" style={{ color: '#1f2937', letterSpacing: '0.04em' }}>orbit © 2025</span>
            <div className="flex gap-3">
                {['Blog', 'Termos', 'Privacidade'].map(l => <span key={l} className="text-[8px]" style={{ color: '#1f2937' }}>{l}</span>)}
            </div>
        </div>
    </div>
);

/* ── Brand: VÊLO — moda urbana contemporânea, creme + terracota ── */
const VeloLogo = () => (
    <div className="flex items-center gap-2">
        <div className="flex items-center">
            <span style={{ color: '#1c1917', fontWeight: 900, fontSize: 14, letterSpacing: '-0.03em' }}>VÊLO</span>
            <div className="w-[3px] h-[14px] ml-1.5 rounded-sm" style={{ background: '#c2522a' }}></div>
        </div>
    </div>
);

const Ecommerce = () => (
    <div className="font-sans text-[9px]" style={{ minHeight: 900, background: '#f9f6f2' }}>
        {/* Nav */}
        <div className="h-12 flex items-center px-5 justify-between" style={{ borderBottom: '1px solid #ede8e0', background: 'white' }}>
            <VeloLogo />
            <div className="flex gap-4 text-[8px]" style={{ color: '#a8a29e' }}>
                {['Coleções', 'Lookbook', 'Sobre', 'Sale'].map(i => <span key={i}>{i}</span>)}
            </div>
            <div className="flex gap-2 items-center">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[12px]" style={{ background: '#f5f0eb' }}>🔍</div>
                <div className="relative">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[12px]" style={{ background: '#f5f0eb' }}>🛍️</div>
                    <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center text-white font-bold" style={{ background: '#c2522a', fontSize: '6px' }}>2</div>
                </div>
            </div>
        </div>
        {/* Hero — editorial style */}
        <div className="relative overflow-hidden" style={{ height: 130, background: '#1c1614' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1c1614 40%, #2d1f1a 100%)' }}></div>
            {/* Terracotta accent shape */}
            <div className="absolute right-0 top-0 h-full w-1/3" style={{ background: 'linear-gradient(to left, rgba(194,82,42,0.12), transparent)' }}></div>
            <div className="absolute right-8 bottom-0 h-full w-20 opacity-30" style={{ background: 'linear-gradient(to top, rgba(194,82,42,0.3), transparent)' }}></div>
            <div className="h-full flex flex-col justify-center px-7 relative">
                <div className="text-[7.5px] font-bold mb-2 uppercase tracking-[0.22em]" style={{ color: '#c2522a' }}>Coleção Outono · 2025</div>
                <div className="text-[20px] font-black text-white leading-tight mb-2.5" style={{ letterSpacing: '-0.02em' }}>
                    Vista-se<br />do seu jeito
                </div>
                <div className="flex gap-2.5">
                    <div className="h-6 px-4 rounded flex items-center text-[8px] font-bold" style={{ background: '#c2522a', color: 'white' }}>Ver Coleção</div>
                    <div className="h-6 px-3 rounded flex items-center text-[8px]" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#d6d3d1' }}>Lookbook</div>
                </div>
            </div>
        </div>
        {/* Categories */}
        <div className="px-5 py-3 flex gap-2 overflow-x-auto" style={{ background: 'white', borderBottom: '1px solid #ede8e0' }}>
            {['Todos', 'Outerwear', 'Básicos', 'Acessórios', 'Calçados'].map((c, i) => (
                <div key={c} className="h-7 px-3 rounded flex-shrink-0 flex items-center text-[8px] font-medium" style={{ background: i === 0 ? '#c2522a' : '#f5f0eb', color: i === 0 ? 'white' : '#78716c' }}>{c}</div>
            ))}
        </div>
        {/* Products */}
        <div className="px-5 py-5" style={{ background: '#f9f6f2' }}>
            <div className="flex justify-between items-center mb-3.5">
                <div className="text-[10px] font-black" style={{ color: '#1c1917', letterSpacing: '-0.01em' }}>Mais vendidos</div>
                <div className="text-[8px]" style={{ color: '#c2522a' }}>Ver tudo →</div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
                {[
                    { name: 'Trench Coat Bege', price: 'R$ 420', old: 'R$ 590', bg: '#e8dfd4', tag: 'NOVO' },
                    { name: 'Shoulder Bag Suede', price: 'R$ 265', old: 'R$ 340', bg: '#d9cfc2', tag: '-22%' },
                    { name: 'Polo Piqué Off-White', price: 'R$ 119', old: null, bg: '#e4e0db', tag: null },
                    { name: 'Derby Couro Natural', price: 'R$ 390', old: 'R$ 520', bg: '#cec6ba', tag: 'SALE' },
                ].map(p => (
                    <div key={p.name} className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid #ede8e0' }}>
                        <div className="relative" style={{ height: 80, background: p.bg }}>
                            {p.tag && (
                                <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[7px] font-bold" style={{ background: p.tag === 'NOVO' ? '#1c1917' : '#c2522a', color: 'white', letterSpacing: '0.05em' }}>{p.tag}</div>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-14 rounded-lg" style={{ background: 'rgba(0,0,0,0.07)' }}></div>
                            </div>
                        </div>
                        <div className="p-2.5">
                            <div className="text-[8.5px] font-medium leading-tight mb-1" style={{ color: '#292524' }}>{p.name}</div>
                            {p.old && <div className="text-[7px] line-through" style={{ color: '#bbb' }}>{p.old}</div>}
                            <div className="flex justify-between items-center mt-1">
                                <div className="text-[11px] font-bold" style={{ color: '#1c1917' }}>{p.price}</div>
                                <div className="w-6 h-6 rounded flex items-center justify-center text-white text-[10px]" style={{ background: '#1c1917' }}>+</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* Banner — Members club */}
        <div className="mx-5 mb-5 rounded-xl overflow-hidden relative" style={{ height: 72, background: '#c2522a' }}>
            <div className="absolute right-0 top-0 h-full w-32 opacity-15" style={{ background: 'radial-gradient(ellipse at right, white, transparent)' }}></div>
            <div className="h-full flex flex-col justify-center px-5">
                <div className="text-[8px] text-white/70 mb-0.5 uppercase tracking-wider">Clube VÊLO</div>
                <div className="text-[13px] font-black text-white mb-1.5" style={{ letterSpacing: '-0.02em' }}>10% OFF na primeira compra</div>
                <div className="h-5 px-3 rounded text-[8px] font-bold flex items-center w-fit" style={{ background: 'white', color: '#c2522a' }}>Quero meu desconto</div>
            </div>
        </div>
        {/* New arrivals */}
        <div className="px-5 pb-5">
            <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] font-black" style={{ color: '#1c1917', letterSpacing: '-0.01em' }}>Recém chegados</div>
                <div className="text-[8px]" style={{ color: '#c2522a' }}>Ver tudo →</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { c: '#ede0d4', l: 'Blazer Camel', p: 'R$ 345' },
                    { c: '#d4dde8', l: 'Mocassim Blue', p: 'R$ 210' },
                    { c: '#dde8d4', l: 'Scarf Linen', p: 'R$ 85' },
                ].map((p, i) => (
                    <div key={i} className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid #ede8e0' }}>
                        <div style={{ height: 58, background: p.c }}></div>
                        <div className="p-2">
                            <div className="text-[8px] font-medium" style={{ color: '#292524' }}>{p.l}</div>
                            <div className="text-[9px] font-bold mt-0.5" style={{ color: '#1c1917' }}>{p.p}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* Footer */}
        <div className="px-5 py-5" style={{ background: '#1c1614' }}>
            <div className="flex items-center gap-2 mb-4">
                <span style={{ color: 'white', fontWeight: 900, fontSize: 12, letterSpacing: '-0.03em' }}>VÊLO</span>
                <div className="w-[2px] h-3 rounded-sm" style={{ background: '#c2522a' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                {[['Loja', 'Novidades', 'Coleções', 'Sale'], ['Ajuda', 'Trocas', 'FAQ', 'Contato']].map(col => (
                    <div key={col[0]}>
                        <div className="text-[8.5px] font-bold text-white mb-2 uppercase tracking-wider">{col[0]}</div>
                        {col.slice(1).map(l => <div key={l} className="text-[8px] mb-1.5" style={{ color: '#44403c' }}>{l}</div>)}
                    </div>
                ))}
            </div>
            <div style={{ borderTop: '1px solid #292524', paddingTop: 10 }}>
                <span className="text-[8px]" style={{ color: '#292524' }}>VÊLO Moda © 2025 — São Paulo, SP</span>
            </div>
        </div>
    </div>
);

/* ── Brand: NEXAR — plataforma BI enterprise, dark navy + azul-teal ── */
const NexarLogo = () => (
    <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center relative overflow-hidden flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)' }}>
            {/* grid pattern overlay */}
            <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px), repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px)' }}></div>
            <span style={{ color: 'white', fontWeight: 900, fontSize: 12, position: 'relative', letterSpacing: '-0.04em' }}>N</span>
        </div>
        <span style={{ color: 'white', fontWeight: 700, fontSize: 12, letterSpacing: '0.05em' }}>nexar</span>
    </div>
);

const Dashboard = () => (
    <div className="font-sans text-[9px] flex" style={{ minHeight: 900, background: '#060c18' }}>
        {/* Sidebar */}
        <div className="w-14 flex flex-col items-center py-4 gap-2.5 flex-shrink-0" style={{ background: '#040810', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)' }}>
                    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px), repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px)' }}></div>
                    <span style={{ color: 'white', fontWeight: 900, fontSize: 11, position: 'relative' }}>N</span>
                </div>
            </div>
            {[
                { icon: 'dashboard', active: true },
                { icon: 'bar_chart', active: false },
                { icon: 'people', active: false },
                { icon: 'layers', active: false },
                { icon: 'settings', active: false },
            ].map((item, i) => (
                <div key={i} className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden" style={{ background: item.active ? 'rgba(14,165,233,0.12)' : 'transparent', border: item.active ? '1px solid rgba(14,165,233,0.2)' : '1px solid transparent' }}>
                    <span className="material-icons" style={{ fontSize: '15px', color: item.active ? '#38bdf8' : '#1e3a5f' }} aria-hidden="true">{item.icon}</span>
                </div>
            ))}
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-10 flex items-center px-4 justify-between flex-shrink-0" style={{ background: '#080e1c', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="flex items-center gap-2">
                    <NexarLogo />
                    <span style={{ color: '#1e3a5f', fontSize: 9 }}>·</span>
                    <span style={{ color: '#334155', fontSize: 9 }}>Visão Geral</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2 h-5 rounded text-[7px]" style={{ background: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.15)', color: '#2dd4bf' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2dd4bf' }}></div>
                        Live
                    </div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)' }}>
                        <span className="text-[8px] font-bold text-white">A</span>
                    </div>
                </div>
            </div>
            {/* Body */}
            <div className="flex-1 p-3 space-y-2.5 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                {/* KPI cards */}
                <div className="grid grid-cols-2 gap-2">
                    {[
                        { label: 'Receita', value: 'R$ 128k', change: '+18%', up: true, color: '#0ea5e9' },
                        { label: 'Usuários', value: '4.820', change: '+11%', up: true, color: '#14b8a6' },
                        { label: 'Transações', value: '1.347', change: '-2%', up: false, color: '#f59e0b' },
                        { label: 'Uptime', value: '99.98%', change: '+0.1%', up: true, color: '#8b5cf6' },
                    ].map(s => (
                        <div key={s.label} className="rounded-xl p-3" style={{ background: '#0d1628', border: `1px solid ${s.color}18` }}>
                            <div className="flex justify-between items-start mb-2">
                                <div className="text-[7px] uppercase tracking-[0.12em]" style={{ color: '#334155' }}>{s.label}</div>
                                <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ background: s.color + '15' }}>
                                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: s.color + '80' }}></div>
                                </div>
                            </div>
                            <div className="text-[15px] font-bold text-white mb-0.5">{s.value}</div>
                            <div className="flex items-center gap-1">
                                <span className="text-[7px] font-semibold" style={{ color: s.up ? '#2dd4bf' : '#f87171' }}>{s.change}</span>
                                <span className="text-[7px]" style={{ color: '#1e3a5f' }}>vs último mês</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Revenue chart */}
                <div className="rounded-xl p-3" style={{ background: '#0d1628', border: '1px solid rgba(14,165,233,0.1)' }}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-white">Receita · 6 meses</span>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: '#0ea5e9' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: '#14b8a6' }}></div>
                            <span className="text-[7px]" style={{ color: '#334155' }}>Receita · Meta</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-1.5 mb-2" style={{ height: 56 }}>
                        {[[30, 25], [52, 45], [38, 50], [72, 60], [58, 65], [88, 75]].map(([actual, target], i) => (
                            <div key={i} className="flex-1 flex items-end gap-0.5" style={{ height: '100%' }}>
                                <div className="flex-1 rounded-t-sm relative overflow-hidden" style={{ height: `${actual}%`, background: 'rgba(14,165,233,0.1)' }}>
                                    <div className="absolute bottom-0 w-full" style={{ height: '60%', background: 'linear-gradient(to top, #0ea5e9, rgba(14,165,233,0.4))' }}></div>
                                </div>
                                <div className="flex-1 rounded-t-sm" style={{ height: `${target}%`, background: 'rgba(20,184,166,0.25)', borderTop: '1px solid #14b8a6' }}></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[7px]" style={{ color: '#1e3a5f' }}>
                        {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map(m => <span key={m}>{m}</span>)}
                    </div>
                </div>
                {/* Transactions table */}
                <div className="rounded-xl p-3" style={{ background: '#0d1628', border: '1px solid rgba(14,165,233,0.08)' }}>
                    <div className="flex justify-between items-center mb-2.5">
                        <div className="text-[10px] font-bold text-white">Transações Recentes</div>
                        <div className="text-[8px]" style={{ color: '#38bdf8' }}>Ver todas →</div>
                    </div>
                    <div className="space-y-1.5">
                        {[
                            { id: 'TXN-8821', client: 'Grupo Avanti', value: 'R$12.400', status: 'Liquidado', sc: '#2dd4bf' },
                            { id: 'TXN-8820', client: 'Via Rossi', value: 'R$3.200', status: 'Pendente', sc: '#f59e0b' },
                            { id: 'TXN-8819', client: 'Soterra SA', value: 'R$8.750', status: 'Liquidado', sc: '#2dd4bf' },
                            { id: 'TXN-8818', client: 'TechMove', value: 'R$1.890', status: 'Recusado', sc: '#f87171' },
                        ].map(r => (
                            <div key={r.id} className="flex items-center justify-between py-1.5" style={{ borderBottom: '1px solid rgba(14,165,233,0.05)' }}>
                                <div className="text-[7px] w-14" style={{ color: '#334155', fontFamily: 'monospace' }}>{r.id}</div>
                                <div className="text-[8.5px] font-medium text-white flex-1 ml-1">{r.client}</div>
                                <div className="text-[9px] font-bold text-white mr-2">{r.value}</div>
                                <div className="px-2 py-0.5 rounded text-[7px] font-bold" style={{ background: r.sc + '12', color: r.sc }}>{r.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Module performance */}
                <div className="rounded-xl p-3" style={{ background: '#0d1628', border: '1px solid rgba(14,165,233,0.08)' }}>
                    <div className="text-[10px] font-bold text-white mb-3">Performance por Módulo</div>
                    <div className="space-y-2.5">
                        {[
                            { name: 'Financeiro', pct: 84, color: '#0ea5e9' },
                            { name: 'Operações', pct: 61, color: '#14b8a6' },
                            { name: 'Relatórios', pct: 42, color: '#8b5cf6' },
                        ].map(m => (
                            <div key={m.name}>
                                <div className="flex justify-between text-[8px] mb-1">
                                    <span style={{ color: '#475569' }}>{m.name}</span>
                                    <span className="font-bold" style={{ color: m.color }}>{m.pct}%</span>
                                </div>
                                <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
                                    <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: `linear-gradient(to right, ${m.color}, ${m.color}60)` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ─────────────────────────── MAIN SECTION ─────────────────────────── */
const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(0);

    const steps = [
        { number: "01", title: "Briefing & Escopo", description: "Conversamos por WhatsApp ou reunião para entender seu objetivo real. Definimos escopo, prazo e preço fechado antes de começar — sem surpresas.", icon: "forum" },
        { number: "02", title: "Planejamento & Design", description: "Estruturamos a arquitetura e criamos o design focado em usabilidade. Você aprova cada etapa antes do desenvolvimento.", icon: "design_services" },
        { number: "03", title: "Desenvolvimento", description: "Código limpo, performance real e responsividade total. Sem templates genéricos, sem page builders pesados. 100% sob medida.", icon: "code" },
        { number: "04", title: "Entrega & Suporte", description: "Publicamos, configuramos domínio, SSL e analytics. Após a entrega, você fala direto com o time que desenvolveu o projeto.", icon: "rocket_launch" },
    ];

    const projects = [
        {
            label: "Site Institucional",
            icon: "language",
            url: "verano.adv.br",
            tagline: "Autoridade digital e captação de leads qualificados",
            description: "Sites profissionais que posicionam sua marca com credibilidade e geram contatos reais — não só presença online.",
            tags: ["Design Premium", "SEO", "Alta Conversão"],
            component: <SiteInstitucional />,
        },
        {
            label: "Landing Page",
            icon: "ads_click",
            url: "app.orbit.io",
            tagline: "Tráfego que converte em clientes e vendas",
            description: "Páginas estruturadas para transformar cada visita em uma oportunidade real. Ideal para lançamentos, promoções e campanhas.",
            tags: ["Copywriting", "CRO", "Performance"],
            component: <LandingPage />,
        },
        {
            label: "E-commerce",
            icon: "shopping_cart",
            url: "velomoda.com.br",
            tagline: "Lojas rápidas com checkout que vende",
            description: "Desenvolvemos e-commerces completos com foco em experiência de compra, redução de abandono e aumento de ticket médio.",
            tags: ["UX de Compra", "Checkout Otimizado", "Mobile First"],
            component: <Ecommerce />,
        },
        {
            label: "Sistema Web",
            icon: "dashboard",
            url: "app.nexar.io",
            tagline: "Automação e controle total do seu negócio",
            description: "Sistemas personalizados para gestão interna, automação de processos e relatórios. Substitua planilhas e processos manuais.",
            tags: ["Painel Admin", "Integrações", "Escalável"],
            component: <Dashboard />,
        },
    ];

    return (
        <section id="process" className="py-24 bg-[#f8fafc] dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Process Steps ── */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Como Trabalhamos</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
                        Nosso <span className="text-primary">Processo</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-300">
                        Um fluxo transparente do primeiro contato à entrega final.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-5xl font-display font-bold text-primary/20 dark:text-primary/30 group-hover:text-primary/40 transition-colors">{step.number}</span>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary overflow-hidden">
                                    <span className="material-icons" aria-hidden="true">{step.icon}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Showcase ── */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Interfaces que Construímos</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-800 dark:text-white mb-3">
                        Veja o que <span className="text-primary">entregamos</span>
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400">
                        Selecione um tipo de projeto e explore a interface ao lado.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[360px_1fr] gap-6 items-start max-w-7xl mx-auto">

                    {/* ── Left: Tab list ── */}
                    <div className="flex flex-col gap-2 lg:sticky lg:top-28">
                        {projects.map((p, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 group border ${
                                    activeTab === i
                                        ? 'bg-white dark:bg-[#0f172a] border-primary/40 shadow-lg shadow-primary/5'
                                        : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-white/[0.03]'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden transition-colors ${
                                        activeTab === i ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
                                    }`}>
                                        <span className="material-icons text-xl" aria-hidden="true">{p.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-bold text-sm transition-colors ${activeTab === i ? 'text-slate-800 dark:text-white' : 'text-slate-500 dark:text-gray-500'}`}>
                                            {p.label}
                                        </div>
                                        <div className={`text-xs mt-0.5 transition-colors truncate ${activeTab === i ? 'text-slate-500 dark:text-gray-400' : 'text-slate-400 dark:text-gray-600'}`}>
                                            {p.tagline}
                                        </div>
                                    </div>
                                    <div className={`w-1.5 h-8 rounded-full flex-shrink-0 transition-all duration-300 ${activeTab === i ? 'bg-primary' : 'bg-transparent'}`} />
                                </div>

                                {activeTab === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.25 }}
                                        className="mt-4 pl-14 overflow-hidden"
                                    >
                                        <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed mb-3">{p.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {p.tags.map(tag => (
                                                <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* ── Right: Preview ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 shadow-2xl bg-[#0f172a]"
                    >
                        {/* Browser chrome */}
                        <div className="h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
                                <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                            </div>
                            <div className="flex-1 mx-3 h-6 bg-white/5 rounded-lg flex items-center px-3 gap-2 overflow-hidden">
                                <div className="w-3 h-3 bg-slate-600 rounded-sm flex-shrink-0"></div>
                                <span className="text-[10px] text-slate-400 truncate">{projects[activeTab].url}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 bg-white/5 rounded flex items-center justify-center">
                                    <div className="w-3 h-2.5 border border-slate-500 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable content */}
                        <div
                            className="h-[560px] overflow-y-auto cursor-grab active:cursor-grabbing select-none"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {projects[activeTab].component}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Footer hint */}
                        <div className="h-8 bg-[#1e293b] flex items-center justify-center gap-2 border-t border-white/5">
                            <span className="material-icons text-slate-500" style={{ fontSize: '12px' }} aria-hidden="true">unfold_more</span>
                            <span className="text-[9px] text-slate-500 uppercase tracking-widest">Role para explorar</span>
                        </div>
                    </motion.div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a href="/#contact" className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all">
                        Conversar sobre meu projeto
                        <span className="material-icons text-base" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
