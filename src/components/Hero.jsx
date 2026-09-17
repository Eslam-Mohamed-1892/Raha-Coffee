import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";

export default function Hero({ language }) {
  const isArabic = language === "ar";

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden mt-16 md:mt-20">
      
      <picture className="absolute inset-0">
        <source media="(max-width: 1024px)" srcSet={hero1} />
        <img
          src={hero2}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-6xl mx-auto px-4 min-h-[calc(100vh-72px)] flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl">
            {isArabic ? "راحة تبدأ من أول رشفة" : "Comfort in every sip"}
          </h1>

          <p className="mt-4 text-base md:text-lg">
            {isArabic
              ? "قهوة هادئة، أجواء مريحة، ولحظات تستحق أن تعاش."
              : "Quiet coffee, peaceful moments, and a place to slow down."}
          </p>
        </div>
      </div>

    </section>
  );
}