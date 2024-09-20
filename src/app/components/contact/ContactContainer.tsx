import { ContactArea } from "./contactArea/ContactArea"

export function ContactContainer() {

    return (
        <div className="border-white border-[1px] h-[100%] w-full rounded-lg p-2 flex flex-col hover:bg-[#160024] duration-300 ">
            <h2 className="text-center text-xl">Contato</h2>
            <div className="flex flex-1 gap-5 p-7 flex-col lg:flex-row">
                <div className="flex flex-[1] justify-center">

                    <div className=" bg-[url('../assets/ft2.jpg')] rounded-lg w-[230px] h-[305px] bg-cover bg-no-repeat " />

                    <div className="flex justify-center">
                        <div className="bg-blue-700 cursor-pointer h-[45px] w-[45px] text-white text-center text-xl font-medium content-center rounded-full self-end -ml-[60px] mb-[5px] duration-300 hover:bg-gray-300 hover:text-blue-700">
                            CV
                        </div>
                    </div>

                </div>
                <div className="flex gap-4 flex-col m-auto lg:flex-row lg:m-0 w-[60%] items-center lg:items-stretch">
                    <div className="bg-blue-500 rounded-2xl w-[170px] lg:w-[100%]">
                        <ContactArea title="Linkedin" buttonText="Acessar" link="https://www.linkedin.com/in/gabriel-marcucci-3ab386208/" img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/linkedin/linkedin-original.svg" />
                    </div>
                    <div className="bg-green-600 rounded-2xl w-[170px] lg:w-[100%]">
                        <ContactArea title="GitHub" buttonText="Acessar" link="https://github.com/GabsMarc" img="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg" />
                    </div>
                    <div className="bg-red-500 rounded-2xl w-[170px] lg:w-[100%]">
                        <ContactArea title="Email" buttonText="Acessar" link="mailto:gabsmarcc@gmail.com" img="https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Gmail.png?raw=true" />
                    </div>
                </div>

            </div>
        </div>
    )

}

