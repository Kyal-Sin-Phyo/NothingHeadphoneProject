import { headphoneA } from "./../data/index";
import { products } from "./../data/index";
import HeroSection from "../components/sections/HeroSection";
import ProductListSection from "../components/sections/productsListSection";

const Home = () => {
    return (
        <main className="relative z-10 flex flex-col md:justify-center items-center gap-5  w-full h-auto pt-20 px-3.75 md:px-7.5 font-jetbrains">
            <HeroSection
                product={headphoneA}
            />
            <ProductListSection
                products={products}
            />
        </main>
    )
}

export default Home;