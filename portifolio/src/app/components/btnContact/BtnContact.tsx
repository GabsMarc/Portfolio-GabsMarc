import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

interface BtnContactProps {
    text: string
    link: string
    logo: boolean
}

export function BtnContact({ text, link, logo }: BtnContactProps) {

    function setLogo() {
        if (logo) {
            return (<FaGithubSquare />)
        } else {
            return (<FaLinkedin/>)
        }

    }

    return (
        <div className="w-28 h-10 bg-purple-900 flex flex-row rounded-lg justify-center items-center gap-1 hover:cursor-pointer hover:bg-purple-950 duration-200 hover:w-[120px] hover:h-[44px]">
            <a className="text-xl" href={link}>{setLogo()}</a>
            <a href={link} className="">{text}</a>
        </div>
    )
}