// stacks import
import iconTypescript from '../assets/stacks/iconTypescript.png'
import iconReact from '../assets/stacks/iconReact.png'
import iconHtml from '../assets/stacks/iconHtml.png'
import iconCss from '../assets/stacks/iconCss.png'
import iconJavascript from '../assets/stacks/iconJavascript.png'
import iconNext from '../assets/stacks/iconNext.png'
import iconTailwind from '../assets/stacks/iconTailwind.png'

// projects import
import coffeeIcon from '../assets/projects/coffeeIcon.png'
import coffeePreview from '../assets/projects/coffeeDeliveryPreview.png'
import portfolioIcon from '../assets/projects/portfolioIcon.png'
import githubBlogIcon from '../assets/projects/githubBlogIcon.png'
import igniteShopIcon from '../assets/projects/igniteShopIcon.png'
import githubBlogPreview from '../assets/projects/githubBlogPreview.png'
import igniteShopPreview from '../assets/projects/igniteShopPreview.png'
import portfolioPreview from '../assets/projects/portfolioPreview.png'

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
  { title: 'Certificação ReactJs', iconSrc: reactCertificate, description: 'Obtive o certificado de ReactJS pela Rocketseat ao longo de uma jornada prática e conceitual que envolveu a criação de aplicações SPA, o consumo de APIs com foco em desempenho, a construção de sistemas de componentes reutilizáveis com Design System e Storybook, e o desenvolvimento de aplicações completas com Next.js. Essa experiência consolidou meu domínio da biblioteca React e aprofundou minha compreensão das ferramentas modernas que a cercam.', certificateLink: 'https://app.rocketseat.com.br/certificates/ceee3b5f-d1a5-4363-9949-09a4550dc7d2' },
  { title: 'Missão IA: Domine Automações Inteligentes em 4 Dias - Inteligência Artificial', iconSrc: weekAiRocket, description: 'Obtive certificação pela Rocketseat em automações e engenharia de prompts, explorando temas como agentes de IA, criação de fluxos com N8N na nuvem, estruturação de prompts eficazes, comparação entre bons e maus exemplos, além de ferramentas para testes e aplicação prática de automações utilizando conceitos de MCP. Essa experiência aprofundou minha capacidade de integrar inteligência artificial com processos automatizados de maneira estratégica e eficiente', certificateLink: 'https://app.rocketseat.com.br/certificates/04e112b6-5987-464a-af16-443f0fe04e84' },
  { title: 'NLW Agents - Avançado 2025', iconSrc: nlwAgents, description: 'Durante a semana do NLW Agents 2025, promovida pela Rocketseat | Faculdade de Tecnologia, participei de uma imersão prática voltada à construção de aplicações full-stack com foco em inteligência artificial. Aprendi a configurar back-end com Node.js e Fastify, utilizar Docker e PostgreSQL com Drizzle ORM, desenvolver interfaces modernas com React, Vite e Tailwind CSS, gerenciar rotas com React Router DOM e consumir APIs com React Query. Também explorei a criação de hooks personalizados, gravação e upload de áudio no navegador e integração com IA para transcrição, geração de embeddings e respostas inteligentes utilizando a API do Gemini. Essa experiência consolidou minha capacidade de aplicar tecnologias atuais em soluções completas e inovadoras.', certificateLink: 'https://app.rocketseat.com.br/certificates/fbdba2db-c09c-40d5-aadd-3c441a427a47' },
  { title: 'Comunicação Assertiva', iconSrc: certificateIcon, description: 'Obtive o certificado em Comunicação Assertiva pela Rocketseat, com foco no desenvolvimento de habilidades interpessoais que fortalecem a clareza e a eficácia na troca de informações. A jornada abordou práticas como escuta ativa, feedback construtivo, autenticidade, comunicação não-verbal e estratégias para minimizar ruídos, além de técnicas colaborativas e conceitos de pragmática da comunicação. Esse aprendizado consolidou minha capacidade de comunicar ideias com objetividade, especificidade e assertividade profissional, garantindo compreensão mútua em ambientes diversos.', certificateLink: 'https://app.rocketseat.com.br/certificates/ff682793-7c8d-4f9e-810b-b8f5366d7550' },
  { title: 'Git Completo: Do Básico ao Avançado', iconSrc: gitCertificate, description: 'Concluí com êxito o curso Git Completo: Do Básico ao Avançado, ministrado por Gabriel Ferrari na Udemy. Esse certificado comprova minha formação integral na ferramenta Git, validada diretamente pela plataforma, representando o domínio de conceitos fundamentais e avançados de versionamento. Ao longo do curso, pratiquei comandos essenciais como git init, git add, git commit, git branch, git merge, git push e git pull, além de técnicas como rebase, resolução de conflitos, uso de tags e gerenciamento de histórico com stash.', certificateLink: 'https://www.udemy.com/certificate/UC-630020b9-2971-49ba-a279-bcbdd8183c63/' },
]

export const stackIcons = [
  { title: 'TypeScript', iconSrc: iconTypescript },
  { title: 'React', iconSrc: iconReact },
  { title: 'HTML5', iconSrc: iconHtml },
  { title: 'JavaScript', iconSrc: iconJavascript },
  { title: 'CSS3', iconSrc: iconCss },
  { title: 'Next.js', iconSrc: iconNext },
  { title: 'Tailwind CSS', iconSrc: iconTailwind },
]

export const contacts = [
  { title: 'WhatsApp', iconSrc: whatsIcon },
  { title: 'Outlook', iconSrc: outlookIcon },
  { title: 'Linkedin', iconSrc: linkedinIcon },
]

export const projects = [
  {
    imagePreviewSrc: coffeePreview,
    title: 'Coffee Delivery',
    description: 'Coffee Delivery é um projeto desenvolvido como desafio do segundo modulo de React da Rocketseat. A intenção principal do desenvolvimento é reforçar o conhecimento aprendido no curso até o momento.',
    iconSrc: coffeeIcon,
    stacksProject: [
      { title: 'React', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
  {
    imagePreviewSrc: igniteShopPreview,
    title: 'Ignite Shop',
    description: 'Ignite Shop é um projeto na qual é integrado com api\'s da plataforma de pagamentos stripe para que possamos realizar busca dos produtos e finalizar compras.',
    iconSrc: igniteShopIcon,
    stacksProject: [
      { title: 'Nextjs', src: iconNext },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
  {
    imagePreviewSrc: portfolioPreview,
    title: 'Portfolio Pessoal',
    description: 'Meu portfólio foi criado para apresentar meus principais projetos e certificados adquiridos ao longo da minha trajetória. Com visual inspirado na Steam, combina tecnologia e personalidade para entregar uma experiência imersiva e organizada.',
    iconSrc: portfolioIcon,
    stacksProject: [
      { title: 'Reactjs', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
      { title: 'Tailwindcss', src: iconTailwind },
    ],
  },
  {
    imagePreviewSrc: githubBlogPreview,
    title: 'Github Blog',
    description: 'Github Blog foi desenvolvido como desafio para o curso de React da Rocketseat.',
    iconSrc: githubBlogIcon,
    stacksProject: [
      { title: 'React', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
]
