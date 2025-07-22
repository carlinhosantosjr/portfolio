import 'swiper/swiper.min.css'
import { SwiperContent } from '../ui/Swiper'
import { achievements, contacts, projects, stackIcons } from '../../data/mockedData'

export function SidePanel() {
  return (
    <div className="bg-[var(--gray-500)] w-[268px] h-[428px] text-sm text-[var(--fontcolor-white)] p-2 pt-2.5 mr-5">
      <div className="p-2">
        <span>Stacks e habilidades</span>
        <SwiperContent contents={stackIcons} quantityDisplayContent={5} />
      </div>

      <div className="pt-5 pl-2">
        <span>Projetos</span>
        <SwiperContent contents={projects} quantityDisplayContent={4} contentWidth="14" contentHeight="12" scrollToSession="projectSpotlightSection" />
      </div>

      <div className="pt-5 pl-2">
        <span>Conquistas</span>
        <SwiperContent contents={achievements} quantityDisplayContent={5} scrollToSession="achievementsSection" />
      </div>

      <div className="mt-5 pl-2 ">
        <span>Contato</span>
        <div className="flex">
          {contacts.map((contact, index) => (
            <img
              className=" mt-2.5 h-10 mr-2 rounded-bl-lg transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.15]"
              title={contact.title}
              src={contact.iconSrc}
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
