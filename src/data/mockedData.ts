// stacks import
import iconTypescript from '../assets/stacks/iconTypescript.png'
import iconReact from '../assets/stacks/iconReact.png'
import iconHtml from '../assets/stacks/iconHtml.png'
import iconCss from '../assets/stacks/iconCss.png'
import iconJavascript from '../assets/stacks/iconJavascript.png'
import iconNext from '../assets/stacks/iconNext.png'
import iconTailwind from '../assets/stacks/iconTailwind.png'

// projects import
import coffeeIcon from '../assets/projects/theCoffeeList/theCoffeeListIcon.png'
import coffeePreview from '../assets/projects/theCoffeeList/theCoffeeListPreview.png'
import theCoffeeListImage1 from '../assets/projects/theCoffeeList/image1.png'
import theCoffeeListImage2 from '../assets/projects/theCoffeeList/image2.png'
import theCoffeeListImage3 from '../assets/projects/theCoffeeList/image3.png'
import theCoffeeListImage4 from '../assets/projects/theCoffeeList/image4.png'
import portfolioIcon from '../assets/projects/portfolio/portfolioIcon.png'
import portfolioPreview from '../assets/projects/portfolio/portfolioPreview.png'
import portfolioImage1 from '../assets/projects/portfolio/image1.png'
import portfolioImage2 from '../assets/projects/portfolio/image2.png'
import portfolioImage3 from '../assets/projects/portfolio/image3.png'
import githubBlogIcon from '../assets/projects/githubBlog/githubBlogIcon.png'
import githubBlogPreview from '../assets/projects/githubBlog/githubBlogPreview.png'
import githubImage1 from '../assets/projects/githubBlog/image1.png'
import githubImage2 from '../assets/projects/githubBlog/image2.png'
import quickStoreIcon from '../assets/projects/quickStore/quickStoreIcon1.png'
import quickStorePreview from '../assets/projects/quickStore/quickStorePreview.png'
import quickStoreImage1 from '../assets/projects/quickStore/image1.png'
import quickStoreImage2 from '../assets/projects/quickStore/image2.png'
import quickStoreImage3 from '../assets/projects/quickStore/image3.png'

// contacts import
import whatsIcon from '../assets/contact/whatsIcon.png'
import outlookIcon from '../assets/contact/outlookIcon.png'
import linkedinIcon from '../assets/contact/linkedinIcon.png'

// achievements import
import reactCertificate from '../assets/achievements/reactCertificateRocketseat.png'
import weekAiRocket from '../assets/achievements/weekAiRocket2025.png'
import nlwAgents from '../assets/achievements/nlwAgents2025.png'
import certificateIcon from '../assets/achievements/certificateDefaultIcon.png'
import gitCertificate from '../assets/achievements/gitCertificate.png'

