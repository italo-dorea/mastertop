import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5571999454369"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full hover:bg-[#1ebd5a] hover:scale-110 hover:!shadow-2xl transition-all duration-300 flex items-center justify-center group animate-soft-pulse"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Using a standard SVG for WhatsApp as Lucide MessageCircle is generic, but sticking to Lucide for consistency if preferred. Let's use custom SVG for WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path d="M12.031 21c-1.524 0-3.013-.393-4.325-1.139L3 21.054l1.229-4.577a8.91 8.91 0 0 1-1.228-4.481c0-4.962 4.04-9.002 9.03-9.002 2.408 0 4.67.938 6.372 2.64 1.7 1.7 2.637 3.966 2.637 6.373 0 4.963-4.04 9.003-9.003 9.003h-.006zm-4.708-3.324l.321.19a7.352 7.352 0 0 0 4.39 1.417c4.053 0 7.355-3.303 7.355-7.356 0-1.966-.765-3.813-2.155-5.203-1.39-1.39-3.237-2.154-5.202-2.154-4.053 0-7.353 3.303-7.353 7.354 0 1.54.408 3.033 1.182 4.356l.208.35-1.127 4.195 4.381-1.15zM16.63 13.513c-.255-.128-1.507-.745-1.74-.83-.232-.086-.402-.128-.57.128-.171.255-.658.83-.807 1-.15.171-.301.192-.555.064-.256-.128-1.077-.397-2.05-1.266-.757-.677-1.268-1.512-1.418-1.768-.15-.256-.016-.395.111-.523.115-.115.255-.298.384-.447.128-.15.171-.256.255-.426.086-.171.043-.32-.02-.447-.064-.128-.57-1.378-.781-1.89-.206-.499-.415-.431-.57-.439-.15-.006-.321-.006-.491-.006-.17 0-.448.064-.683.32-.234.255-.896.874-.896 2.13 0 1.255.918 2.468 1.045 2.64.128.17 1.8 2.748 4.36 3.853 2.13.916 2.56.745 3.03.618.47-.128 1.507-.617 1.72-1.213.212-.596.212-1.107.15-1.213-.065-.107-.235-.17-.492-.298z"/>
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
}
