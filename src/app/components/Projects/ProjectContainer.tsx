import { Swipe } from "../Swipe/Swipe"
import './styles.css'
import PaladarImages from "@/assets/Paladar-Divino"
import FinanceImages from "@/assets/Finance"


export function ProjectContainer() {

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
        <div className="bg-[#160024] border-white border-[1px] h-full w-[100%] rounded-lg flex flex-col p-[24px]">
            <h2 className="text-center text-xl">Projetos</h2>

            <div className=" flex-1 flex flex-col gap-5 place-items-center justify-center w-[100%] p-2">

                <div className="border-white border-[1px] h-[200px] w-[300px] sm:h-[250px] sm:w-[450px] md:h-[300px] md:w-[500px] lg:h-[270px] lg:w-[100%] rounded-lg bg-black">
                    <Swipe content={ProjectPaladar} />
                </div>

                <div className="border-white border-[1px] h-[400px] w-[210px] md:h-[500px] md:w-[280px] lg:h-[450px] lg:w-[50%] rounded-lg">
                    <Swipe content={ProjectFinance} delay={4500} />
                </div>

            </div>
        </div>
    )
}

