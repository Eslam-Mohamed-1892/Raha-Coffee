import { useState } from "react";
import { drinks, categories } from "../data/menu";

export default function Menu({ language }) {
  const isArabic = language === "ar";
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredDrinks =
    activeCategory === "All"
      ? drinks
      : drinks.filter((drink) => drink.category === activeCategory);
  const handleOrder = (drink) => {
    const drinkName = isArabic ? drink.nameAr : drink.name;

    const message = isArabic
      ? `مرحبًا، أريد طلب ${drinkName} بسعر ${drink.price} جنيه.`
      : `Hello, I would like to order ${drinkName} for ${drink.price} EGP.`;

    const whatsappUrl = `https://wa.me/201050838177?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-[#F8F3EA] min-h-screen pt-28 pb-20 items-center font-arabic">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm text-[#5A3825] mb-2">
            {isArabic ? "قائمتنا" : "Our Menu"}
          </p>

          <h1 className="text-3xl md:text-4xl text-[#5A3825]">
            {isArabic ? "اختر مشروبك المفضل" : "Find Your Favorite"}
          </h1>
        </div>

        {/* Categories */}
        <div className="overflow-x-auto pb-3 mb-10">
          <div className="w-max min-w-full flex justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.en}
                onClick={() => setActiveCategory(category.en)}
                className={`px-4 py-2 rounded-md cursor-pointer text-sm ${activeCategory === category.en
                  ? "bg-[#5A3825] text-white"
                  : "bg-white text-[#5A3825]"
                  }`}
              >
                {isArabic ? category.ar : category.en}
              </button>
            ))}          </div>
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredDrinks.map((drink) => (
            <article className="bg-white rounded-lg overflow-hidden flex flex-col h-full">

              <img
                src={drink.image}
                alt={isArabic ? drink.nameAr : drink.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 flex flex-col flex-1">

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-lg text-[#5A3825]">
                    {isArabic ? drink.nameAr : drink.name}
                  </h2>

                  <span className="text-sm text-[#5A3825] whitespace-nowrap">
                    {drink.price} EGP
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-6 mb-5">
                  {isArabic ? drink.descriptionAr : drink.description}
                </p>

                <button onClick={() => handleOrder(drink)}
                  className="bg-[#5A3825] text-white cursor-pointer text-sm px-5 py-2.5 rounded-md mt-auto self-start">
                  {isArabic ? "اطلب الآن" : "Order Now"}
                </button>

              </div>

            </article>))}

        </div>
      </div>
    </main>
  );
}