import { motion, useTransform, useSpring } from "framer-motion"


const AnimationLetter = ({ letter, progress, index, handleRef }) => {


    const start = index * 0.08;
    const end = start + 0.4;

    const x = useTransform(
        progress,
        [start, end],
        [500, 0]
    );

    const opacity = useTransform(
        progress,
        [start, end],
        [0, 1]
    );

    const smoothX = useSpring(x, {
        stiffness: 130,
        damping: 20
    });
    const smoothOpacity = useSpring(opacity);

    return (
        <motion.span
            ref={handleRef}
            style={{
                x: smoothX,
                opacity: smoothOpacity
            }}
            className="inline-block"
        >
            {letter}
        </motion.span>
    )
}

export default AnimationLetter;