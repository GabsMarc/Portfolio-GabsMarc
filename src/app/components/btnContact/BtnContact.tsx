import { MotionBox } from "../Motion/Motion"
import Image from "next/image"

interface BtnContactProps {
    icon?: string
    text: string
    link: string
    style?: string
}

interface ContactCircleI {
    icon: string,
    link: string,
    color?: string
}

export function BtnContact({ text, link, style }: BtnContactProps) {

    return (
        <MotionBox transition={0.3}>
            <a className={`${style} px-3 py-[5px] md:mt-[6px] mx-2 font-medium bg-[#25053F] flex flex-row rounded-lg justify-center items-center gap-5 hover:cursor-pointer text-white hover:bg-[#32135e] duration-200`}
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
            <a className="px-5 pr-2 py-[5px] mt-[6px] font-medium bg-[#46146f] flex flex-row rounded-lg justify-center items-center gap-2 hover:cursor-pointer hover:bg-[#4c2385] duration-200"
                href={link}
                download
            >
                <span className="text-[13px] lg:text-[18px] xl:text-[15px] text-nowrap">{text}</span>
                <div className="w-[17px] h-[17px]">
                    <Image
                        src={icon}
                        alt="GitHub"
                        width={22}
                        height={22}
                        className="invert"
                    />
                </div>
            </a>
        </MotionBox>
    )
}


export function ContactCircle({ icon, link, color = "#3B0764" }: ContactCircleI) {


    return (
        <MotionBox transition={0.3}>
            <a className="rounded-full p-[5px] bg-[#25053F] flex flex-row justify-center items-center gap-1 hover:cursor-pointer hover:bg-[#32135e] duration-300"
                href={link}
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