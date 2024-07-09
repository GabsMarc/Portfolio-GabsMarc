
interface SkillsProps{
    img: string
    skill: string
    style?: string
}

export function Skills({ img, skill, style }: SkillsProps) {

    return (
        <div className="flex">
            <img className={`w-[43px] h-[43px] ${style}`} src={`${img}`} />
            <span className="self-center px-3">{skill}</span>
        </div>
    )
}