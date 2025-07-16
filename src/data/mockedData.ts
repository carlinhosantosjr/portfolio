// stacks import
import iconTypescript from '../assets/stacks/iconTypescript.png'
import iconReact from '../assets/stacks/iconReact.png'
import iconHtml from '../assets/stacks/iconHtml.png'
import iconCss from '../assets/stacks/iconCss.png'
import iconJavascript from '../assets/stacks/iconJavascript.png'
import iconNext from '../assets/stacks/iconNext.png'
import iconTailwind from '../assets/stacks/iconTailwind.png'

// projects import
import pizzaIcon from '../assets/projects/pizzaIcon.png'
import tshirtShop from '../assets/projects/tshirtShopIcon.png'
import coffeeIcon from '../assets/projects/coffeeIcon.png'
import coffeePreview from '../assets/projects/coffeeDeliveryPreview.png'
import portfolioIcon from '../assets/projects/portfolioIcon.png'
import githubBlogPreview from '../assets/projects/githubBlogPreview.png'
import igniteShopPreview from '../assets/projects/igniteShopPreview.png'

// contacts import
import whatsIcon from '../assets/contact/whatsIcon.png'
import outlookIcon from '../assets/contact/outlookIcon.png'
import linkedinIcon from '../assets/contact/linkedinIcon.png'

// achievements import
import reactCertificate from '../assets/achievements/reactCertificateRocketseat.png'
import weekAiRocket from '../assets/achievements/weekAiRocket2025.png'
import nlwAgents from '../assets/achievements/nlwAgents2025.png'
import certificateIcon from '../assets/achievements/certificateDefaultIcon.png'

export const achievements = [
  { title: 'Certificação ReactJs', src: reactCertificate },
  { title: 'Semana IA', src: weekAiRocket },
  { title: 'NLW Agents 2025', src: nlwAgents },
  { title: 'Comunicação Assertiva', src: certificateIcon },
]

export const stackIcons = [
  { title: 'TypeScript', src: iconTypescript },
  { title: 'React', src: iconReact },
  { title: 'HTML5', src: iconHtml },
  { title: 'JavaScript', src: iconJavascript },
  { title: 'CSS3', src: iconCss },
  { title: 'Next.js', src: iconNext },
  { title: 'Tailwind CSS', src: iconTailwind },
]

export const projectsIcons = [
  { title: 'Pizza Shop', src: pizzaIcon },
  { title: 'Tshirt Shop', src: tshirtShop },
  { title: 'Coffee Shop', src: coffeeIcon },
  { title: 'Projeto Portfólio', src: portfolioIcon },
]

export const contacts = [
  { title: 'WhatsApp', src: whatsIcon },
  { title: 'Outlook', src: outlookIcon },
  { title: 'Linkedin', src: linkedinIcon },
]

export const projects = [
  {
    imagePreviewSrc: coffeePreview,
    title: 'Coffee Delivery',
    description: 'Coffee Delivery é um projeto desenvolvido como desafio do segundo modulo de React da Rocketseat. A intenção principal do desenvolvimento é reforçar o conhecimento aprendido no curso até o momento.',
    stacksProject: [
      { title: 'HTML', src: iconHtml },
      { title: 'CSS', src: iconCss },
      { title: 'React', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
  {
    imagePreviewSrc: githubBlogPreview,
    title: 'Github Blog',
    description: 'Github Blog foi desenvolvido como desafio para o curso de React da Rocketseat.',
    stacksProject: [
      { title: 'HTML', src: iconHtml },
      { title: 'CSS', src: iconCss },
      { title: 'React', src: iconReact },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
  {
    imagePreviewSrc: igniteShopPreview,
    title: 'Ignite Shop',
    description: 'Ignite Shop é um projeto na qual é integrado com api\'s da plataforma de pagamentos stripe para que possamos realizar busca dos produtos e finalizar compras.',
    stacksProject: [
      { title: 'HTML', src: iconHtml },
      { title: 'CSS', src: iconCss },
      { title: 'Nextjs', src: iconNext },
      { title: 'Typescript', src: iconTypescript },
    ],
  },
]
