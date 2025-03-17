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
  children,
}: CustomButtonProps) => {
  return (
    <button
      className={` flex justify-center items-center gap-[15px] rounded-[8px] transition-all px-[9px] py-[10px] md:px-[14px] md:py-[12px] lg:px-[19px] lg:py-[14px] xl:px-[24px] xl:py-[16px] duration-300 ease-in-out 
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
