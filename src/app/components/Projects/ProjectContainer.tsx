import { Swipe } from "../Swipe/Swipe"
import './styles.css'
import { MotionBox, MotionTextStaggered } from "../Motion/Motion"
import { ContactButtonSquare } from "../contact/contactArea/ContactButton"

import FinanceImages from "@/assets/Finance"
import IconsImages from "@/assets/icons"
import { ShortMotion } from "../Motion/ShortMotion"
import { ReactNode } from "react"


interface teste {
    children: ReactNode
    techUsed: Array<string>
    title: string
    about: string
    link: string
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
        <div className="bg-[#180B28] border-[1px] h-full w-[100%] rounded-[10px] flex flex-col mb-5 items-center py-5
              xl:flex-row xl:items-stretch
        ">
            <div className="w-[230px] h-[460px] rounded-lg bg-transparent m-5
                 xl:w-[250px] xl:h-[500px] xl:flex xl:flex-1
            ">
                <Swipe content={ProjectFinance} delay={4500} />
            </div>


            <div className="
                xl:flex xl:flex-col xl:justify-between bg-[#0000004d] mx-3 pt-3 xl:mr-5 rounded-[10px]
            ">
                <div className="w-[100%] font-medium pl-2
                xl:mt-[20px]
            ">
                    <h2 className="text-[25px] px-5">{'Finance'}</h2>
                </div>


                <div className="w-[100%] px-8
                    xl:px-3 xl:mt-[100px] pb-10
                ">
                    <MotionBox transition={0.6}>

                        <MotionTextStaggered
                            transition={0.5}
                            text={'O aplicativo foi desenvolvido para que o usuario consiga adicionar suas contas e gerenciar se as elas já foram pagas ou não e o valor exato da conta, processo que deverá ser feito pelo usuario.'}
                            style="text-[15px] text-wrap " />


                        <div className="flex flex-row px-5 pt-5 text-[15px] justify-between">

                            <ul className="list-disc place-items-start">
                                <li><ShortMotion text="React Native" /></li>
                                <li><ShortMotion text="Javascript" /></li>
                                <li><ShortMotion text="Firebase" /></li>
                            </ul>

                            <div className="content-end">
                                <ContactButtonSquare img={IconsImages.github.src} link={'https://github.com/GabsMarc/Finance'} />
                            </div>
                        </div>
                    </MotionBox>
                </div>
            </div>

        </div>
    )
}



export function ProjectContainer({ children, title, about, techUsed, link }: teste) {



    return (
        <div className="bg-[#180B28] border-[1px] h-full w-[100%] rounded-[10px] flex flex-col mb-5 items-center py-5
              xl:flex-row xl:items-stretch
        ">
            <div className="w-[95%] h-[100%] rounded-lg bg-transparent m-5
                 xl:w-[60%] xl:flex xl:flex-1
            ">
                {children}
            </div>


            <div className="
                xl:flex xl:flex-col xl:justify-between bg-[#0000004d] mx-3 pt-3 xl:mr-5 rounded-[10px]
            ">
                <div className="w-[100%] font-medium pl-2 
                xl:mt-[20px]
            ">
                    <h2 className="text-[25px] px-5">{title}</h2>
                </div>


                <div className="w-[100%] px-8
                    xl:px-3 xl:mt-[100px] pb-10
                ">
                    <MotionBox transition={0.6}>

                        <MotionTextStaggered
                            transition={0.5}
                            text={about}
                            style="text-[15px] text-wrap " />


                        <div className="flex flex-row px-5 pt-5 text-[15px] justify-between">

                            <ul className="list-disc place-items-start">
                                {
                                    techUsed.map((e) => {
                                        return (
                                            <li><ShortMotion text={e} /></li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="content-end">
                                <ContactButtonSquare img={IconsImages.github.src} link={link} />
                            </div>
                        </div>
                    </MotionBox>
                </div>
            </div>

        </div>
    )
}