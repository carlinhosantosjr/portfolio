import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
import iconTypescript from '../assets/iconTypescript.png'
import iconReact from '../assets/react-icon.png'
import iconHtml from '../assets/iconHtml.png'
import iconCss from '../assets/iconCss.png'
import iconJavascript from '../assets/iconJavascript.png'
import iconNext from '../assets/iconNext.png'
import iconTailwind from '../assets/iconTailwind.png'
import pizzaIcon from '../assets/pizzaIcon.png'
import tshirtShop from '../assets/tshirtShop.png'
import coffeeIcon from '../assets/coffeeIcon.png'
import whatsIcon from '../assets/whatsIcon.png'
import outlookIcon from '../assets/outlookIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'

export function SidePanel() {
  const icons = [
    { tittle: 'TypeScript', src: iconTypescript },
    { tittle: 'React', src: iconReact },
    { tittle: 'HTML5', src: iconHtml },
    { tittle: 'JavaScript', src: iconJavascript },
    { tittle: 'CSS3', src: iconCss },
    { tittle: 'Next.js', src: iconNext },
    { tittle: 'Tailwind CSS', src: iconTailwind },
  ]

  const projects = [
    { title: 'Pizza Shop', src: pizzaIcon },
    { title: 'Tshirt Shop', src: tshirtShop },
    { title: 'Coffee Shop', src: coffeeIcon },
  ]

  const contacts = [
    { title: 'WhatsApp', src: whatsIcon },
    { title: 'Outlook', src: outlookIcon },
    { title: 'Linkedin', src: linkedinIcon },
  ]

  return (
    <div className="bg-[var(--gray-500)] w-[268px] text-sm text-[var(--fontcolor-white)] p-2 pt-2.5 mr-5">
      <div className="p-2">
        <span>Stacks e habilidades</span>
        <Swiper
          modules={[Autoplay]}
          className="swiper-marquee"
          loop
          freeMode
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={5}
          speed={2000}
        >
          {icons.map((icon, index) => (
            <SwiperSlide key={index} className="pt-2.5">
              <img className="pl-1 pr-1 rounded-lg" title={icon.tittle} src={icon.src} alt={icon.tittle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pt-5 pl-2">
        <span>Projetos</span>
        <div className="flex">
          {projects.map((project, index) => (
            <img className=" mt-2.5 h-12 mr-5 rounded-xl" title={project.title} src={project.src} alt={project.title} key={index} />
          ))}
        </div>
      </div>

      <div className="pt-5 pl-2">
        <span>Contato</span>
        <div className="flex">
          {contacts.map((contact, index) => (
            <img className=" mt-2.5 h-11 mr-2 rounded-xl" title={contact.title} src={contact.src} alt={contact.title} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
