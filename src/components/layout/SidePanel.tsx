import 'swiper/swiper.min.css'
import { SwiperIcons } from '../ui/Swiper'
import { achievements, contacts, projectsIcons, stackIcons } from '../../data/mockedData'

export function SidePanel() {
  return (
    <div className="bg-[var(--gray-500)] w-[268px] h-[428px] text-sm text-[var(--fontcolor-white)] p-2 pt-2.5 mr-5">
      <div className="p-2">
        <span>Stacks e habilidades</span>
        <SwiperIcons icons={stackIcons} quantityDisplayIcon={5} />
      </div>

      <div className="pt-5 pl-2">
        <span>Projetos</span>
        <SwiperIcons icons={projectsIcons} quantityDisplayIcon={4} iconWidth="14" iconHeight="12" scrollToSession="projectSpotlightSection" />
      </div>

      <div className="pt-5 pl-2">
        <span>Conquistas</span>
        <SwiperIcons icons={achievements} quantityDisplayIcon={4} iconWidth="12" iconHeight="10" scrollToSession="achievementsSection" />
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
                const target = document.getElementById('contactSection')
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
