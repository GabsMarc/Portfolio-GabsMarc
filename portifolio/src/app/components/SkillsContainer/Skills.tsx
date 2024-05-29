
interface SkillsProps{
    img: string
    skill: string
}

export function Skills({ img, skill }: SkillsProps) {

    return (
        <div className="flex">
            <img className="w-[43px] h-[43px] hover:w-[50px] hover:h-[50px] duration-200" src={`${img}`} />
            <span className="self-center px-3">{skill}</span>
        </div>
    )
}