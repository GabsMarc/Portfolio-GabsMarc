import { Skills } from "./Skills"

export function FrontSkills() {


    const FrontEndSkills = [
        {
            img: '',
            skill: 'React'
        },
        {
            img: '',
            skill: 'javascript'
        },

    ]


    return (
        <div className="bg-[#9c47fd28] border-[1px]  rounded-lg flex flex-col p-2 mb-5 duration-300 ">

            <div className="flex-1">
                <h2 className="text-center text-xl">Front-End</h2>
                <div className="flex flex-col flex-wrap justify-between gap-10 h-[300px] p-5 ">

                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" skill="React" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" skill="Javascript" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" skill="Typescript" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" skill="HTML" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" skill="CSS" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg" skill="Tailwind" />
                    <Skills img="" skill="Next.js" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/axios/axios-plain.svg" skill="Axios" />

                </div>
            </div>

        </div>
    )
} 