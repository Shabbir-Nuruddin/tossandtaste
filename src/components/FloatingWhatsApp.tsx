"use client";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcons";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  // The cart has its own WhatsApp checkout button, so don't stack a second one on top.
  if (pathname === "/cart") return null;

  return (
    <a
      href={whatsappLink("Hi Toss & Taste! I have a question about your meals.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#1f9d55] text-white rounded-full shadow-lg shadow-black/20 hover:bg-[#188a49] transition-colors h-14 w-14 sm:w-auto sm:px-5 justify-center"
    >
      <SocialIcon name="WhatsApp" className="w-7 h-7 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline font-semibold text-sm">Chat with us</span>
    </a>
  );
}
