import { useEffect } from 'react';

const translations = {
    'home': { en: 'Home', pt: 'Início' },
    'about': { en: 'About Me', pt: 'Sobre Mim' },
    'skills': { en: 'Skills', pt: 'Habilidades' },
    'services': { en: 'Services', pt: 'Serviços' },
    'contact': { en: 'Contact', pt: ' Contato ' },
    'developer': { en: 'Front-End Developer ', pt: 'Desenvolvedor Front-end ' },
    'descricao': {
        en: 'This is my official website and portfolio. All the details of the projects developed by me are here.', pt: `Este é meu Website e Portfólio oficial.
     Todos os detalhes dos trabalhos desenvolvidos por mim estão aqui.`},
    'roll': { en: 'Scroll down!', pt: 'Role para baixo!' },

    'aboutme': { en: 'About me', pt: ' Sobre mim' },

    'descricao-profissional': {
        en: 'Full-Stack Development Scholar at Growdev through the DESPERTAR.DEV program, with experience in Java programming language. Additionally, experienced in creating content for social media using Photoshop. At just 17 years old, I have a strong affinity for designing and developing interfaces, continually striving for professionalism and innovation',
        pt: 'Bolsista em desenvolvimento Full-Stack pela Growdev no programa DESPERTAR.DEV e com conhecimento em linguagem Java. Além de produções para redes sociais utilizando Photoshop. Apenas 17 anos e grande identificação pela criação e desenvolvimento de interfaces, buscando cada vez mais profissionalismo e inovação.'
    },

    'bora': {
        en: 'Lets talk?', pt: 'Vamos conversar?'
    },

    'services-two': {
        en:'What can i offer you? ', pt: 'O que eu posso lhe oferecer?'
    },

    'myportfolio': { en: 'My portfolio', pt: ' Meu portfolio' },
    'projectss': { en: 'My recent works', pt: 'Meus trabalhos mais recentes' },

    'designredes': { en: 'Automation with boots', pt: 'Automatização com boots' },
    'skill-one': { en: 'Developing Front end', pt: 'Desenvolvimento Front End'},

    'efeito': { en: 'What does this service give you?', pt: 'O que esse serviço te proporciona?' },

    'three': { en: 'I transform complex concepts into simple art;', pt: 'Transformo conceitos complexos em artes simples;' },
    'four': { en: 'Identifying with the client.', pt: 'Passar identificação com o cliente.' },
    'five': { en: 'Leverage your business;', pt: 'Alavancagem do seu negócio;' },
    'six': { en: 'Responsive, fast-loading websites;', pt: 'Sites responsivos e de carregamento rápido;' },
    'seven': { en: 'Modern Standards;', pt: 'Padrões modernos;' },
    'eight': { en: 'Professional and innovative interfaces.', pt: 'Interfaces profissionais e inovadoras;' },

    'my-skills': {en: 'Skills', pt: 'Habilidades'},
    'atual-skills': {en: 'My current skills', pt:'Minhas habilidades atuais'},

    'front': {en: 'Development front end', pt:'Desenvolvimento front end'},
    'back': {en: 'Development back end', pt:'Desenvolvimento back end'},

    'old': {en: 'My latest projects', pt: 'Meus últimos projetos desenvolvidos'},


    'english': { en: 'EN', pt: 'EN' },
    'portuguese': { en: 'PT', pt: 'PT' }
}

function useTranslation() {
    const changeLanguage = (language) => {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');

            // Verifica se a chave existe em translations e se a tradução para o idioma existe
            if (translations[key] && translations[key][language]) {
                const translation = translations[key][language];

                // Mantém o ícone se existir
                const iconElement = element.querySelector('.nav__icon');
                if (iconElement) {
                    element.innerHTML = `<i class="${iconElement.className}"></i>${translation.replace(/\n/g, '<br>')}`;
                } else {
                    element.innerHTML = translation.replace(/\n/g, '<br>');
                }
            }
        });
    };

    useEffect(() => {
        // Define o idioma padrão
        const defaultLanguage = 'pt';
        changeLanguage(defaultLanguage);
    }, []);

    return {
        changeLanguage
    };
}

export default useTranslation;
