import React, { useRef } from 'react';
import { bgVariants } from '../../animations/cardVariants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


const ProductCard = React.memo(({ image, label }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const opacity = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
    );
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [300, 0]
    );
    const smoothOpacity = useSpring(opacity);
    const smoothY = useSpring(y);

    return (
        <motion.div
            ref={ref}
            initial="initial"
            whileHover="hover"
            style={{
                opacity: smoothOpacity,
                y: smoothY
            }}
            className="relative w-full max-w-85 h-auto flex flex-col justify-center items-center gap-3.75 p-3.75 rounded-[10px]"
        >
            <motion.div
                variants={bgVariants}
                transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping:  20,
                }}
                className='absolute inset-0 rounded-[10px] bg-surface/50 -z-1'
            />
            <div className="w-full h-auto overflow-hidden rounded-[10px] bg-bg border border-border/50">
                <img src={image} className='w-full h-auto object-contain' alt="" />
            </div>
            <span className='text-base font-medium'>{label}</span>
        </motion.div>
    )
})

export default ProductCard;