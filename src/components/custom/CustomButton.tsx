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
  display?:string,
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
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center duration-300 ease-in-out rounded-lg font-medium px-6 py-2.5 leading-[28px]
        ${display}
        ${bgColor} ${hoverBgColor}  
        ${textSize} ${fontWeight}
        ${textColor} ${hoverTextColor} `}
    >
      {text}
      {children}
    </button>
  );
};

export default CustomButton;
