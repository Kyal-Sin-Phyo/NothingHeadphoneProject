import { useState } from "react";
import { motion } from "framer-motion";

const GlassButton = ({ label = "", icon: Icon, iconSet = false, size = 20, onClick}) => {

    const [isDisable, setIsDisable] = useState(false);

    if(isDisable) {
        setTimeout(() => {
            setIsDisable(false);
        }, 500);
    }

    const handleBtn = () => {
        setIsDisable(true);
        onClick();
    }

    return (
        <motion.button
            whileTap={{
                scale: 0.9
            }}
            transition={{
                duration: 0,
                ease: "linear"
            }}
            onClick={handleBtn}
            disabled={isDisable}
            className={`${label ? "px-5" : "px-3"} outline-none flex justify-center items-center gap-3.75 w-auto h-auto py-3 shadow-glass backdrop-blur-xs rounded-full font-normal transition-transform cursor-pointer bg-bg/40`}
        >
            {label}
            {iconSet && <Icon size={size} />}
        </motion.button>
    )
}

export default GlassButton;