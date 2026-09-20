export default function LanguageSwitch({ language, setLanguage }) {
  const isArabic = language === "ar";

  return (
    <button
      onClick={() => setLanguage(isArabic ? "en" : "ar")}
      className={`fixed bottom-4 right-4 z-50 rounded-2xl bg-[#5A3825] border border-solid-white/10 text-white px-4 py-2 text-sm cursor-pointer
      }`}
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}