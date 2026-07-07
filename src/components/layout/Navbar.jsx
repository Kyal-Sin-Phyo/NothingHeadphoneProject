import { navbarItems } from "../../data/Products";
import { AnimatePresence, hex, motion } from "framer-motion";
import { navListVariants, navItemVariants } from "../../animations/heroVariants"


export const MobileNavbar = ({ openNavbar }) => {
    return (
        <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 shrink-0 w-full h-fit lg:hidden overflow-hidden text-lg font-jetbrains font-medium z-55 px-2.5">
            <AnimatePresence mode="wait">
                {openNavbar && (
                    <motion.ul
                        variants={navListVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-center bg-surface gap-7.5 p-7.5 w-full h-auto border border-border rounded-[10px] uppercase"
                    >
                        {navbarItems.map((label, idx) => (
                            <motion.li
                                variants={navItemVariants}
                                key={label}
                                className={`${label === "Home" ? "text-text" : "text-text-muted "} hover:text-text transition-colors duration-300`}
                            >
                                <a href="#">{label}</a>
                            </motion.li>
                        ))}
                    </motion.ul>
                )} 
            </AnimatePresence>
        </nav>
    )
}

export const LaptopNavbar = () => {
    return (
        <nav className="hidden lg:flex justify-center items-center shrink-0 w-auto h-fit overflow-hidden text-lg font-jetbrains font-medium">

            <ul
                className="flex flex-row justify-center items-center gap-7.5 px-5 w-full h-auto uppercase"
            >
                {navbarItems.map((label) => (
                    <li
                        key={label}
                        className={`${label === "Home" ? "text-text" : "text-text-muted"}  hover:text-text transition-colors duration-300`}
                    >
                        <a href="#" className="outline-none">{label}</a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}
