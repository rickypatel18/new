import { ReactNode } from "react";

interface CustomContainerProps {
  children: ReactNode;
  className?: string;
}

const CustomContainer = ({
  children,
  className = "",
}: CustomContainerProps) => {
  return (
    <button
      className={`w-fit border border-[var(--color-border)] py-2 px-2 lg:py-3 lg:px-4 rounded-lg bg-[var(--color-background)] ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomContainer;
