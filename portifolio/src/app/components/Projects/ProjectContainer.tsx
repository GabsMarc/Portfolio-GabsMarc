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
    ]



    return (
        <div className="bg-[#160024] border-white border-[1px] h-full rounded-lg p-2 flex flex-col">
            <h2 className="text-center text-xl">Projetos</h2>

            <div className=" flex-1 mx-[15px] my-[10px] flex flex-col gap-5 place-items-center justify-center ">

                <div className="border-white border-[1px] h-[270px] w-[100%] rounded-lg">
                    <Swipe content={Projeto1} />
                </div>

                <div className="border-white border-[1px] h-[450px] w-[50%] rounded-lg">
                    <Swipe content={Projeto2} />
                </div>


            </div>
        </div>
    )
}

