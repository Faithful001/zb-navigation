import face_logo from "../../../public/assets/logos/face_logo.png";
import dropdown_icon from "../../../public/assets/icons/dropdown_icon.svg";
import hamburger_icon from "../../../public/assets/icons/hamburger_icon.svg";
import close_menu_icon from "../../../public/assets/icons/close_menu_icon.svg";
import { navbarData } from "../../data/navbar.data";
import {
  useState,
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesDropdownSheet from "./ServicesDropdownSheet";
import { useMediaQuery } from "@chakra-ui/react";
import MobileServicesSheet from "./MobileServicesSheet";

const Header = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isLargerThanMobile] = useMediaQuery("(min-width: 640px)");

  // Handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Track scroll position
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-[21px] px-[21px] flex items-center justify-between z-50 ${
        scrolled ? "bg-white" : ""
      } transition-all duration-400 `}
    >
      <img src={face_logo} alt="face_logo" className="h-[56px] w-[56px]" />

      {/* Desktop Navigation */}
      <div className="sm:flex hidden relative items-center gap-[36px]">
        <NavItems
          isServiceDropdownOpen={isServiceDropdownOpen}
          setIsServiceDropdownOpen={setIsServiceDropdownOpen}
        />
        {isLargerThanMobile && (
          <ServicesDropdownSheet
            isOpen={isServiceDropdownOpen}
            onClose={() => setIsServiceDropdownOpen(false)}
          />
        )}
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="sm:hidden block absolute top-9 right-9"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={hamburger_icon} alt="hamburger_icon" />
      </button>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden fixed inset-0 bg-black z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Content */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="sm:hidden fixed top-0 right-0 h-screen w-[300px] bg-white z-50 flex flex-col items-start gap-[36px] p-6 shadow-lg"
            >
              <button
                className="self-end pr-3 pt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={close_menu_icon} alt="close_icon" />
              </button>
              {!isServiceDropdownOpen && (
                <NavItems
                  isServiceDropdownOpen={isServiceDropdownOpen}
                  setIsServiceDropdownOpen={setIsServiceDropdownOpen}
                />
              )}
              {!isLargerThanMobile && (
                <MobileServicesSheet
                  isOpen={isServiceDropdownOpen}
                  onClose={() => setIsServiceDropdownOpen(false)}
                />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

const NavItems = ({
  isServiceDropdownOpen,
  setIsServiceDropdownOpen,
}: {
  isServiceDropdownOpen: boolean;
  setIsServiceDropdownOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return navbarData.map((item, index) => (
    <div key={index} className="text-sm text-[#808080] font-bold">
      {item.url && index < navbarData.length - 1 ? (
        <a href={item.url}>{item.name}</a>
      ) : item.url === null ? (
        <span
          className="flex items-center gap-x-[6px] cursor-pointer"
          onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
        >
          <p>{item.name}</p>
          <img
            src={dropdown_icon}
            alt="dropdown_icon"
            className="sm:rotate-0 rotate-270"
          />
        </span>
      ) : index === navbarData.length - 1 ? (
        <a
          href={item.url}
          className="px-[22.3px] py-[14px] rounded-full text-white from-[#1F6DFF] to-[#083EA3] bg-gradient-to-r"
        >
          {item.name}
        </a>
      ) : null}
    </div>
  ));
};
