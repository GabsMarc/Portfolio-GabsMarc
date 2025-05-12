import { Skills } from "./Skills"

type SkillItems = {
    id: number,
    img: string,
    skill: string
}

interface SkillsI {
    array: SkillItems[]
}

export function SkillContainer({ array }: SkillsI) {


    return (

        <div className="bg-[#9c47fd28] w-[400px] border-[1px] rounded-lg flex flex-col p-2 mb-5 duration-300 
            sm:w-[480px] 
            lg:w-[470px]
            xl:w-[520px]
        ">

            <div className="flex-1">
                <h2 className="text-center text-xl">Front-End</h2>
                <div className="flex flex-col flex-wrap justify-between h-[300px] gap-10 p-5">

                    {
                        array.map((e) => {
                            return (
                                <Skills key={e.id} img={e.img} skill={e.skill} />
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
} 