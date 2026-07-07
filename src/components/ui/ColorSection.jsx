import { motion } from "framer-motion";

const ColorSection = ({ colors, activeIndex, changeColor }) => {

    return (
        <div className="flex flex-col justify-center items-center gap-3.75 w-full h-auto">
            <h3 className="text-base font-normal">AVAILABLE COLORS</h3>
            <ul className="flex justify-center items-center gap-3.75 w-full">
                {colors.map((color, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <li
                            key={color.id}
                            className="relative flex flex-col gap-2.5 items-center w-fit h-fit"
                        >
                            <motion.button
                                onClick={() => changeColor(index)}
                                style={{ backgroundColor: color.hex }}
                                animate={{ y: isActive ? -10 : 0 }}
                                transition={{
                                    duration: 0.05,
                                    ease: "linear"
                                }}
                                className="w-6 h-6 shrink-0 outline-none rounded-full border-2 border-border cursor-pointer duration-300"
                            ></motion.button>
                            {isActive && (
                                <motion.span
                                    layoutId="active-point"
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="bg-text absolute -bottom-1.25 block w-2 h-2 rounded-full"
                                />
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ColorSection;