import { Swipe } from "../Swipe/Swipe"
import './styles.css'
import { MotionBox, MotionTextStaggered } from "../Motion/Motion"
import { ContactButtonSquare } from "../contact/contactArea/ContactButton"

import FinanceImages from "@/assets/Finance"
import IconsImages from "@/assets/icons"
import { ShortMotion } from "../Motion/ShortMotion"
import { ReactNode } from "react"
import { BtnContact, BtnContactImage } from "../btnContact/BtnContact"

interface teste {
    children: ReactNode
    techUsed: Array<string>
    title: string
    about: string
    link: string
    id: number
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
        <div className="bg-[#180b2881] border-[1px] border-[#858585] h-full w-[100%] rounded-[10px] flex flex-col mb-20 items-center py-5
              xl:flex-row xl:items-stretch
        ">
            <div className="w-[230px] h-[460px] rounded-lg bg-transparent m-5 shadow-lg shadow-[#0000006e]
                 xl:w-[250px] xl:h-[500px] xl:flex xl:mx-[70px] xl:shadow-xl   
            ">
                <Swipe content={ProjectFinance} delay={4500} />
            </div>


            <div className="w-[90%] h-[320px] bg-[#180B28] flex flex-col pt-3 rounded-[10px] shadow-[#0000006e] shadow-xl          
                xl:flex xl:flex-col xl:justify-between xl:mr-5 xl:self-center
            ">
                <div className="w-[100%] font-medium pl-2 
                    xl:mt-[20px]
                ">
                    <h2 className="text-[25px] px-5">{'Finance'}</h2>
                </div>


                <div className="flex flex-col h-[100%] justify-between">

                    <div className=" w-[100%] h-[100px] px-5 pt-5 
                        xl:px-3 
                    ">


                        <MotionTextStaggered
                            transition={0.5}
                            text={'O aplicativo foi desenvolvido para que o usuario consiga adicionar suas contas e gerenciar se as elas já foram pagas ou não e o valor exato da conta, processo que deverá ser feito pelo usuario.'}
                            style="text-[15px] text-wrap " />


                    </div>

                    <div className="w-[100%] pl-5 pb-2">

                        <div className="flex flex-row px-2 pt-5 text-[15px] justify-between ">

                            <ul className="list-disc place-items-start h-[100%] text-wrap">
                                <li><ShortMotion text="React Native" /></li>
                                <li><ShortMotion text="Javascript" /></li>
                                <li><ShortMotion text="Firebase" /></li>
                            </ul>

                            <div className="content-end">
                                <BtnContactImage icon={IconsImages.github.src} text="Acessar Repositório" link={'https://github.com/GabsMarc/Finance'} />                         
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}



export function ProjectContainer({ id, children, title, about, techUsed, link }: teste) {

    return (
        <div className="bg-[#180b2881] border-[1px] border-[#858585] h-full w-[100%] rounded-[10px] flex flex-col mb-20 items-center py-5
              xl:flex-row xl:items-stretch
        ">
            <div className="w-[95%] h-[100%] rounded-lg bg-transparent m-5 shadow-lg shadow-[#0000006e]
                 xl:w-[60%] xl:flex xl:flex-1 xl:shadow-xl 
            ">
                {children}
            </div>


            <div className=" bg-[#180B28] flex flex-col pt-3 rounded-[10px] shadow-[#0000006e] shadow-xl h-[450px] w-[90%]         
                xl:flex xl:flex-col xl:justify-between xl:mr-5 xl:self-center
            ">
                <div className="w-[100%] font-medium pl-2 
                    xl:mt-[20px]
                ">
                    <h2 className="text-[25px] px-5">{title}</h2>
                </div>


                <div className="flex flex-col h-[100%] justify-between">

                    <div className="w-[100%] h-[100px] px-5 pt-5 
                        xl:px-3 
                    ">


                        <MotionTextStaggered
                            transition={0.5}
                            text={about}
                            style="text-[15px] text-wrap " />


                    </div>

                    <div className="w-[100%] pl-5 pb-2">

                        <div className="flex flex-row px-2 pt-5 text-[15px] justify-between ">

                            <ul className="list-disc place-items-start h-[100%] text-nowrap">
                                {
                                    techUsed.map((e) => {
                                        return (
                                            <li><ShortMotion text={e} /></li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="content-end">
                                <BtnContactImage icon={IconsImages.github.src} text="Acessar Repositório" link={link} />
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}