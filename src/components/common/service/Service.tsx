import CustomCard from "@/components/custom/CustomCard";
import CustomContainer from "@/components/custom/CustomContainer";
import { FaPenFancy } from "react-icons/fa";
import { HiPuzzlePiece } from "react-icons/hi2";
import { RiMedicineBottleFill } from "react-icons/ri";

interface CustomServiceProps {
  title: string;
  description: string;
  customContainerValue: string;
}

const designs = [
  {
    id: 1,
    services: [
      {
        id: 1,
        title: "User Research and Persona Development",
        icon: <FaPenFancy className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />,
      },
      {
        id: 2,
        title: "Information Architecture and Wireframing",
        icon: (
          <HiPuzzlePiece className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
      {
        id: 3,
        title: "Interactive Prototyping and User Testing",
        icon: (
          <RiMedicineBottleFill className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
      {
        id: 4,
        title: "UI Design and Visual Branding",
        icon: (
          <RiMedicineBottleFill className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
    ],
    description: "User Experience (UX) Design",
  },
  {
    id: 2,
    services: [
      {
        id: 1,
        title: "Intuitive and Visually Appealing Interface Design",
        icon: <FaPenFancy className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />,
      },
      {
        id: 2,
        title: "Custom Iconography and Illustration",
        icon: (
          <HiPuzzlePiece className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
      {
        id: 3,
        title: "Typography and Color Palette Selection",
        icon: (
          <RiMedicineBottleFill className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
      {
        id: 4,
        title: "Responsive Design for Various Devices",
        icon: (
          <RiMedicineBottleFill className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
    ],
    description: "User Interface (UI) Design",
  },
  {
    id: 3,
    services: [
      {
        id: 1,
        title: "Logo Design and Visual Identity Development",
        icon: <FaPenFancy className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />,
      },
      {
        id: 2,
        title: "Brand Strategy and Positioning",
        icon: (
          <HiPuzzlePiece className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
      {
        id: 3,
        title: "Brand Guidelines and Style Guides",
        icon: (
          <RiMedicineBottleFill className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
      {
        id: 4,
        title: "Marketing Collateral Design (Brochures, Business Cards, etc.)",
        icon: (
          <RiMedicineBottleFill className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10" />
        ),
      },
    ],
    description: "Branding and Identity",
  },
];

const Service = ({
  title,
  description,
  customContainerValue,
}: CustomServiceProps) => {
  return (
    <div className="flex flex-col container  lg:px-0 border border-[var(--color-border)] gap-8 lg:gap-10 xl:gap-12 pt-10 lg:pt-20 xl:pt-30">
      <div className="flex flex-col px-4 md:px-6 lg:px-10 xl:px-12 gap-7 md:gap-8 lg:gap-10 xl:gap-12 ">
        <div className=" gap-2 lg:gap-3 xl:gap-4">
          <h2 className="h2-start">{title}</h2>
          <p className="service-description">{description}</p>
        </div>
        <div className="custom-container-22 ">
          <CustomContainer>{customContainerValue}</CustomContainer>
        </div>
      </div>
      <div className="pt-12 gap-12">
        {designs.map((design) => (
          <CustomCard
            key={design.id}
            services={design.services}
            description={design.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
