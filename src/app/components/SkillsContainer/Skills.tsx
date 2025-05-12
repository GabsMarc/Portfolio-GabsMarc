
interface SkillsProps{
    img: string
    skill: string
    style?: string
}

export function Skills({ img, skill, style }: SkillsProps) {

    return (
        <div className="flex">
            <img className={`w-[30px] h-[30px] ${style}`} src={`${img}`} />
            <span className="self-center text-wrap w-1 px-3">{skill}</span>
        </div>
    )
}