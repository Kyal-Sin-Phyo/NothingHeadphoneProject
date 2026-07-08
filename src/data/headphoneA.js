// assets
// Products
import headphoneABlack from "./../assets/images/headphone-a/Headphone-a-black.webp";
import headphoneAWhite from "./../assets/images/headphone-a/Headphone-a-white.webp";
import headphoneAYellow from "./../assets/images/headphone-a/Headphone-a-yellow.webp";
import headphoneAPink from "./../assets/images/headphone-a/Headphone-a-pink.webp";

export const products = [
    {
        id: 1,
        name: "Headphone (A)",
        description: "Pure sound. Zero distractions. Precision-engineered audio with adaptive noise cancellation.",
        
        pricing: {
            currency: "USD",
            symbol: "$",
            amount: 149.99,
        },

        colors: [
            {
                id: 1,
                name: "Black",
                hex: "#070707",
                image: headphoneABlack,
            },
            {
                id: 2,
                name: "White",
                hex: "#F5F5F7",
                image: headphoneAWhite,
            },
            {
                id: 3,
                name: "Yellow",
                hex: "#E2C11C",
                image: headphoneAYellow,
            },
            {
                id: 4,
                name: "Pink",
                hex: "#D8ADC0",
                image: headphoneAPink,
            },
        ]
    }
]