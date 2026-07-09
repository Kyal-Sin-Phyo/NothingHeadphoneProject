import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
    Moon,
    SunMedium,
} from "lucide-react";

const LABEL_INITIAL_X = 13;
const LABEL_ACTIVE_X = 18;
const LABEL_EXIT_X = 10;

const ThemesToggleButton = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="shrink-0 relative flex justify-center items-center gap-1.25 w-23 h-9 text-base font-medium rounded-full outline-none bg-bg/10 backdrop-blur-xs shadow-[0_2px_5px] shadow-text/15 cursor-pointer">
            <AnimatePresence mode="wait">
                {theme === "dark" ? 
                    (
                        <motion.span
                            initial={{opacity: 0, x: -LABEL_INITIAL_X}}
                            animate={{opacity: 1, x: -LABEL_ACTIVE_X}}
                            exit={{opacity: 0, x: -LABEL_EXIT_X}}
                            key="Dark"
                        >
                            Dark
                        </motion.span>
                    ) :
                    (
                        <motion.span
                            initial={{opacity: 0, x: LABEL_INITIAL_X}}
                            animate={{opacity: 1, x: LABEL_ACTIVE_X}}
                            exit={{opacity: 0, x: LABEL_EXIT_X}}
                            key="Light"
                        >
                            Light
                        </motion.span>
                    )
                }
            </AnimatePresence>
            
            <motion.div
                animate={{
                    x: theme === "dark" ? 25 : -25,
                }}
                transition={{
                    duration: 0.3,
                }}
                className="absolute top-1/2 -translate-y-1/2 w-9 h-7 grid place-content-center rounded-2xl shadow-glass backdrop-blur-[3px]"
            >
                <AnimatePresence mode="wait">
                    {theme === "dark" ?
                        (
                            <motion.span
                                key="moon"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{
                                    duration: 0.15,
                                }}
                                className="absolute inset-0 grid place-content-center"
                            >
                                <Moon size={25} fill="#FFFFFF" strokeWidth={0} />
                            </motion.span>
                        ) :
                        (
                            <motion.span
                                key="sun"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{
                                    duration: 0.15,
                                }}
                                className="absolute inset-0 grid place-content-center"
                            >
                                <SunMedium size={25} color="#080808" strokeWidth={2} />
                            </motion.span>
                        )
                    }
                </AnimatePresence>
            </motion.div>
        </button>
    )
}

export default ThemesToggleButton;