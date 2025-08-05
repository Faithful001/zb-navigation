import { servicesData } from "../../data/services.data";
import arrow_icon from "../../../public/assets/icons/arrow_icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

interface ServicesDropdownSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdownSheet = ({
  isOpen,
  onClose,
}: ServicesDropdownSheetProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="dropdown-content z-50 w-max absolute shadow-md shadow-gray-800/20 top-10 right-0 bg-white rounded-[25px] p-[22px] grid grid-cols-2 gap-[43px]"
          >
            {servicesData.map((service, index) => {
              return (
                <a
                  href={service.url}
                  key={index}
                  className="flex items-center justify-between hover:bg-[#1D68F4]/5 p-[16px] rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="w-[35px] h-[35px]"
                    />
                    <div className="flex flex-col">
                      <h2 className="font-bold text-[#353535] ">
                        {service.name}
                      </h2>
                      <p className="text-sm text-[#353535] ">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <img src={arrow_icon} alt="arrow_icon" />
                </a>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ServicesDropdownSheet;
