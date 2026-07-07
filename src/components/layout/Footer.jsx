import SocialButton from "../ui/SocialButton";
import { socials } from "../../data/Products";
import ThemesToggleButton from "../ui/ThemesToggleButton";
import { motion } from "motion/react";

const Footer = () => {
    return (
        <footer
            className="relative z-99 flex justify-between items-center w-full h-15 px-3.75 mt-2.5 overflow-hidden"
        >
            <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.5,
                }}
                className="flex items-center gap-2.5 w-auto h-auto"
            >
                {
                    socials.map(item => (
                        <SocialButton
                            key={item.name}
                            icon={item.icon}
                        />
                    ))
                }
            </motion.div>
            <ThemesToggleButton />
        </footer>
    )
}

export default Footer;