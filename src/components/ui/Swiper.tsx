import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'

interface Icon {
  title: string
  src: string
}

interface SwiperIconsProps {
  icons: Icon[]
}

export function SwiperIcons({ icons }: SwiperIconsProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      className="swiper-marquee select-none "
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
          <img
            className="pl-1 pr-1 rounded-bl-lg transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:scale-[1.15]"
            title={icon.title}
            src={icon.src}
            alt={icon.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
