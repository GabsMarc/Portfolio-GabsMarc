import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { MotionBox } from "../Motion/Motion"
import Image from "next/image"

interface BtnContactProps {
    icon?: string
    text: string
    link: string
}

interface ContactCircleI {
    icon: string,
    link: string,
    color?: string
}

export function BtnContact({ text, link }: BtnContactProps) {

    return (
        <MotionBox transition={0.3}>
            <a className="px-3 py-[5px] mt-[6px] mx-2 font-medium bg-purple-900 flex flex-row rounded-lg justify-center items-center gap-5 hover:cursor-pointer hover:bg-purple-950 duration-200 "
                href={link}
            >
                <span className="text-[18px] xl:text-[19px]">{text}</span>
            </a>
        </MotionBox>
    )
}


export function BtnContactImage({ text, link, icon = "" }: BtnContactProps) {

    return (
        <MotionBox transition={0.3}>
            <a className="px-5 py-[5px] mt-[6px] font-medium bg-purple-900 flex flex-row rounded-lg justify-center items-center gap-2 hover:cursor-pointer hover:bg-purple-950 duration-200 "
                href={link}
            >
                <span className="text-[13px] lg:text-[18px] xl:text-[15px] text-nowrap">{text}</span>
                <Image
                    src={icon}
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="invert"
                />
            </a>
        </MotionBox>
    )
}


export function ContactCircle({ icon, link, color = "#3B0764" }: ContactCircleI) {


    return (
        <MotionBox transition={0.3}>
            <a className="rounded-full p-[5px] bg-[#3B0764] flex flex-row justify-center items-center gap-1 hover:cursor-pointer hover:bg-purple-950 duration-200"
                href={link}
                style={{ backgroundColor: color }}
            >
                <Image
                    src={icon}
                    alt=""
                    width={37}
                    height={37}
                    className="rounded-full invert "
                />

            </a>
        </MotionBox>
    )
}