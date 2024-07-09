import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from "next/image"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


interface SwipeProps {
    content: Array<any>
}



export function Swipe({ content }: SwipeProps) {

    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {content.map((item) => (
                <SwiperSlide key={item.id}>
                    <Image src={item.image} alt=""/>
                </SwiperSlide>
            ))}

        </Swiper>

    )
}

