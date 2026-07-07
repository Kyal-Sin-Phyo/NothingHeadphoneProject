import { products } from "../data/products";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
    const product = products[0];
    return (
        <main className="relative z-10 flex flex-col md:justify-center items-center gap-5  w-full h-auto pt-20 px-3.75 md:px-7.5 font-jetbrains">
            <HeroSection
                product={product}
            />
        </main>
    )
}

export default Home;
