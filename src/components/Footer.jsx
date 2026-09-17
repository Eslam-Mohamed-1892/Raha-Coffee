export default function Footer({ language }) {
  const isArabic = language === "ar";

  return (
    <footer className="bg-[#5A3825] text-white mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-lg cursor-pointer">
            <span>راحة</span>
            <span className="mx-2">|</span>
            <span>RAHA</span>
          </div>

          <p className="text-sm text-white/80">
            {isArabic
              ? "مكان للراحة، قهوة ولحظات هادئة."
              : "A place for coffee, comfort and quiet moments."}
          </p>

        </div>

        <div className="border-t border-white/20 mt-6 pt-4 text-center">
          <p className="text-xs text-white/60">
            © 2026 RAHA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}