export const achievements = [
  { title: 'Certificação ReactJs', imageSrc: reactCertificate, description: 'Obtive o certificado de ReactJS pela Rocketseat ao longo de uma jornada prática e conceitual que envolveu a criação de aplicações SPA, o consumo de APIs com foco em desempenho, a construção de sistemas de componentes reutilizáveis com Design System e Storybook, e o desenvolvimento de aplicações completas com Next.js. Essa experiência consolidou meu domínio da biblioteca React e aprofundou minha compreensão das ferramentas modernas que a cercam.', certificateLink: 'https://app.rocketseat.com.br/certificates/ceee3b5f-d1a5-4363-9949-09a4550dc7d2' },
  { title: 'Missão IA: Domine Automações Inteligentes em 4 Dias - Inteligência Artificial', imageSrc: weekAiRocket, description: 'Obtive certificação pela Rocketseat em automações e engenharia de prompts, explorando temas como agentes de IA, criação de fluxos com N8N na nuvem, estruturação de prompts eficazes, comparação entre bons e maus exemplos, além de ferramentas para testes e aplicação prática de automações utilizando conceitos de MCP. Essa experiência aprofundou minha capacidade de integrar inteligência artificial com processos automatizados de maneira estratégica e eficiente', certificateLink: 'https://app.rocketseat.com.br/certificates/04e112b6-5987-464a-af16-443f0fe04e84' },
  { title: 'NLW Agents - Avançado 2025', imageSrc: nlwAgents, description: 'Durante a semana do NLW Agents 2025, promovida pela Rocketseat | Faculdade de Tecnologia, participei de uma imersão prática voltada à construção de aplicações full-stack com foco em inteligência artificial. Aprendi a configurar back-end com Node.js e Fastify, utilizar Docker e PostgreSQL com Drizzle ORM, desenvolver interfaces modernas com React, Vite e Tailwind CSS, gerenciar rotas com React Router DOM e consumir APIs com React Query. Também explorei a criação de hooks personalizados, gravação e upload de áudio no navegador e integração com IA para transcrição, geração de embeddings e respostas inteligentes utilizando a API do Gemini. Essa experiência consolidou minha capacidade de aplicar tecnologias atuais em soluções completas e inovadoras.', certificateLink: 'https://app.rocketseat.com.br/certificates/fbdba2db-c09c-40d5-aadd-3c441a427a47' },
  { title: 'Comunicação Assertiva', imageSrc: certificateIcon, description: 'Obtive o certificado em Comunicação Assertiva pela Rocketseat, com foco no desenvolvimento de habilidades interpessoais que fortalecem a clareza e a eficácia na troca de informações. A jornada abordou práticas como escuta ativa, feedback construtivo, autenticidade, comunicação não-verbal e estratégias para minimizar ruídos, além de técnicas colaborativas e conceitos de pragmática da comunicação. Esse aprendizado consolidou minha capacidade de comunicar ideias com objetividade, especificidade e assertividade profissional, garantindo compreensão mútua em ambientes diversos.', certificateLink: 'https://app.rocketseat.com.br/certificates/ff682793-7c8d-4f9e-810b-b8f5366d7550' },
  { title: 'Git Completo: Do Básico ao Avançado', imageSrc: gitCertificate, description: 'Concluí com êxito o curso Git Completo: Do Básico ao Avançado, ministrado por Gabriel Ferrari na Udemy. Esse certificado comprova minha formação integral na ferramenta Git, validada diretamente pela plataforma, representando o domínio de conceitos fundamentais e avançados de versionamento. Ao longo do curso, pratiquei comandos essenciais como git init, git add, git commit, git branch, git merge, git push e git pull, além de técnicas como rebase, resolução de conflitos, uso de tags e gerenciamento de histórico com stash.', certificateLink: 'https://www.udemy.com/certificate/UC-630020b9-2971-49ba-a279-bcbdd8183c63/' },
]

export const stackIcons = [
  { title: 'TypeScript', imageSrc: iconTypescript },
  { title: 'React', imageSrc: iconReact },
  { title: 'HTML5', imageSrc: iconHtml },
  { title: 'JavaScript', imageSrc: iconJavascript },
  { title: 'CSS3', imageSrc: iconCss },
  { title: 'Next.js', imageSrc: iconNext },
  { title: 'Tailwind CSS', imageSrc: iconTailwind },
]

export const contacts = [
  { title: 'WhatsApp', iconSrc: whatsIcon },
  { title: 'Outlook', iconSrc: outlookIcon },
  { title: 'Linkedin', iconSrc: linkedinIcon },
]

