import { useState } from "react";
import { motion } from "framer-motion";
import ThemesToggleButton from "../ui/ThemeToggleButton";
import { MobileNavbar, LaptopNavbar} from "./Navbar";
import {
    Menu
} from "lucide-react";


const Header = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
            }}
            className="fixed top-0 flex justify-start items-center gap-3.75 w-full h-17.5 py-7.5 px-3.75 md:px-7.5 z-50 backdrop-blur-xs "
        >

            <div className="shrink-0 flex justify-between items-center w-full h-auto">

                <a href="#" className="outline-none flex gap-2.5 items-center relative text-xl md:text-3xl lg:text-5px font-black font-doto cursor-pointer">
                    <span className="shrink-0 block w-5 h-5 border-4 border-white shadow-[0_2px_5px_#0008] bg-danger rounded-full"></span>
                    Nothing Headphone
                </a>

                <div className="hidden lg:flex items-center gap-2.5">
                    <LaptopNavbar />
                    <ThemesToggleButton />
                </div>
                <button onClick={() => setOpenNavbar(prev => !prev)} className="lg:hidden outline-none cursor-pointer">
                    <Menu size={25} />
                </button>

            </div>
            {
                <MobileNavbar
                    openNavbar={openNavbar}  
                />
            }
        </motion.header>
    )
}

export default Header;