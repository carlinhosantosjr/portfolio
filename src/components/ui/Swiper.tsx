import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper'

interface Content {
  title: string
  imageSrc: string
}

interface SwiperContentProps {
  contents: Content[]
  quantityDisplayContent: number
  contentHeight?: string
  contentWidth?: string
  scrollToSession?: string
  projectContent?: boolean
}

export function SwiperContent({
  contents, quantityDisplayContent,
  contentHeight, contentWidth, scrollToSession, projectContent,
}: SwiperContentProps) {
  return (
    <Swiper
      modules={!projectContent
        ? [Autoplay]
        : [Navigation, EffectFade, Autoplay]}
      className="swiper-marquee select-none "
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      freeMode
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: !projectContent,
      }}
      slidesPerView={quantityDisplayContent}
      speed={2500}
      {...(projectContent
        ? { navigation: true }
        : {})}
    >
      {contents.map((content, index) => (
        <SwiperSlide key={index} className="pt-2.5">
          <img
            className={`pl-1 pr-1 h-${contentHeight} w-${contentWidth} rounded-bl-lg transition-all duration-200 hover:shadow-sm ${!projectContent && 'hover:scale-[1.12]'} ${projectContent
? 'hover:cursor-default'
: 'hover:cursor-pointer'}`}
            title={content.title}
            src={content.imageSrc}
            alt={content.title}
            onClick={() => {
              if (!scrollToSession) return

              const target = document.getElementById(scrollToSession)
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
