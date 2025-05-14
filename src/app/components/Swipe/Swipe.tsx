import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image, { StaticImageData } from "next/image"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { ReactNode, useEffect, useRef } from "react"
import { MotionBox } from "../Motion/Motion"
import projectProfileSyncImages from "@/assets/ProfileSync"
import PaladarImages from "@/assets/Paladar-Divino"
import YoutubeCopyImages from "@/assets/YoutubeCopy"
import BackEndImages from "@/assets/Back-End"


import "swiper/css";
import "swiper/css/navigation";
import { ProjectContainer, ProjectFinance } from "../Projects/ProjectContainer"



interface SwipeProps {
    content: Array<any>
    delay?: number
}

interface SwipeAnyProps {
    children?: ReactNode
    delay?: number
}

const projectProfileSync = [
    { id: '1', image: projectProfileSyncImages.img1 },
    { id: '2', image: projectProfileSyncImages.img2 },
    { id: '3', image: projectProfileSyncImages.img3 },
    { id: '4', image: projectProfileSyncImages.img4 }
]

const projectPaladar = [
    { id: '1', image: PaladarImages.Paladar1 },
    { id: '2', image: PaladarImages.Paladar2 },
    { id: '3', image: PaladarImages.Paladar10 },
    { id: '4', image: PaladarImages.Paladar3 },
    { id: '5', image: PaladarImages.Paladar4 },
    { id: '6', image: PaladarImages.Paladar5 },
    { id: '7', image: PaladarImages.Paladar6 },
    { id: '8', image: PaladarImages.Paladar7 },
    { id: '9', image: PaladarImages.Paladar8 },
    { id: '10', image: PaladarImages.Paladar9 },
]

const projectYoutubeCopy = [
    { id: '1', image: YoutubeCopyImages.img1 },
    { id: '2', image: YoutubeCopyImages.img2 },
    { id: '3', image: YoutubeCopyImages.img3 },
    { id: '4', image: YoutubeCopyImages.img4 }
]

const backEndAPI = [
    { id: 1, image: BackEndImages.img1 },
    { id: 2, image: BackEndImages.img2 },
    { id: 3, image: BackEndImages.img3 },
    { id: 4, image: BackEndImages.img4 },
    { id: 5, image: BackEndImages.img5 },
    { id: 6, image: BackEndImages.img6 },
    { id: 7, image: BackEndImages.img7 },
]

export function Swipe({ content, delay = 4000 }: SwipeProps) {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: delay,
                disableOnInteraction: false,
            }}
            pagination={true}
            className="mySwiper"
            modules={[Autoplay, Pagination, Navigation]}
        >

            {content.map((item) => (
                <SwiperSlide key={item.id}>
                    <Image src={item.image} alt="" className="cursor-pointer" />
                </SwiperSlide>
            ))}

        </Swiper>

    )
}



interface SwipeAnyProps {
    children?: React.ReactNode;
    delay?: number;
}

export function SwipeContent({ children, delay = 4000 }: SwipeAnyProps) {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <ProjectContainer
                        title="Divino Hamburgueria"
                        about="Site desenvolvido com foco no aprendizado de novas tecnologias do Front-End e principalmente no Back-End."
                        id={1}
                        techUsed={["React", "Typescript", "Node", "Express", "Styled-Component", "Axios", "Prisma", "MySQL"]}
                        link="https://github.com/GabsMarc/PaladarDivino"
                    >
                        <Swipe content={projectPaladar} />
                    </ProjectContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectContainer
                        title="ProfileSync"
                        about="Projeto criado com o objetivo de desenvolver uma tela que armazene todos os links que eu achar necessário em um só lugar."
                        id={2}
                        techUsed={["Next", "Typescript", "Tailwind CSS"]}
                        link="https://github.com/GabsMarc/ProfileSync"
                    >
                        <Swipe content={projectProfileSync} />
                    </ProjectContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectContainer
                        title="YoutubeCopy"
                        about="Esse projeto foi criado com o objetivo de tentar recriar uma interface com o conhecimento que eu tinha até o momento do projeto."
                        id={3}
                        techUsed={["Next", "Typescript", "Tailwind CSS"]}
                        link="https://github.com/GabsMarc/YoutubeCopy"
                    >
                        <Swipe content={projectYoutubeCopy} />
                    </ProjectContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectContainer
                        title="(Back-End) - Projeto API NODE"
                        about="Projeto de Back-End completo, todo organizado e padronizado, com testes usando o Jest, Token de autorização para acesso as rotas e senhas de usuários criptografadas."
                        id={4}
                        techUsed={[
                            "NODE", "Typescript", "SQLite", "KNEX", "YUP", "BCrypt.js", "JWT", "Jest", "Express",
                        ]}
                        link="https://github.com/GabsMarc/Back-End-Projects/tree/main/API-Node-e-Typescript"
                    >
                        <Swipe content={backEndAPI} />
                    </ProjectContainer>
                </SwiperSlide>

                <SwiperSlide>
                    <ProjectFinance />
                </SwiperSlide>
            </Swiper>

            <button
                ref={prevRef}
                className="absolute top-[280px] md:top-[410px] lg:top-[280px] left-[10px] z-10 transform -translate-y-1/2 bg-[#ffffff74] text-[25px] font-bold h-[70px] w-[35px] lg:h-[100px] lg:w-[30px] rounded-full md:bg-[#4b1d8b] text-white hover:md:bg-[#32135e] duration-100"
            >
                &lt;
            </button>
            <button
                ref={nextRef}
                className="absolute top-[280px] md:top-[410px] lg:top-[280px] right-[10px] z-10 transform -translate-y-1/2 bg-[#ffffff74] text-[25px] font-bold h-[70px] w-[35px] lg:h-[100px] lg:w-[30px] rounded-full md:bg-[#4b1d8b] text-white hover:md:bg-[#32135e] duration-100"
            >
                &gt;
            </button>
        </div>
    );
}


