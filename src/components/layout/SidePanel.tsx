import 'swiper/swiper.min.css'
import iconTypescript from '../../assets/iconTypescript.png'
import iconReact from '../../assets/react-icon.png'
import iconHtml from '../../assets/iconHtml.png'
import iconCss from '../../assets/iconCss.png'
import iconJavascript from '../../assets/iconJavascript.png'
import iconNext from '../../assets/iconNext.png'
import iconTailwind from '../../assets/iconTailwind.png'
import pizzaIcon from '../../assets/pizzaIcon.png'
import tshirtShop from '../../assets/tshirtShop.png'
import coffeeIcon from '../../assets/coffeeIcon.png'
import whatsIcon from '../../assets/whatsIcon.png'
import outlookIcon from '../../assets/outlookIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import reactCertificate from '../../assets/reactCertificate.png'
import portfolioIcon from '../../assets/portfolioIcon.png'
import weekAiRocket from '../../assets/weekAiRocket.png'
import nlwAgents from '../../assets/nlwAgents.png'
import certificateIcon from '../../assets/certificateIcon.png'
import { SwiperIcons } from '../ui/Swiper'

export function SidePanel() {
  const stackIcons = [
    { title: 'TypeScript', src: iconTypescript },
    { title: 'React', src: iconReact },
    { title: 'HTML5', src: iconHtml },
    { title: 'JavaScript', src: iconJavascript },
    { title: 'CSS3', src: iconCss },
    { title: 'Next.js', src: iconNext },
    { title: 'Tailwind CSS', src: iconTailwind },
  ]

  const projects = [
    { title: 'Pizza Shop', src: pizzaIcon },
    { title: 'Tshirt Shop', src: tshirtShop },
    { title: 'Coffee Shop', src: coffeeIcon },
    { title: 'Projeto Portfólio', src: portfolioIcon },
  ]

  const achievements = [
    { title: 'Certificação ReactJs', src: reactCertificate },
    { title: 'Semana IA', src: weekAiRocket },
    { title: 'NLW Agents 2025', src: nlwAgents },
    { title: 'Comunicação Assertiva', src: certificateIcon },
  ]

  const contacts = [
    { title: 'WhatsApp', src: whatsIcon },
    { title: 'Outlook', src: outlookIcon },
    { title: 'Linkedin', src: linkedinIcon },
  ]

  return (
    <div className="bg-[var(--gray-500)] w-[268px] h-[428px] text-sm text-[var(--fontcolor-white)] p-2 pt-2.5 mr-5">
      <div className="p-2">
        <span>Stacks e habilidades</span>
        <SwiperIcons icons={stackIcons} quantityDisplayIcon={5} />
      </div>

      <div className="pt-5 pl-2">
        <span>Projetos</span>
        <SwiperIcons icons={projects} quantityDisplayIcon={4} iconSize="12" />
      </div>

      <div className="pt-5 pl-2">
        <span>Conquistas</span>
        <SwiperIcons icons={achievements} quantityDisplayIcon={4} iconSize="10" />
      </div>

      <div className="mt-5 pl-2 ">
        <span>Contato</span>
        <div className="flex">
          {contacts.map((contact, index) => (
            <img
              className=" mt-2.5 h-10 mr-2 rounded-bl-lg transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.15]"
              title={contact.title}
              src={contact.src}
              alt={contact.title}
              key={index}
              onClick={() => {
                const target = document.getElementById('contactSession')
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
