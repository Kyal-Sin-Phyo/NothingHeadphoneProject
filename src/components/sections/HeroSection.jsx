import { AnimatePresence, motion } from 'framer-motion';
import ColorSection from "../ui/ColorSection";
import GlassButton from '../ui/GlassButton';
import BackgroundRings from '../ui/BackgroundRings';

import {
    imageVariants,
    containerVariants,
    textVariants,
} from '../../animations/heroVariants';
import useProductCarousal from '../../hooks/useProductCarousal';

import {
    ShoppingCart,
    Heart,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";


const HeroSection = ({ product }) => {

    const colors = product.colors;
    const {
        activeIndex,
        direction,
        prevBtn,
        nextBtn,
        select
    } = useProductCarousal(product.colors.length);

    return (
        <section className="flex md:flex-row flex-col w-full min-h-[calc(100dvh-4rem)] md:items-stretch items-center gap-5">
            <motion.div
                variants={containerVariants}
                initial="enter"
                animate="center"
                className="flex flex-col justify-center items-center md:items-start gap-7.5 md:gap-10 w-full h-auto"
            >
                <motion.h1
                    variants={textVariants}
                    className="text-2xl md:text-3xl lg:text-5xl font-bold"
                >
                        {product.name}
                </motion.h1>
                <motion.p
                    variants={textVariants}
                    className="text-text-muted text-center md:text-start text-sm leading-relaxed"
                >
                    {product.description}
                </motion.p>
                <motion.span
                    variants={textVariants}
                    className="text-2xl md:text-3xl lg:text-5xl font-bold"
                >
                    {product.pricing.symbol}{product.pricing.amount}
                </motion.span>

                <motion.div variants={textVariants} className="w-fit h-fit">
                    <ColorSection colors={colors} activeIndex={activeIndex} changeColor={select} />
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                    }}
                    className="flex justify-center md:justify-start items-center gap-3.75 w-full h-auto"
                >
                    <GlassButton
                        label="Buy Now"
                        icon={ShoppingCart}
                        iconSet={true}
                    />
                    <GlassButton
                        icon={Heart}
                        iconSet={true}
                    />
                </motion.div>
            </motion.div>
            <div className="relative flex flex-col justify-center items-center w-full h-auto gap-2.5">
                <div className="relative flex justify-center items-center w-90 h-90 md:w-110 md:h-110 lg:w-140 lg:h-140">
                    <AnimatePresence mode="sync" custom={direction}>
                        <motion.img
                            key={activeIndex}
                            variants={imageVariants}
                            custom={direction}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.5,
                                ease: "backInOut"
                                
                            }}
                            src={colors[activeIndex].image}
                            className="w-full h-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-999"
                            alt='Product'
                        />
                    </AnimatePresence>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-35 h-35 rounded-full bg-text-muted blur-[125px] -z-1"></span>
                    <BackgroundRings />
                </div>
                
                <div className="relative z-99 flex justify-between md:justify-end items-center gap-5 w-full h-auto">
                    <GlassButton
                        icon={ChevronLeft}
                        iconSet={true}
                        size={30}
                        onClick={prevBtn}
                    />
                    <GlassButton
                        icon={ChevronRight}
                        iconSet={true}
                        size={30}
                        onClick={nextBtn}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;