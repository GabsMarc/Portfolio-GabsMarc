import { ContactArea } from "./contactArea/ContactArea"

export function ContactContainer() {

    return (
        <div className="border-white border-[1px] h-full w-full rounded-lg p-2 flex flex-col hover:bg-[#160024] duration-300 ">
            <h2 className="text-center text-xl">Contato</h2>
            <div className="flex flex-1 gap-5 p-2">
                <div className="flex flex-[1] justify-center px-2">

                    <div className=" bg-[url('../assets/ft2.jpg')] rounded-lg w-[230px] h-[320px] bg-cover bg-no-repeat mr-3 shadow-[white] shadow-[5px_2px_5px_1px] " />

                    <div className="flex justify-center">
                        <div className="bg-white cursor-pointer h-[45px] w-[45px] text-purple-950 text-center text-xl font-medium content-center rounded-full self-end -ml-10 mb-5 duration-300 hover:h-[50px] hover:w-[50px] hover:bg-gray-300">
                            CV
                        </div>
                    </div>

                </div>
                <div className="flex gap-4">
                    <div className="bg-blue-500 rounded-2xl ">
                        <ContactArea title="Linkedin" buttonText="Acessar" link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/linkedin/linkedin-original.svg" />
                    </div>
                    <div className="bg-green-600 rounded-2xl ">
                        <ContactArea title="GitHub" buttonText="Acessar" link="https://github.com/GabsMarc" img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg" />
                    </div>
                    <div className="bg-red-500 rounded-2xl ">
                        <ContactArea title="Email" buttonText="Acessar" link="mailto:gabsmarcc@gmail.com" img="https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Gmail.png?raw=true" />
                    </div>
                </div>

            </div>
        </div>
    )

}

