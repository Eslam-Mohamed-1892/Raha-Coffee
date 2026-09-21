import { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from '../assets/images/rahaLogo3.jpg'

export default function Header({ language }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isArabic = language === "ar";

    const navLinkClass = ({ isActive }) =>
        `text-sm ${isActive ? "text-[#E6CFA8]" : "text-white"
        }`;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-[#5A3825] text-white fixed top-0 right-0 left-0 z-20 h-16 md:h-20 font-arabic">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
                {/* Logo */}
                <NavLink
                dir="rtl"
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-xl"
                >
                    <span className="font-raha text-2xl">
                        راحة
                    </span>

                    <span className="inline-block h-6 w-px bg-white/60"></span>

                    <span className="font-inter text-lg tracking-wide">
                        RAHA
                    </span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink to="/" className={navLinkClass}>
                        {isArabic ? "الرئيسية" : "Home"}
                    </NavLink>

                    <NavLink to="/menu" className={navLinkClass}>
                        {isArabic ? "القائمة" : "Menu"}
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        {isArabic ? "عن راحة" : "About"}
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        {isArabic ? "تواصل معنا" : "Contact"}
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-xl"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden border-t border-white/10 bg-[#5A3825] px-4 py-4">
                    <div className="flex flex-col items-center gap-5">
                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className={navLinkClass}
                        >
                            {isArabic ? "الرئيسية" : "Home"}
                        </NavLink>

                        <NavLink
                            to="/menu"
                            onClick={closeMenu}
                            className={navLinkClass}
                        >
                            {isArabic ? "القائمة" : "Menu"}
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className={navLinkClass}
                        >
                            {isArabic ? "عن راحة" : "About"}
                        </NavLink>

                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                            className={navLinkClass}
                        >
                            {isArabic ? "تواصل معنا" : "Contact"}
                        </NavLink>
                    </div>
                </nav>
            )}
        </header>
    );
}