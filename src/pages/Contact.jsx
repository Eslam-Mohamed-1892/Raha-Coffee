
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa6";
import { useState } from "react";

export default function Contact({ language }) {
  const isArabic = language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "201050838177";

    const whatsappMessage = `
Hello Raha Coffee,
    
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: <FaLocationDot />,
      title: isArabic ? "الموقع" : "Location",
      value: isArabic
        ? "كمبوند راحة، القاهرة، مصر"
        : "Raha Compound, Cairo, Egypt",
    },
    {
      icon: <FaPhone />,
      title: isArabic ? "الهاتف" : "Phone",
      value: "+20 1050838177",
    },
    {
      icon: <FaEnvelope />,
      title: isArabic ? "البريد الإلكتروني" : "Email",
      value: "hello@rahacoffee.com",
    },
    {
      icon: <FaClock />,
      title: isArabic ? "مواعيد العمل" : "Opening Hours",
      value: isArabic
        ? "يوميًا من 8 ص إلى 12 م"
        : "Daily, 8:00 AM - 12:00 AM",
    },
  ];

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F8F3EA] pt-28 font-arabic"
    >
      {/* Contact Intro */}
      <section className="px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#5A3825]">
            {isArabic ? "تواصل معنا" : "Get In Touch"}
          </p>

          <h1 className="text-4xl font-semibold text-[#5A3825] md:text-5xl">
            {isArabic ? "يسعدنا أن نسمع منك" : "We’d Love to Hear From You"}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6F6259] md:text-base">
            {isArabic
              ? "لو عندك أي سؤال أو حابب تتواصل معنا، ابعتلنا رسالة وسنكون سعداء بالرد عليك."
              : "Have a question or simply want to say hello? Send us a message and we’ll be happy to hear from you."}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#5A3825]">
              {isArabic ? "معلومات التواصل" : "Contact Information"}
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E7DDD0] bg-white/50 p-5"
                >
                  <div className="mb-4 text-xl text-[#5A3825]">
                    {item.icon}
                  </div>

                  <h3 className="mb-1 font-medium text-[#5A3825]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-[#6F6259]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#5A3825] p-6 text-[#F8F3EA]">
              <FaWhatsapp className="mb-4 text-2xl" />

              <h3 className="text-xl font-semibold">
                {isArabic
                  ? "تواصل معنا على واتساب"
                  : "Chat With Us on WhatsApp"}
              </h3>

              <p className="mt-2 text-sm leading-6 opacity-80">
                {isArabic
                  ? "للاستفسارات السريعة، يمكنك التواصل معنا مباشرة."
                  : "For quick questions, feel free to reach us directly on WhatsApp."}
              </p>
            </div>
          </div>

          {/* Message Form */}
          <div className="rounded-2xl bg-white/60 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[#5A3825]">
              {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-[#5A3825]">
                  {isArabic ? "الاسم" : "Name"}
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#DDD2C5] bg-[#F8F3EA] px-4 py-3 text-sm outline-none focus:border-[#5A3825]"
                  placeholder={isArabic ? "اكتب اسمك" : "Your name"}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#5A3825]">
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#DDD2C5] bg-[#F8F3EA] px-4 py-3 text-sm outline-none focus:border-[#5A3825]"
                  placeholder={isArabic ? "اكتب بريدك الإلكتروني" : "Your email"}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#5A3825]">
                  {isArabic ? "رسالتك" : "Message"}
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none rounded-lg border border-[#DDD2C5] bg-[#F8F3EA] px-4 py-3 text-sm outline-none focus:border-[#5A3825]"
                  placeholder={isArabic ? "اكتب رسالتك..." : "Write your message..."}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#5A3825] px-6 py-3 text-sm font-medium text-white active:bg-[#402719]"
              >
                <FaWhatsapp />
                {isArabic ? "إرسال عبر واتساب" : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

