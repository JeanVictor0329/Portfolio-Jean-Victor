document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle (Dark/Light Mode) ---
    const themeSwitch = document.getElementById('theme-switch');
    const htmlElement = document.documentElement;

    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'light') {
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Language Toggle (PT/EN) ---
    const langBtn = document.getElementById('lang-switch');
    const langText = langBtn.querySelector('.lang-text');
    let currentLang = localStorage.getItem('language') || 'pt';

    const translations = {
        'pt': {
            'page-title': 'Portfólio | Automação e Dados',
            'nav-home': 'Início',
            'nav-about': 'Sobre',
            'nav-career': 'Carreira',
            'nav-skills': 'Habilidades',
            'nav-projects': 'Projetos',
            'nav-contact': 'Contato',
            'hero-subtitle': 'Olá, eu trabalho com',
            'hero-title': 'Automação <br> e <span class="highlight">Dados</span>',
            'hero-description': 'Transformando processos manuais em soluções escaláveis e inteligência operacional com Power Platform, SQL e Python.',
            'btn-contact': 'Fale Comigo',
            'btn-projects': 'Ver Projetos',
            'about-title': 'Sobre Mim',
            'about-subtitle': 'Conheça o Jean',
            'about-p1': 'Profissional com sólida atuação em desenvolvimento de software corporativo, análise de dados e automação de processos. Experiência na criação de aplicações escaláveis utilizando Python, JavaScript (React, Angular, FastAPI) e no desenho de arquiteturas robustas de integração e bancos de dados (PostgreSQL, SQL Server).',
            'about-p2': 'Especialista em Business Intelligence e Data Science, com domínio na construção de dashboards estratégicos (Power BI, DAX Avançado), processamento de dados ruidosos (Pandas, NumPy) e implementação de modelos de Machine Learning (Scikit-learn) para previsibilidade e suporte à tomada de decisão.',
            'about-p3': 'Forte vivência no ecossistema Microsoft Power Platform (Power Apps, Power Automate, SharePoint), desenvolvendo rotinas automatizadas, integração de APIs e interfaces corporativas focadas em eficiência operacional e governança de dados.',
            'about-p4': 'Atuação direta no levantamento de requisitos operacionais, modelagem de soluções técnicas e relacionamento com bases de dados complexas, sempre priorizando a produtividade, usabilidade e a padronização de fluxos sistêmicos.',
            'about-p5': 'Cursando Bacharelado em Sistemas de Informação, aplico conceitos acadêmicos diretamente em desafios reais de negócio. Possuo perfil analítico e orientado a resultados, atuando em projetos de ponta a ponta para entregar impacto mensurável e transformar necessidades de negócio em soluções tecnológicas eficientes.',
            'career-title': 'Carreira Profissional',
            'exp-alianca-role': 'Estagiário',
            'exp-alianca-date': '04/2025 - 09/2026',
            'exp-alianca-role2': 'Assistente',
            'exp-alianca-date2': '10/2026 - Atual',
            'exp-alianca-t1': 'Desenvolvimento de Aplicações e Integração de APIs',
            'exp-alianca-t2': 'Arquitetura e Governança de Dados com Power Platform',
            'exp-alianca-t3': 'Automação de Processos e envio de notificações',
            'exp-alianca-t4': 'Análise de Requisitos e modelagem de soluções',
            'exp-almeida-role1': 'Assistente de Dados e BI',
            'exp-almeida-role2': 'Suporte de TI',
            'exp-almeida-role3': 'Expedição',
            'exp-almeida-t1-1': 'Desenvolvimento de Dashboards Estratégicos (Power BI / DAX)',
            'exp-almeida-t1-2': 'Rotinas em Python (Pandas/NumPy) para limpeza de dados',
            'exp-almeida-t1-3': 'Modelos de previsibilidade de vendas (Machine Learning)',
            'exp-almeida-t2-1': 'Manutenção preventiva/corretiva e montagem',
            'exp-almeida-t2-2': 'Cabeamento de redes e suporte ao usuário',
            'exp-almeida-t3-1': 'Recebimento e entrada de materiais',
            'exp-almeida-t3-2': 'Controle sistêmico de estoque e ERP',
            'skills-title': 'Minhas Habilidades',
            'skills-data': 'Dados & Data Science',
            'skills-automation': 'Integração & Automação',
            'skills-software': 'Desenvolvimento de Software',
            'projects-title': 'Projetos em Destaque',
            'proj1-title': 'Dashboard Analítico',
            'proj1-desc': 'Desenvolvimento de um dashboard interativo no Power BI para acompanhamento de KPIs e previsibilidade de vendas.',
            'proj2-desc': 'Aplicativo desenvolvido para monitoramento de automações do CX (Setor da Aliança), com base em SharePoint.',
            'proj3-title': 'Fluxo - Clientes sem Cadastro',
            'proj3-desc': 'Fluxo que identifica novos registros sem cadastro na Contact List e dispara um e-mail automático ao setor responsável para realizar o cadastro.',
            'proj4-title': 'Fluxo - Envio de Lista de Pendência',
            'proj4-desc': 'Fluxo que coleta todos os Bookings pendentes no sistema E-cargo e dispara uma mensagem automática no Teams com as informações: Data, Número, Nome, Time (Segmentação) e motivo da pendência.',
            'btn-details': 'Ver Detalhes',
            'btn-see-more': 'Veja mais',
            'btn-see-less': 'Veja menos',
            'contact-title': 'Entre em Contato',
            'contact-subtitle': 'Vamos Conversar!',
            'contact-desc': 'Sinta-se à vontade para entrar em contato para discutir oportunidades de automação, análise de dados ou desenvolvimento de soluções.',
            'label-name': 'Nome',
            'label-email': 'E-mail',
            'label-message': 'Mensagem',
            'placeholder-name': 'Seu nome completo',
            'placeholder-email': 'seu.email@exemplo.com',
            'placeholder-message': 'Como posso ajudar?',
            'btn-send': 'Enviar Mensagem',
            'footer-text': '&copy; 2026. Desenvolvido com foco em eficiência e inovação.',
            'whatsapp-tooltip': 'Fale comigo!'
        },
        'en': {
            'page-title': 'Portfolio | Automation & Data',
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-career': 'Career',
            'nav-skills': 'Skills',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            'hero-subtitle': "Hi, I work with",
            'hero-title': 'Automation <br> & <span class="highlight">Data</span>',
            'hero-description': 'Transforming manual processes into scalable solutions and operational intelligence with Power Platform, SQL, and Python.',
            'btn-contact': 'Get in Touch',
            'btn-projects': 'View Projects',
            'about-title': 'About Me',
            'about-subtitle': 'Get to know Jean',
            'about-p1': 'Professional with solid experience in corporate software development, data analysis, and process automation. Experienced in building scalable applications using Python, JavaScript (React, Angular, FastAPI) and designing robust integration and database architectures (PostgreSQL, SQL Server).',
            'about-p2': 'Specialist in Business Intelligence and Data Science, proficient in building strategic dashboards (Power BI, Advanced DAX), processing noisy data (Pandas, NumPy), and implementing Machine Learning models (Scikit-learn) for predictability and decision support.',
            'about-p3': 'Strong experience in the Microsoft Power Platform ecosystem (Power Apps, Power Automate, SharePoint), developing automated routines, API integration, and corporate interfaces focused on operational efficiency and data governance.',
            'about-p4': 'Direct involvement in operational requirements gathering, technical solution modeling, and relationship with complex databases, always prioritizing productivity, usability, and the standardization of systemic flows.',
            'about-p5': 'Undergraduate in Information Systems, applying academic concepts directly to real business challenges. I have an analytical and results-oriented profile, working on end-to-end projects to deliver measurable impact and transform business needs into efficient technological solutions.',
            'career-title': 'Professional Career',
            'exp-alianca-role': 'Intern',
            'exp-alianca-date': '04/2025 - 09/2026',
            'exp-alianca-role2': 'Assistant',
            'exp-alianca-date2': '10/2026 - Present',
            'exp-alianca-t1': 'Application Development and API Integration',
            'exp-alianca-t2': 'Data Architecture and Governance with Power Platform',
            'exp-alianca-t3': 'Process Automation and notification dispatch',
            'exp-alianca-t4': 'Operational Requirements Analysis and solution modeling',
            'exp-almeida-role1': 'Data and BI Assistant',
            'exp-almeida-role2': 'IT Support',
            'exp-almeida-role3': 'Expedition',
            'exp-almeida-t1-1': 'Strategic Dashboard Development (Power BI / DAX)',
            'exp-almeida-t1-2': 'Python routines (Pandas/NumPy) for data cleaning',
            'exp-almeida-t1-3': 'Sales predictability models (Machine Learning)',
            'exp-almeida-t2-1': 'Preventive/corrective maintenance and assembly',
            'exp-almeida-t2-2': 'Network cabling and user support',
            'exp-almeida-t3-1': 'Receiving and entering materials',
            'exp-almeida-t3-2': 'Systemic inventory control and ERP',
            'skills-title': 'My Skills',
            'skills-data': 'Data & Data Science',
            'skills-automation': 'Integration & Automation',
            'skills-software': 'Software Development',
            'projects-title': 'Featured Projects',
            'proj1-title': 'Analytical Dashboard',
            'proj1-desc': 'Development of an interactive dashboard in Power BI for KPI monitoring and sales predictability.',
            'proj2-desc': 'App developed for monitoring CX automations (Aliança sector), based on SharePoint.',
            'proj3-title': 'Flow - Unregistered Customers',
            'proj3-desc': 'Flow that identifies new records without registration in the Contact List and triggers an automatic email to the responsible sector to perform the registration.',
            'proj4-title': 'Flow - Sending Pending List',
            'proj4-desc': 'Flow that collects all pending Bookings in the E-cargo system and triggers an automatic message on Teams with info: Date, Number, Name, Team (Segmentation) and reason for pendency.',
            'btn-details': 'View Details',
            'btn-see-more': 'See more',
            'btn-see-less': 'See less',
            'contact-title': 'Get in Touch',
            'contact-subtitle': "Let's Talk!",
            'contact-desc': 'Feel free to contact me to discuss automation opportunities, data analysis, or solution development.',
            'label-name': 'Name',
            'label-email': 'Email',
            'label-message': 'Message',
            'placeholder-name': 'Your full name',
            'placeholder-email': 'your.email@example.com',
            'placeholder-message': 'How can I help?',
            'btn-send': 'Send Message',
            'footer-text': '&copy; 2026. Developed with focus on efficiency and innovation.',
            'whatsapp-tooltip': 'Chat with me!'
        }
    };

    // Project Details Data
    const projectDetails = {
        '1': {
            img: '', // Sem imagem específica no momento, vai usar o ícone
            icon: 'fas fa-chart-bar',
            tags: ['Power BI', 'SQL'],
            titleKey: 'proj1-title',
            desc: {
                'pt': 'Este projeto consiste no desenvolvimento completo de um Dashboard Analítico interativo utilizando o Power BI. O foco principal foi a criação de uma ferramenta visual e dinâmica para o acompanhamento de Indicadores-Chave de Desempenho (KPIs) cruciais para o negócio. Além do monitoramento em tempo real, o dashboard conta com modelos preditivos integrados para auxiliar na previsibilidade de vendas, permitindo tomadas de decisão mais ágeis e baseadas em dados consistentes extraídos via SQL.',
                'en': 'This project consists of the complete development of an interactive Analytical Dashboard using Power BI. The main focus was creating a visual and dynamic tool for monitoring crucial Key Performance Indicators (KPIs) for the business. In addition to real-time monitoring, the dashboard features integrated predictive models to assist in sales predictability, allowing for more agile decision-making based on consistent data extracted via SQL.'
            }
        },
        '2': {
            img: 'Projetos/Automation Monitor.PNG',
            icon: 'fas fa-desktop',
            tags: ['Power Apps', 'SharePoint'],
            titleKey: 'proj2-title', // Custom title key or direct title
            titlePt: 'Power Apps - Automation Monitor',
            titleEn: 'Power Apps - Automation Monitor',
            desc: {
                'pt': 'Aplicativo corporativo desenvolvido internamente na plataforma Power Apps, desenhado especificamente para o setor de Customer Experience (CX) da Aliança. O objetivo central da ferramenta é fornecer uma interface centralizada e amigável para o monitoramento contínuo das diversas automações ativas no setor. Utilizando o SharePoint como banco de dados (lista) no backend, o aplicativo garante rastreabilidade, registro de logs e controle operacional, reduzindo o tempo de resolução de falhas.',
                'en': 'Corporate application developed internally on the Power Apps platform, specifically designed for the Customer Experience (CX) sector at Aliança. The central objective of the tool is to provide a centralized and user-friendly interface for the continuous monitoring of various active automations in the sector. Using SharePoint as the backend database (list), the application ensures traceability, log recording, and operational control, reducing failure resolution time.'
            }
        },
        '3': {
            img: 'Projetos/Fluxo - Clientes sem cadastro.PNG',
            icon: 'fas fa-users-cog',
            tags: ['Power Automate'],
            titleKey: 'proj3-title',
            desc: {
                'pt': 'Uma solução de automação crítica criada no Power Automate para garantir a integridade da base de dados de clientes. O fluxo opera monitorando constantemente as entradas e identifica de forma proativa novos registros que não possuem o cadastro completo na Contact List. Assim que uma anomalia é detectada, o sistema dispara automaticamente um e-mail de alerta para a equipe responsável, garantindo que o cadastro seja realizado rapidamente, evitando gargalos no atendimento e faturamento.',
                'en': 'A critical automation solution created in Power Automate to ensure customer database integrity. The flow operates by constantly monitoring inputs and proactively identifies new records that do not have a complete profile in the Contact List. As soon as an anomaly is detected, the system automatically triggers an alert email to the responsible team, ensuring that the registration is carried out quickly, avoiding bottlenecks in service and billing.'
            }
        },
        '4': {
            img: 'Projetos/Fluxo - Envio da lista de Pendencia.PNG',
            icon: 'fas fa-clipboard-list',
            tags: ['Power Automate', 'Teams'],
            titleKey: 'proj4-title',
            desc: {
                'pt': 'Automação desenvolvida para otimizar a comunicação interna e o controle de processos logísticos. O fluxo de Power Automate faz uma varredura sistêmica para coletar todos os Bookings (reservas) que constam como pendentes no sistema E-cargo. Em seguida, os dados são compilados e uma notificação detalhada é disparada automaticamente no Microsoft Teams, informando: Data, Número da reserva, Nome do cliente, Time de Segmentação responsável e o motivo exato da pendência, agilizando drasticamente a resolução.',
                'en': 'Automation developed to optimize internal communication and control of logistics processes. The Power Automate flow systematically scans to collect all Bookings that are listed as pending in the E-cargo system. Then, the data is compiled, and a detailed notification is automatically triggered in Microsoft Teams, informing: Date, Booking Number, Customer Name, Responsible Segmentation Team, and the exact reason for the pendency, drastically speeding up resolution.'
            }
        }
    };

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        langText.textContent = lang.toUpperCase();
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        // Update See More Button text if initialized
        if (typeof updateSeeMoreButtonText === 'function') {
            updateSeeMoreButtonText();
        }
    }

    langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'pt' ? 'en' : 'pt';
        updateLanguage(nextLang);
    });

    // --- See More Projects Logic ---
    const seeMoreBtn = document.getElementById('see-more-btn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let isShowingMore = false;

    function updateSeeMoreButtonText() {
        if (!seeMoreBtn) return;
        if (isShowingMore) {
            seeMoreBtn.textContent = translations[currentLang]['btn-see-less'];
        } else {
            seeMoreBtn.textContent = translations[currentLang]['btn-see-more'];
        }
    }

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            isShowingMore = !isShowingMore;
            hiddenProjects.forEach(project => {
                if (isShowingMore) {
                    project.style.setProperty('display', 'flex', 'important');
                    // Reset animation for smooth appearance
                    project.style.animation = 'none';
                    project.offsetHeight; /* trigger reflow */
                    project.style.animation = null;
                } else {
                    project.style.setProperty('display', 'none', 'important');
                }
            });
            updateSeeMoreButtonText();
        });
    }

    // Initialize language
    updateLanguage(currentLang);

    // --- Modal Logic ---
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    
    // Modal Elements
    const modalImg = document.getElementById('modal-img');
    const modalIconPlaceholder = document.getElementById('modal-icon-placeholder');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const modalDesc = document.getElementById('modal-desc');

    function openModal(projectId) {
        const data = projectDetails[projectId];
        if (!data) return;

        // Set Image or Icon
        if (data.img) {
            modalImg.src = data.img;
            modalImg.style.display = 'block';
            modalIconPlaceholder.style.display = 'none';
        } else {
            modalImg.style.display = 'none';
            modalIcon.className = data.icon;
            modalIconPlaceholder.style.display = 'flex';
        }

        // Set Title
        if (data.titleKey && translations[currentLang][data.titleKey]) {
            modalTitle.innerHTML = translations[currentLang][data.titleKey];
        } else {
            modalTitle.innerHTML = currentLang === 'pt' ? data.titlePt : data.titleEn;
        }

        // Set Tags
        modalTags.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        // Set Extended Description
        modalDesc.innerHTML = data.desc[currentLang];

        // Show Modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Sticky Header & Active Link on Scroll ---
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Update
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.mobile-menu-toggle i');

    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // --- Form Handling (Formspree AJAX) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Loading state
            submitBtn.disabled = true;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = currentLang === 'pt' ? 'Enviando...' : 'Sending...';
            formStatus.style.display = 'none';
            formStatus.className = 'form-status';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.textContent = currentLang === 'pt'
                        ? '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.'
                        : '✅ Message sent successfully! I will get back to you soon.';
                    formStatus.classList.add('form-status--success');
                    formStatus.style.display = 'block';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    const errorMsg = data.errors
                        ? data.errors.map(err => err.message).join(', ')
                        : (currentLang === 'pt' ? 'Ocorreu um erro. Tente novamente.' : 'An error occurred. Please try again.');
                    formStatus.textContent = '❌ ' + errorMsg;
                    formStatus.classList.add('form-status--error');
                    formStatus.style.display = 'block';
                }
            } catch (error) {
                formStatus.textContent = currentLang === 'pt'
                    ? '❌ Falha na conexão. Verifique sua internet e tente novamente.'
                    : '❌ Connection failed. Check your internet and try again.';
                formStatus.classList.add('form-status--error');
                formStatus.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }
});
