const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const translations = {
  pt: {
    navProfile: 'Perfil', navData: 'Dados & BI', navTools: 'Ferramentas', navProjects: 'Projetos', navExperience: 'Experiência', navAbout: 'Além do código', resumeBtn: 'Currículo',
    heroEyebrow:'TECNOLOGIA • SOFTWARE • DADOS • AUTOMAÇÃO', heroTitle:'Desenvolvimento de Software • Dados & BI',
    heroCopy:'Profissional de tecnologia com experiência corporativa desde 2021 e atuação prática em <strong>SQL, Power BI, Python, modelagem de dados, automação e desenvolvimento de aplicações SaaS</strong>. Uma base técnica única para transformar problemas de negócio em dados, processos e software.',
    heroCta1:'Conhecer meu perfil', heroCta2:'Ver currículo', statusText:'Buscando oportunidades remotas',
    profileEyebrow:'PERFIL PROFISSIONAL', profileTitle:'Software, dados e automação trabalhando juntos.',
    card1Title:'Desenvolvimento de software', card1Text:'Construção e evolução de aplicações reais, passando por interface, regras de negócio, autenticação, banco de dados, APIs, arquitetura multiempresa e deploy.',
    card2Title:'Dados & Business Intelligence', card2Text:'Experiência profissional com SQL, Power BI, DAX, Power Query, Python, ETL, análises executivas, indicadores, análises por safra/coorte e validação de regras de negócio.',
    card3Title:'Automação & integrações', card3Text:'Workflows com n8n e integrações com APIs, Excel e banco de dados para apoiar funis comerciais, onboarding, atualização de status, ETL e ingestão conforme o padrão da empresa.',
    dataEyebrow:'DADOS & BI', dataTitle:'Da consulta SQL à decisão de negócio.', dataLead:'Minha base em dados é profissional e corporativa. Trabalho com indicadores, modelagem, consultas, automações e regras de negócio sem expor informações internas ou confidenciais das empresas.',
    focus1Title:'Dashboards executivos', focus1Text:'Criação de dashboards para vendas, novos canais, produtos, operação e visão executiva.',
    focus2Title:'Análises avançadas', focus2Text:'Análises por safra/coorte, funis, performance por canal e leitura gerencial do negócio.',
    focus3Title:'ETL & ingestão', focus3Text:'Extração via API, tratamento de dados, ETL e ingestão em banco de dados conforme padrões internos.',
    focus4Title:'Automação comercial', focus4Text:'Fluxos com n8n cobrindo entrada de leads, onboarding, atualizações de status e liberação de acesso à plataforma.',
    toolsEyebrow:'FERRAMENTAS & TECNOLOGIAS', toolsTitle:'Experiência prática nas ferramentas que geram resultado.', toolsLead:'Abaixo estão algumas das principais tecnologias e ferramentas que melhor representam minha atuação profissional e meus projetos.',
    tool1Title:'Power BI', tool1Text:'Desenvolvimento de dashboards para diferentes setores, com foco em visão executiva, vendas, novos canais, produtos, KPIs e análises por safra/coorte.',
    tool2Title:'n8n', tool2Text:'Automação de workflows simples e robustos para operação de vendas de cursos: entrada de leads, onboarding, atualização de status, integração com Excel, APIs, banco de dados e acesso à plataforma.',
    tool3Title:'React & TypeScript', tool3Text:'Construção de interfaces modernas e responsivas para aplicações SaaS, com foco em componentes, experiência do usuário e manutenção.',
    tool4Title:'Python, ETL & APIs', tool4Text:'Extração de dados, transformação, ingestão e automação de processos usando Python, APIs e rotinas de ETL.',
    tool5Title:'SQL & PostgreSQL', tool5Text:'Consultas, modelagem relacional, views, métricas e organização de dados para apoiar operações, indicadores e software.',
    tool6Title:'Supabase', tool6Text:'Auth, PostgreSQL, RLS e Realtime aplicados ao desenvolvimento de produtos multiempresa com regras de acesso e dados protegidos.',
    projectsEyebrow:'PROJETOS REAIS', projectsTitle:'Software aplicado a problemas reais.', projectsLead:'Os produtos possuem código-fonte privado por segurança e propriedade intelectual. O portfólio apresenta a dor, solução, tecnologias, arquitetura e somente os ambientes públicos de produção.',
    expEyebrow:'EXPERIÊNCIA', expTitle:'Experiência corporativa em tecnologia desde 2021.', expLead:'Minha trajetória combina BI, dados, automação, suporte e desenvolvimento, unindo visão analítica com construção de software.',
    factaRole:'Analista de BI Jr', factaB1:'Desenvolvimento e evolução de dashboards e indicadores em Power BI, com medidas DAX, consultas SQL e validação de regras de negócio.', factaB2:'Atuação com análises para diferentes demandas de negócio, apoiando leitura executiva, acompanhamento operacional e tomada de decisão.',
    impulseRole:'Analista de Dados', impulseB1:'Desenvolvimento de dashboards e análises para áreas como vendas, novos canais, produtos e visão executiva.', impulseB2:'Construção de análises por safra/coorte, performance por canal e indicadores gerenciais com Power BI, SQL e Power Query.', impulseB3:'Automação com n8n, atualização de status em Excel — ferramenta preferida pela empresa — extração via APIs, ETL e ingestão em banco de dados conforme padrões internos.',
    sicrediRole:'Analista Digital I / Estagiário de TI', sicrediB1:'Experiência com SQL/Teradata, Python, automação, indicadores e tratamento de dados em ambiente corporativo com atenção à LGPD.',
    lidyaRole:'Suporte N1 e Operações com IA', lidyaB1:'Atuação com suporte técnico N1, triagem e resolução de incidentes, além de acompanhamento de robôs de IA.',
    infoEyebrow:'FORMAÇÃO & IDIOMAS', infoTitle:'Base técnica em evolução contínua.',
    eduTitle:'Formação', eduText:'<strong>FADERGS — Análise e Desenvolvimento de Sistemas</strong><br>Cursando, com conclusão prevista para <strong>dezembro de 2027</strong>.<br><br>Estudos e certificações em Python para Dados, Power BI, SQL, MySQL e ferramentas de análise.',
    langTitle:'Idiomas', langText:'<strong>Português:</strong> nativo.<br><strong>Inglês:</strong> nível técnico bom para leitura de documentação, escrita e pesquisa; oralidade/conversação básica.',
    aboutEyebrow:'ALÉM DO CÓDIGO', aboutTitle:'Curiosidade por tecnologia e paixão pela estrada.',
    aboutP1:'Tenho interesse por tecnologia, inteligência artificial e automação, principalmente quando essas áreas são aplicadas para resolver problemas reais, simplificar processos e criar soluções úteis no dia a dia. Também gosto de desenvolver projetos próprios como forma de aprender, testar novas ideias e evoluir tecnicamente de maneira prática.',
    aboutP2:'Fora da tecnologia, sou apaixonado por carros e passo um bom tempo cuidando do meu próprio carro, acompanhando manutenção e pensando em melhorias. Também gosto muito de viajar, especialmente de carro. Para mim, pegar a estrada traz uma sensação de liberdade, permite conhecer novos lugares e cria bons momentos de lazer com a família.',
    ctaEyebrow:'OPORTUNIDADES', ctaTitle:'Busco minha próxima oportunidade remota em tecnologia.', ctaText:'Tenho interesse em Desenvolvimento de Software e em Dados/BI, especialmente em posições onde software, SQL, analytics e automação se conectem para resolver problemas reais.', cta1:'Abrir currículo', cta2:'Contato', footer:'Desenvolvimento de Software • Dados & BI • Automação'
  },
  en: {
    navProfile: 'Profile', navData: 'Data & BI', navTools: 'Tools', navProjects: 'Projects', navExperience: 'Experience', navAbout: 'Beyond code', resumeBtn: 'Resume',
    heroEyebrow:'TECH • SOFTWARE • DATA • AUTOMATION', heroTitle:'Software Development • Data & BI',
    heroCopy:'Technology professional with corporate experience since 2021 and hands-on work in <strong>SQL, Power BI, Python, data modeling, automation, and SaaS application development</strong>. A single technical foundation to turn business problems into data, processes, and software.',
    heroCta1:'View my profile', heroCta2:'View resume', statusText:'Open to remote opportunities',
    profileEyebrow:'PROFESSIONAL PROFILE', profileTitle:'Software, data, and automation working together.',
    card1Title:'Software development', card1Text:'Building and evolving real applications across UI, business rules, authentication, databases, APIs, multi-tenant architecture, and deployment.',
    card2Title:'Data & Business Intelligence', card2Text:'Professional experience with SQL, Power BI, DAX, Power Query, Python, ETL, executive analysis, KPIs, cohort analysis, and business-rule validation.',
    card3Title:'Automation & integrations', card3Text:'n8n workflows and integrations with APIs, Excel, and databases to support sales funnels, onboarding, status updates, ETL, and data ingestion following company standards.',
    dataEyebrow:'DATA & BI', dataTitle:'From SQL queries to business decisions.', dataLead:'My data foundation comes from real corporate environments. I work with KPIs, modeling, queries, automation, and business rules without exposing internal or confidential company information.',
    focus1Title:'Executive dashboards', focus1Text:'Dashboard development for sales, new channels, products, operations, and executive reporting.',
    focus2Title:'Advanced analysis', focus2Text:'Cohort analysis, funnel analysis, channel performance, and management-oriented business reading.',
    focus3Title:'ETL & ingestion', focus3Text:'API extraction, data transformation, ETL, and database ingestion aligned with internal company standards.',
    focus4Title:'Sales automation', focus4Text:'n8n workflows covering lead intake, onboarding, status updates, and platform access provisioning.',
    toolsEyebrow:'TOOLS & TECHNOLOGIES', toolsTitle:'Hands-on experience with tools that drive results.', toolsLead:'Below are some of the main technologies and tools that best represent my professional work and product experience.',
    tool1Title:'Power BI', tool1Text:'Dashboard development for multiple business areas, focused on executive reporting, sales, new channels, products, KPIs, and cohort analysis.',
    tool2Title:'n8n', tool2Text:'Simple and robust workflow automation for course sales operations: lead intake, onboarding, status updates, Excel integration, APIs, databases, and platform access.',
    tool3Title:'React & TypeScript', tool3Text:'Building modern, responsive interfaces for SaaS applications with focus on components, user experience, and maintainability.',
    tool4Title:'Python, ETL & APIs', tool4Text:'Data extraction, transformation, ingestion, and process automation using Python, APIs, and ETL routines.',
    tool5Title:'SQL & PostgreSQL', tool5Text:'Queries, relational modeling, views, metrics, and data organization to support operations, analytics, and software.',
    tool6Title:'Supabase', tool6Text:'Auth, PostgreSQL, RLS, and Realtime used to build multi-tenant products with access control and protected data.',
    projectsEyebrow:'REAL PRODUCTS', projectsTitle:'Software applied to real problems.', projectsLead:'The products have private source code for security and intellectual property reasons. The portfolio presents the problem, solution, technologies, architecture, and only public production links.',
    expEyebrow:'EXPERIENCE', expTitle:'Corporate technology experience since 2021.', expLead:'My background combines BI, data, automation, support, and development—connecting analytical thinking with software building.',
    factaRole:'BI Analyst Jr', factaB1:'Development and evolution of Power BI dashboards and KPIs, including DAX measures, SQL queries, and business-rule validation.', factaB2:'Work focused on business analysis, executive visibility, operational tracking, and decision support.',
    impulseRole:'Data Analyst', impulseB1:'Dashboard and analysis development for sales, new channels, products, and executive views.', impulseB2:'Cohort analysis, channel-performance tracking, and management KPIs built with Power BI, SQL, and Power Query.', impulseB3:'Automation with n8n, status updates in Excel—the company’s preferred tool—API extraction, ETL, and database ingestion following internal standards.',
    sicrediRole:'Digital Analyst I / IT Intern', sicrediB1:'Experience with SQL/Teradata, Python, automation, KPIs, and data handling in a corporate environment, with attention to data privacy requirements.',
    lidyaRole:'N1 Support and AI Operations', lidyaB1:'Technical support, incident triage/resolution, and monitoring of AI bots.',
    infoEyebrow:'EDUCATION & LANGUAGES', infoTitle:'A technical foundation in continuous growth.',
    eduTitle:'Education', eduText:'<strong>FADERGS — Systems Analysis and Development</strong><br>Currently enrolled, expected graduation in <strong>December 2027</strong>.<br><br>Additional studies and certifications in Python for Data, Power BI, SQL, MySQL, and analytics tools.',
    langTitle:'Languages', langText:'<strong>Portuguese:</strong> native.<br><strong>English:</strong> strong technical reading, writing, and research; basic spoken communication/conversation.',
    aboutEyebrow:'BEYOND CODE', aboutTitle:'Curiosity for technology and a passion for the road.',
    aboutP1:'I am interested in technology, artificial intelligence, and automation—especially when these areas are applied to solve real problems, simplify processes, and create useful day-to-day solutions. I also enjoy building personal projects as a practical way to learn, test ideas, and keep growing technically.',
    aboutP2:'Outside technology, I am passionate about cars and spend a good amount of time taking care of my own car, following maintenance and thinking about improvements. I also really enjoy road trips. For me, being on the road brings a sense of freedom, the chance to discover new places, and good leisure moments with my family.',
    ctaEyebrow:'OPPORTUNITIES', ctaTitle:'I am looking for my next remote opportunity in technology.', ctaText:'I am interested in Software Development and Data/BI roles, especially positions where software, SQL, analytics, and automation work together to solve real problems.', cta1:'Open resume', cta2:'Contact', footer:'Software Development • Data & BI • Automation'
  }
};
function applyLang(lang){
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  localStorage.setItem('portfolio_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}
const savedLang = localStorage.getItem('portfolio_lang');
const browserLang = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'pt';
applyLang(savedLang || browserLang);
document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', ()=>applyLang(btn.dataset.lang)));
