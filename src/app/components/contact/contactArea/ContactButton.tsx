


interface ContactButtonCircleProps {
    img: string
    title: string
    buttonText: string
    link?: string
}

interface ContactButtonSquareProps {
    img: string,
    link: string
}


export function ContactButtonCircle({ img, title, buttonText, link }: ContactButtonCircleProps) {

    return (
        <div className="flex flex-col">
            <img src={`${img}`} width={90} className="self-center mt-3 duration-300" />

            <h3 className="text-center text-xl mt-5 flex-1">{title}</h3>

            <div className="flex justify-center flex-[1] ">
                <a href={link} target="_blank" className="bg-white text-black cursor-pointer h-[40px] w-[80%] text-center content-center rounded-lg mt-[30%] mb-2 hover:bg-gray-400 duration-300">{buttonText}</a>
            </div>
        </div>
    )

}



export function ContactButtonSquare({ img, link }: ContactButtonSquareProps) {

    return (
        <a href={link} className="flex flex-col bg-[#3b1243] justify-center rounded-[5px] w-[50px] h-[50px]">
            <img src={img} width={0} className="self-center w-[40px] invert" />
        </a>
    )

}