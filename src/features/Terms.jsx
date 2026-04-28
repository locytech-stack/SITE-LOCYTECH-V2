import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <section className="py-32 bg-[#f8fafc] dark:bg-[#020617] min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                    <span className="material-icons text-base">arrow_back</span> Voltar ao site
                </Link>

                <article className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800 dark:text-white mb-8">
                        Termos e Condições de Uso
                    </h1>

                    <div className="space-y-5 text-slate-600 dark:text-gray-300 leading-relaxed">
                        <p>Ao acessar o site <a href="https://locytech.com.br" className="text-primary hover:underline">LocyTech</a>, você concorda com estes termos e condições de uso, com a nossa política de privacidade e declara estar ciente das leis brasileiras aplicáveis.</p>

                        <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>

                        <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>

                        <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

                        <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

                        <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>

                        <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</p>

                        <h2 className="text-2xl font-display font-bold text-slate-800 dark:text-white mt-10 mb-4">Compromisso do Usuário</h2>
                        <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o LocyTech oferece no site e com caráter enunciativo, mas não limitativo:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do LocyTech, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                        </ul>

                        <h2 className="text-2xl font-display font-bold text-slate-800 dark:text-white mt-10 mb-4">Mais informações</h2>
                        <p>Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                        <p className="text-sm text-slate-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-white/10">Estes termos são efetivos a partir de 22 de abril de 2026.</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Terms;
