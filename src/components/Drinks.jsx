import { Link } from "react-router-dom";
import coffee from "../assets/images/drinks/coffee2.webp";
import icedCoffee from "../assets/images/drinks/icedcoffee3.webp";
import matcha from "../assets/images/drinks/matcha.jpg";
import tea from "../assets/images/drinks/tea.webp";


export default function Drinks({ language }) {
    const isArabic = language === "ar";

    const drinks = [
        {
            name: isArabic ? "قهوة" : "Coffee",
            image: coffee,
        },
        {
            name: isArabic ? "مشروبات باردة" : "Cold Drinks",
            image: icedCoffee,
        },
        {
            name: isArabic ? "شاي" : "Tea",
            image: tea,
        },
        {
            name: isArabic ? "شاي" : "Tea",
            name: isArabic ? "مشروبات مميزة" : "Specialty Drinks",
            image: matcha,
        },
    ];

    return (
        <section className="bg-[#F7F1E8] py-16 font-arabic">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl text-[#5A3825]">
                        {isArabic ? "مشروباتنا" : "Our Drinks"}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-[#5A3825]/70">
                        {isArabic
                            ? "مشروب يناسب كل لحظة."
                            : "A drink for every moment."}
                    </p>
                </div>

                <div dir="rtl" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {drinks.map((drink) => (
                        <div
                            key={drink.name}
                            className="bg-[#F7F1E8]"
                        >
                            <div className="aspect-square bg-[#EDE4D7]">
                                {drink.image && (
                                    <img
                                        src={drink.image}
                                        alt={drink.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                )}
                            </div>

                            <h3 className="mt-3 text-center text-sm font-semibold text-[#5A3825]">
                                {drink.name}
                            </h3>
                            <Link
                                to="/menu"
                                className="inline-block rounded-full w-full text-center mt-3 bg-[#5A3E2B] px-6 py-3 text-sm text-white"
                            >
                                Explore Menu
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}