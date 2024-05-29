
interface ContactAreaProps {
    img: string
    title: string
    buttonText: string
    link?: string
}


export function ContactArea({ img, title, buttonText, link }: ContactAreaProps) {

    return (
        <div className="w-[210px] h-full flex flex-col">
            <img src={`${img}`} width={120} className="self-center mt-3 duration-300 hover:w-[140px]" />

            <h3 className="text-center text-xl mt-5 flex-1">{title}</h3>

            <div className="flex justify-center flex-[1]">
                <a href={link} target="_blank" className="bg-white text-black cursor-pointer h-[40px] w-[120px] self-end text-center content-center rounded-lg mb-5">{buttonText}</a>
            </div>
        </div>
    )

}