import cmfHeadphoneProDarkGrey from "./../assets/images/cmf-headphone-pro/CMF_Headphone-Dark-Grey.webp";
import cmfHeadphoneProLightGreen from "./../assets/images/cmf-headphone-pro/CMF_Headphone-Light-Green.webp";
import cmfHeadphoneProLightGrey from "./../assets/images/cmf-headphone-pro/CMF_Headphone-Light-grey.webp";

export const cmfHeadphonePro = {
    id: 2,
    name: "CMF Headphone Pro",
    description: "Designed for those who hear every detail. Rich sound, deep bass, and all-day comfort.",
    pricing: {
        amout: "69.99",
        currency: "USD",
        symbol: "$"
    },
    colors: [
        {
            id: 1,
            name: "Dark Grey",
            hex: "#070707",
            image: cmfHeadphoneProDarkGrey,
        },
        {
            id: 2,
            name: "Light Green",
            hex: "#F5F5F7",
            image: cmfHeadphoneProLightGreen,
        },
        {
            id: 3,
            name: "Light Gray",
            hex: "#F5F5F7",
            image: cmfHeadphoneProLightGrey,
        },
    ]
}