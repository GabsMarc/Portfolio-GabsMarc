import { Skills } from "./Skills"

export function FrontSkills() {

    return (
        <div className="bg-purple-950 bg-opacity-70 h-[400px] rounded-lg flex flex-col p-2">

            <div className="flex-1">
                <h2 className="text-center text-xl">Front-End</h2>
                <div className="flex flex-col flex-wrap justify-between gap-10 h-[340px] p-5">

                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" skill="React" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" skill="Javascript" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" skill="Typescript" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" skill="HTML" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" skill="CSS" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg" skill="Tailwind" />
                    <Skills img="https://www.styled-components.com/atom.png" skill="Styled-Components" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/axios/axios-plain.svg" skill="Axios" />

                </div>
            </div>

        </div>
    )
} 