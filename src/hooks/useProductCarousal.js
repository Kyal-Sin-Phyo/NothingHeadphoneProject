import { useState } from 'react';

const useProductCarousal = (length) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const prevBtn = () => {
        setDirection(-1)
        setActiveIndex(prev => prev === 0 ? length - 1 : prev - 1)
    }
    const nextBtn = () => {
        setDirection(1)
        setActiveIndex(prev => prev === length - 1 ? 0 : prev + 1)
    }
    const select = (index) => {
        if (index === activeIndex) return;
        setDirection(index < activeIndex ? -1 : 1);
        setActiveIndex(index);
    };
    return {
        activeIndex,
        direction,
        prevBtn,
        nextBtn,
        select,
    }
}

export default useProductCarousal;