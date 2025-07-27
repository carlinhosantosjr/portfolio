import 'swiper/swiper.min.css'
import { SwiperContent } from '../ui/Swiper'
import { achievements, contacts, projects, stackIcons } from '../../data/mockedData'

export function SidePanel() {
  return (
    <div className=" bg-[var(--gray-500)] screen930:w-[268px] screen930:h-[428px] text-sm text-[var(--fontcolor-white)] p-2 pt-2.5 screen930:mr-5 screen650:w-[652px] grid grid-cols-1 screen650:grid-cols-2 gap-3 screen930:block w-full">
      <div className="m-auto screen650:max-w-full max-w-full screen650:p-2 screen930:bg-transparent bg-[var(--gray-600)] p-3 screen500:px-20">
        <span>Stacks e habilidades</span>
        <SwiperContent contents={stackIcons} quantityDisplayContent={5} />
      </div>

      <div className="screen930:pt-5 screen930:pl-2 screen930:bg-transparent bg-[var(--gray-600)] p-3 screen650:max-w-full max-w-3/4 screen650:p-2 m-auto screen500:px-20 max-w-full ">
        <span>Conquistas</span>
        <SwiperContent contents={achievements} quantityDisplayContent={5} scrollToSession="achievementsSection" />
      </div>

      <div className="screen930:pt-5 screen930:pl-2 screen930:bg-transparent bg-[var(--gray-600)] p-3 screen650:max-w-full max-w-3/4 screen650:p-2 m-auto screen500:px-20 max-w-full">
        <span>Projetos</span>
        <SwiperContent contents={projects} quantityDisplayContent={4} contentWidth="13" contentHeight="13" scrollToSession="projectSpotlightSection" />
      </div>

      <div className="screen930:pt-5 screen930:pl-2 screen930:bg-transparent bg-[var(--gray-600)] p-3 screen650:max-w-full w-full max-w-3/4 screen650:p-2 m-auto screen500:px-20 max-w-full">
        <span>Contato</span>
        <div className="flex">
          {contacts.map((contact, index) => (
            <img
              className="h-12 mt-4 screen930:mt-2.5 screen930:h-10 mr-2 rounded-bl-lg transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.15] "
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
