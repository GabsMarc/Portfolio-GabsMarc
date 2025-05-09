import { Swipe } from "../Swipe/Swipe"
import './styles.css'
import { MotionBox, MotionTextStaggered } from "../Motion/Motion"
import { ContactButtonSquare } from "../contact/contactArea/ContactButton"

import PaladarImages from "@/assets/Paladar-Divino"
import FinanceImages from "@/assets/Finance"
import YoutubeCopyImages from "@/assets/YoutubeCopy"
import IconsImages from "@/assets/icons"



export function ProjectPaladar() {

    const ProjectPaladar = [
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

    return (
        <div className="bg-[#180B28] border-[1px] h-full w-[100%] rounded-lg flex flex-col mb-5 items-center py-5">

            <div className="w-[100%] font-medium pl-2">
                <h2 className="text-[25px] px-5">Divino Hamburgueria</h2>
            </div>

            <div className="w-[95%] h-[230px] rounded-lg bg-transparent m-5">
                <Swipe content={ProjectPaladar} />
            </div>

            <div className="w-[90%]">
                <MotionBox transition={0.6}>

                    <MotionTextStaggered
                        transition={0.5}
                        text="Site desenvolvido com foco no aprendizado de novas tecnologias do Front-End e principalmente no Back-End."
                        style="text-[15px] lg:text-2xl text-wrap " />


                    <div className="flex flex-row px-5 pt-5 text-[15px] justify-between">

                        <ul className="list-disc place-items-start">
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Styled-Components</li>
                            <li>Axios</li>
                            <li>Prisma</li>
                            <li>MySQL</li>
                        </ul>
                        <div className="content-end">
                            <ContactButtonSquare img={IconsImages.github.src} link="https://github.com/GabsMarc/YoutubeCopy" />
                        </div>
                    </div>
                </MotionBox>
            </div>


        </div>
    )
}


export function ProjectFinance() {

    const ProjectFinance = [
        { id: '1', image: FinanceImages.Finance1 },
        { id: '2', image: FinanceImages.Finance2 },
        { id: '3', image: FinanceImages.Finance3 },
        { id: '4', image: FinanceImages.Finance4 },
        { id: '5', image: FinanceImages.Finance5 },
        { id: '6', image: FinanceImages.Finance6 },
        { id: '7', image: FinanceImages.Finance7 },
        { id: '8', image: FinanceImages.Finance8 },
        { id: '9', image: FinanceImages.Finance9 },
        { id: '10', image: FinanceImages.Finance10 },
    ]

    return (

        <div className="bg-[#180B28] border-[1px] h-full w-[100%] rounded-lg flex flex-col mb-5 items-center py-5">

            <div className="w-[100%] font-medium pl-2">
                <h2 className="text-[25px] px-5">Finance</h2>
            </div>

            <div className="w-[230px] h-[460px] bg-transparent rounded-lg m-5">
                <Swipe content={ProjectFinance} delay={4500} />
            </div>

            <div className="w-[90%]">
                <MotionBox transition={0.6}>

                    <MotionTextStaggered
                        transition={0.5}
                        text="O aplicativo foi desenvolvido para que o usuario consiga adicionar suas contas e gerenciar se as elas já foram pagas ou não e o valor exato da conta, processo que deverá ser feito pelo usuario."
                        style="text-[15px] lg:text-2xl text-wrap " />


                    <div className="flex flex-row px-5 pt-5 text-[15px] justify-between">

                        <ul className="list-disc place-items-start">
                            <li>React Native</li>
                            <li>Javascript</li>
                            <li>Firebase</li>
                        </ul>
                        <div className="content-end">
                            <ContactButtonSquare img={IconsImages.github.src} link="https://github.com/GabsMarc/YoutubeCopy" />
                        </div>
                    </div>
                </MotionBox>
            </div>


        </div>



    )
}


export function ProjectYoutubeCopy() {

    const projectYoutubeCopy = [
        { id: '1', image: YoutubeCopyImages.img1 },
        { id: '2', image: YoutubeCopyImages.img2 },
        { id: '3', image: YoutubeCopyImages.img3 },
        { id: '4', image: YoutubeCopyImages.img4 }
    ]

    return (
        <div className="bg-[#180B28] border-[1px] h-full w-[100%] rounded-lg flex flex-col items-center py-5">

            <div className="w-[100%] font-medium pl-2">
                <h2 className="text-[25px] px-5">Youtube - Copy</h2>
            </div>

            <div className="w-[95%] h-[230px] rounded-lg bg-transparent m-5">
                <Swipe content={projectYoutubeCopy} />
            </div>

            <div className="w-[90%]">
                <MotionBox transition={0.6}>

                    <MotionTextStaggered
                        transition={0.5}
                        text="Esse projeto foi criado com o objetivo de tentar recriar uma interface com o conhecimento que eu tinha até o momento do projeto."
                        style="text-[15px] lg:text-2xl text-wrap " />


                    <div className="flex flex-row px-5 pt-5 text-[15px] justify-between">

                        <ul className="list-disc place-items-start">
                            <li>Next</li>
                            <li>Typescript</li>
                            <li>Tailwind css</li>
                        </ul>
                        <div className="content-end">
                            <ContactButtonSquare img={IconsImages.github.src} link="https://github.com/GabsMarc/YoutubeCopy" />
                        </div>
                    </div>
                </MotionBox>
            </div>


        </div>
    )
}