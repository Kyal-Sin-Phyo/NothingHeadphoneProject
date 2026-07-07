
export const imageVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 250 : -250,
        opacity: 0,
        scale: 0.25,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -250 : 250,
        opacity: 0,
        scale: 0.25,
    })
}

export const containerVariants = {
    enter: {
        opacity: 0,
    },
    center: {
        opacity: 1,
        transition: {
            duration: 0.15,
            staggerChildren: 0.15,
        }
    },
}

export const textVariants = {
    enter: {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
    },
    center: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
        }
    },
    
}

export const navListVariants = {
    hidden: {
        opacity: 0,
        height: 0
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            staggerChildren: 0.1,
            ease: "linear"
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
            when: "afterChildren",
            ease: "linear",
        }
    }
};

export const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: {
            duration: 0.1,
        }
    }
};