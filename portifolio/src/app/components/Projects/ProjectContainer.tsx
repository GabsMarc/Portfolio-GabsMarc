import { Swipe } from "../Swipe/Swipe";
import './styles.css';

import Paladar1 from '../../../assets/Paladar-Divino/Paladar-1.png'
import Paladar2 from '../../../assets/Paladar-Divino/Paladar-2.png'
import Paladar3 from '../../../assets/Paladar-Divino/Paladar-3.png'
import Paladar4 from '../../../assets/Paladar-Divino/Paladar-4.png'
import Paladar5 from '../../../assets/Paladar-Divino/Paladar-5.png'
import Paladar6 from '../../../assets/Paladar-Divino/Paladar-6.png'
import Paladar7 from '../../../assets/Paladar-Divino/Paladar-7.png'
import Paladar8 from '../../../assets/Paladar-Divino/Paladar-8.png'
import Paladar9 from '../../../assets/Paladar-Divino/Paladar-9.png'
import Paladar10 from '../../../assets/Paladar-Divino/Paladar-10.png'

import Finance1 from '../../../assets/Finance/Finance-1.jpg'
import Finance2 from '../../../assets/Finance/Finance-2.jpg'
import Finance3 from '../../../assets/Finance/Finance-3.jpg'
import Finance4 from '../../../assets/Finance/Finance-4.jpg'
import Finance5 from '../../../assets/Finance/Finance-5.jpg'
import Finance6 from '../../../assets/Finance/Finance-6.jpg'
import Finance7 from '../../../assets/Finance/Finance-7.jpg'
import Finance8 from '../../../assets/Finance/Finance-8.jpg'
import Finance9 from '../../../assets/Finance/Finance-9.jpg'
import Finance10 from '../../../assets/Finance/Finance-10.jpg'

export function ProjectContainer() {

    const Projeto1 = [
        { id: '1', image: Paladar1 },
        { id: '2', image: Paladar2 },
        { id: '3', image: Paladar10 },
        { id: '4', image: Paladar3 },
        { id: '5', image: Paladar4 },
        { id: '6', image: Paladar5 },
        { id: '7', image: Paladar6 },
        { id: '8', image: Paladar7 },
        { id: '9', image: Paladar8 },
        { id: '10', image: Paladar9 },
    ]

    const Projeto2 = [
        { id: '1', image: Finance1 },
        { id: '2', image: Finance2 },
        { id: '3', image: Finance3 },
        { id: '4', image: Finance4 },
        { id: '5', image: Finance5 },
        { id: '6', image: Finance6 },
        { id: '7', image: Finance7 },
        { id: '8', image: Finance8 },
        { id: '9', image: Finance9 },
        { id: '10', image: Finance10 },
    ]



    return (
        <div className="bg-[#160024] border-white border-[1px] h-full w-[100%] rounded-lg flex flex-col p-[24px]">
            <h2 className="text-center text-xl">Projetos</h2>

            <div className=" flex-1 flex flex-col gap-5 place-items-center justify-center w-[100%] p-2">

                <div className="border-white border-[1px] h-[25vh] w-[70vw] md:h-[35vh] lg:h-[270px] lg:w-[100%] rounded-lg bg-black">
                    <Swipe content={Projeto1} />
                </div>

                <div className="border-white border-[1px] h-[45vh] w-[50vw] md:h-[75vh] lg:h-[450px] lg:w-[50%] rounded-lg">
                    <Swipe content={Projeto2} delay={4500} />
                </div>

            </div>
        </div>
    )
}

