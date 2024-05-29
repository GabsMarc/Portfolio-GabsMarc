
interface NavbarLogoProps {
    text: string
}


export function NavbarLogo({ text }: NavbarLogoProps) {

    return (
        <h1 className="text-4xl content-center bg-gradient-to-r from-white via-purple-700 to-purple-900 text-transparent bg-clip-text">{text}</h1>
    )
    
}