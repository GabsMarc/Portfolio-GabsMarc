import { Skills } from "./Skills"

export function BackSkills() {

    return (
        <div className="border-[2px] border-white bg-opacity-70 h-[400px] rounded-lg flex flex-col p-2 hover:bg-[#160024] duration-300 ">

            <div className="flex-1">
                <h2 className="text-center text-xl">Back-End</h2>
                <div className="flex flex-col justify-between flex-wrap gap-10 h-[350px] p-5">

                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nodejs/nodejs-plain-wordmark.svg" skill="Node" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/express/express-original.svg" skill="Express" style="invert" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" skill="Javascript" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" skill="Typescript" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/prisma/prisma-original.svg" skill="Prisma" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg" skill="MySQL" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" skill="SQLServer" />
                    <Skills img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/insomnia/insomnia-original.svg" skill="Insomnia"/>
                    
                </div>
            </div>

        </div>
    )
} 