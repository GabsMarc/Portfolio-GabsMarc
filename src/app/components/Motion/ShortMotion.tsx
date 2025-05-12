import { MotionTextStaggered } from "./Motion";

interface ShortMotionI {
    text: string
}

export function ShortMotion({ text }: ShortMotionI) {

    return (
        <MotionTextStaggered
            transition={10}
            text={text}
        />
    )

}