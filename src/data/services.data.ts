import graphic from "../../public/assets/icons/graphic_icon.svg";
import animation from "../../public/assets/icons/animation_icon.svg";
import illustration from "../../public/assets/icons/illustration_icon.svg";
import print from "../../public/assets/icons/print_icon.svg";
import ui from "../../public/assets/icons/ui_icon.svg";
import web_dev from "../../public/assets/icons/web_dev_icon.svg";

interface ServiceItem {
  name: string;
  description: string;
  icon: string;
  url: string;
}

export const servicesData: ServiceItem[] = [
  {
    name: "Graphic Design",
    description: "Get creative inspiration",
    icon: graphic,
    url: "",
  },
  {
    name: "3D Animation",
    description: "Impactful storytelling",
    icon: animation,
    url: "",
  },
  {
    name: "UI/UX Design",
    description: "Stunning web design",
    icon: ui,
    url: "",
  },
  {
    name: "Web Development",
    description: "Functional digital products",
    icon: web_dev,
    url: "",
  },
  {
    name: "Print Design",
    description: "Beautiful crafted prints",
    icon: print,
    url: "",
  },
  {
    name: "Illustration",
    description: "Artistic visual expression",
    icon: illustration,
    url: "",
  },
];