export const projects = [
  {
    imagePreviewSrc: coffeePreview,
    title: 'The Coffee List',
    shortDescription: 'The Coffee List é um projeto desenvolvido como desafio do segundo modulo de React da Rocketseat. A intenção principal do desenvolvimento é reforçar o conhecimento aprendido no curso até o momento.',
    fullDescription: 'The Coffee List é um projeto desenvolvido como desafio do segundo modulo de React da Rocketseat. A intenção principal do desenvolvimento é reforçar o conhecimento aprendido no curso até o momento.',
    imageSrc: coffeeIcon,
    deployLink: 'https://github-blog-virid-zeta.vercel.app',
    repositoryLink: 'https://github.com/carlinhosantosjr/github-blog',
    imagesProject: [
      { imageSrc: theCoffeeListImage1, title: 'Imagem 1' },
      { imageSrc: theCoffeeListImage2, title: 'Imagem 2' },
      { imageSrc: theCoffeeListImage3, title: 'Imagem 3' },
      { imageSrc: theCoffeeListImage4, title: 'Imagem 4' },
    ],
    stacksProject: [
      { title: 'React', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
  {
    imagePreviewSrc: quickStorePreview,
    title: 'Quick Store',
    shortDescription: 'Quick Store é um projeto na qual é integrado com api\'s da plataforma de pagamentos stripe para que possamos realizar busca dos produtos e finalizar compras.',
    fullDescription: 'Este projeto foi desenvolvido como desafio no curso de ReactJs da Rocketseat e consiste em um e-commerce integrado com a API da Stripe; sua arquitetura explora fortemente os recursos de server-side rendering oferecidos pelo Next.js, garantindo alta performance; foram utilizadas tecnologias modernas como Next.js, TypeScript, Stitches para estilização, Axios para comunicação com APIs, e Context API para gerenciamento de estado, compondo uma solução robusta e funcional voltada para o aprendizado prático de desenvolvimento web.',
    imageSrc: quickStoreIcon,
    deployLink: '',
    repositoryLink: 'https://github.com/carlinhosantosjr/quick-store',
    imagesProject: [
      { imageSrc: quickStoreImage1, title: 'Imagem 1' },
      { imageSrc: quickStoreImage2, title: 'Imagem 2' },
      { imageSrc: quickStoreImage3, title: 'Imagem 3' },
    ],
    stacksProject: [
      { title: 'Nextjs', src: iconNext },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
  {
    imagePreviewSrc: portfolioPreview,
    title: 'Portfolio Pessoal',
    shortDescription: 'Meu portfólio foi criado para apresentar meus principais projetos e certificados adquiridos ao longo da minha trajetória. Com visual inspirado na Steam, combina tecnologia e personalidade para entregar uma experiência imersiva e organizada.',
    fullDescription: 'The Coffee List é um projeto desenvolvido como desafio do segundo modulo de React da Rocketseat. A intenção principal do desenvolvimento é reforçar o conhecimento aprendido no curso até o momento.',
    imageSrc: portfolioIcon,
    deployLink: 'https://github-blog-virid-zeta.vercel.app',
    repositoryLink: 'https://github.com/carlinhosantosjr/github-blog',
    imagesProject: [
      { imageSrc: portfolioImage1, title: 'Imagem 1' },
      { imageSrc: portfolioImage2, title: 'Imagem 2' },
      { imageSrc: portfolioImage3, title: 'Imagem 3' },
    ],
    stacksProject: [
      { title: 'Reactjs', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
      { title: 'Tailwindcss', src: iconTailwind },
    ],
  },
  {
    imagePreviewSrc: githubBlogPreview,
    title: 'Github Blog',
    shortDescription: 'Github Blog foi desenvolvido como desafio para o curso de React da Rocketseat. Na qual utilizamos de api do github para simularmos um blog.',
    fullDescription: 'Este projeto foi desenvolvido como parte de um desafio do curso de ReactJs da Rocketseat. A proposta é construir uma aplicação que simula um blog consumindo dados da API do GitHub, onde cada post corresponde a uma issue de um repositório. Utilizando React com TypeScript, o projeto traz uma estrutura moderna e funcional. A estilização é feita com Styled Components, a navegação com React Router, e a comunicação com a API é gerenciada via Axios. O gerenciamento global de estado é feito através da Context API, proporcionando uma experiência fluida e integrada.',
    imageSrc: githubBlogIcon,
    deployLink: 'https://github-blog-virid-zeta.vercel.app',
    repositoryLink: 'https://github.com/carlinhosantosjr/github-blog',
    imagesProject: [
      { imageSrc: githubImage1, title: 'Imagem 1' },
      { imageSrc: githubImage2, title: 'Imagem 2' }],
    stacksProject: [
      { title: 'React', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
]
