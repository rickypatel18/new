import { ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  hoverBgColor?: string;
  textSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  display?: string;
  padding?:string;
  children?: ReactNode;
}

const CustomButton = ({
  text,
  bgColor = "bg-[var(--color-primary)]",
  textColor = "text-[var(--color-text-primary)]",
  hoverTextColor = "hover:text-[var(--color-background)]",
  hoverBgColor = "hover:bg-[var(--color-hover-primary)]",
  textSize = "text-sm",
  fontWeight = "font-[500]",
  display = "flex",
  width = "w-fit",
  padding="px-0",
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center duration-300 ease-in-out rounded-lg font-medium px-6 py-3 leading-[28px]
        ${display} ${width} ${padding}  ${bgColor}
        ${hoverBgColor}  
        ${textSize} ${fontWeight}
        ${textColor} ${hoverTextColor} `}
    >
      {text}
      {children}
    </button>
  );
};

export default CustomButton;
