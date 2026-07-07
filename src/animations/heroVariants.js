
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

export const containerVariant = {
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

export const contentVariant = {
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