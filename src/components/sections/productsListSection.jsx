import ProductCard from "../ui/ProductCard";
import AnimationLetter from "../ui/AnimationLetter";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const ProductListSection = ({ products }) => {

    const handleRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: handleRef,
        offset: ["start end", "end center"]
    });

    return (
        <div className="flex flex-col items-center gap-10 w-full h-auto py-10">
            <h2 className="text-4xl font-black font-doto tracking-wide">
                {
                    "PRODUCTS".split("").map((letter, index) => (
                        <AnimationLetter
                            key={index}
                            letter={letter}
                            index={index}
                            progress={scrollYProgress}
                            handleRef={handleRef}
                        />
                    ))
                }
            </h2>
            <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3.75 p-2.5 place-items-center w-full h-auto z-50"
            >
                {products.map(product => (
                    product.colors.map(item => (
                        <ProductCard
                            key={item.id}
                            image={item.image}
                            label={product.name}
                        />
                    ))
                ))}
            </div>
        </div>
    )
}

export default ProductListSection;