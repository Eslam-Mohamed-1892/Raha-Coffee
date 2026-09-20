import raha from '../assets/images/OIP.webp'
export default function About({ language }) {
  const isArabic = language === "ar";

  return (
    <main className="bg-[#F8F3EA] min-h-screen pt-28 font-arabic">

      {/* About Hero */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">

          <p className="text-sm text-[#5A3825] mb-2">
            {isArabic ? "عن راحة" : "About Raha"}
          </p>

          <h1 className="text-3xl md:text-4xl text-[#5A3825] mb-5">
            {isArabic
              ? "مكان صُمم لتأخذ نفسًا"
              : "A Place Made to Slow Down"}
          </h1>

          <p className="text-base text-gray-600 leading-7 max-w-2xl mx-auto">
            {isArabic
              ? "راحة هي مساحة هادئة وبسيطة، حيث تبدأ اللحظة الجيدة من أول رشفة."
              : "Raha is a quiet and simple space, where a good moment begins with the very first sip."}
          </p>

        </div>
      </section>
      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Image */}
            <div className="aspect-4/3 bg-[#EDE4D8] rounded-lg overflow-hidden">
              <img
                src={raha}
                alt={isArabic ? "داخل مقهى راحة" : "Inside Raha coffee shop"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm text-[#5A3825] mb-2">
                {isArabic ? "قصتنا" : "Our Story"}
              </p>

              <h2 className="text-3xl md:text-4xl text-[#5A3825] mb-5">
                {isArabic
                  ? "بدأت راحة من فكرة بسيطة"
                  : "Raha Started with a Simple Idea"}
              </h2>

              <p className="text-base text-gray-600 leading-7 mb-4">
                {isArabic
                  ? "أن يكون هناك مكان هادئ يمكنك أن تهرب إليه قليلًا من سرعة اليوم، تستمتع فيه بقهوة جيدة ووقت هادئ."
                  : "Raha began with a simple idea: creating a quiet place where you can step away from the pace of the day, enjoy a good cup of coffee, and take your time."}
              </p>

              <p className="text-base text-gray-600 leading-7">
                {isArabic
                  ? "اهتممنا بكل تفصيلة لتكون التجربة بسيطة ومريحة، من المشروبات التي نقدمها إلى أجواء المكان في كل وقت من اليوم."
                  : "Every detail was designed to keep the experience simple and comfortable, from the drinks we serve to the atmosphere of the place throughout the day."}
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* The Raha Experience */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-sm text-[#5A3825] mb-2">
              {isArabic ? "تجربة راحة" : "The Raha Experience"}
            </p>

            <h2 className="text-3xl md:text-4xl text-[#5A3825]">
              {isArabic
                ? "أكثر من مجرد قهوة"
                : "More Than Just Coffee"}
            </h2>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="text-center">
              <h3 className="text-lg text-[#5A3825] mb-3">
                {isArabic ? "هدوء المكان" : "A Quiet Space"}
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                {isArabic
                  ? "مساحة هادئة تساعدك على الابتعاد قليلًا عن زحمة اليوم."
                  : "A calm space that gives you a moment away from the pace of the day."}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <h3 className="text-lg text-[#5A3825] mb-3">
                {isArabic ? "قهوة بعناية" : "Coffee with Care"}
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                {isArabic
                  ? "مشروبات محضرة بعناية لتكون كل رشفة جزءًا من التجربة."
                  : "Thoughtfully prepared drinks where every sip becomes part of the experience."}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <h3 className="text-lg text-[#5A3825] mb-3">
                {isArabic ? "خذ وقتك" : "Take Your Time"}
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                {isArabic
                  ? "مكان يمكنك فيه الجلوس والاستمتاع بلحظتك دون استعجال."
                  : "A place where you can sit, relax, and enjoy your moment without rushing."}
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}