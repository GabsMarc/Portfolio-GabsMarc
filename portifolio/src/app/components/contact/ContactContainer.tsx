import { ContactArea } from "./contactArea/ContactArea";
import ft from './contactArea/images/ft.jpg'

export function ContactContainer() {

    return (
        <div className="bg-purple-950 bg-opacity-70 h-full w-full rounded-lg p-2 flex flex-col">
            <h2 className="text-center text-xl">Contatos</h2>
            <div className="flex flex-1 gap-5">

                <div className="flex flex-[1] justify-center px-2">

                    <div className="flex justify-center">
                        <div className="bg-white cursor-pointer h-[40px] w-[120px] text-black text-center content-center rounded-lg self-end mb-5">
                            Currículo
                        </div>
                    </div>
                </div>
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
    )

}