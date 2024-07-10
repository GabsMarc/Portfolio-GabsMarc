import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MotionBox } from "../Motion/Motion"

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
            return (<FaLinkedin />)
        }

    }

    return (
        <MotionBox transition={0.3}>
            <div className="w-28 h-10 bg-purple-900 flex flex-row rounded-lg justify-center items-center gap-1 hover:cursor-pointer hover:bg-purple-950 duration-200 ">
                <a className="text-xl" href={link}>{setLogo()}</a>
                <a href={link} className="">{text}</a>
            </div>
        </MotionBox>
    )
}