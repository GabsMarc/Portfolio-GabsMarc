import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MotionProps {
    children?: React.ReactNode
    transition: number
    whileHover?: number
    position?: number
    text?: string
    style?: string
    el?: keyof JSX.IntrinsicElements
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}


export function MotionBox({ children, transition, whileHover = 1.011 }: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: transition }}
            viewport={{ once: true }}
            whileHover={{ scale: whileHover }}
        >
            {children}
        </motion.div>
    )
}

export function MotionText({ children, transition, text, style }: MotionProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: transition }}
            viewport={{ once: true }}
            className={`${style}`}
        >
            {text}
        </motion.h2>
    )
}

export function MotionTextStaggered({ children, transition, text, style, el: Wrapper = 'p', whileHover = 1.011 }: MotionProps) {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once: true })

    return (
        <Wrapper className={`${style}`}>
            <motion.span
                initial="hidden"
                ref={ref}
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ staggerChildren: 0.03 }}
                aria-hidden
                whileHover={{ scale: whileHover }}
            >
                {text?.split("").map((char) => (
                    <motion.span variants={defaultAnimations}>{char}</motion.span>
                ))}
            </motion.span>
        </Wrapper>
    )
} 