
interface ContactAreaProps {
    img: string
    title: string
    buttonText: string
    link?: string
}


export function ContactArea({ img, title, buttonText, link }: ContactAreaProps) {

    return (
        <div className="flex flex-col">
            <img src={`${img}`} width={90} className="self-center mt-3 duration-300" />

            <h3 className="text-center text-xl mt-5 flex-1">{title}</h3>

            <div className="flex justify-center flex-[1]">
                <a href={link} target="_blank" className="bg-white text-black cursor-pointer h-[40px] w-[80%] text-center content-center rounded-lg mt-[30%] mb-2 hover:bg-gray-400 duration-300">{buttonText}</a>
            </div>
        </div>
    )

}