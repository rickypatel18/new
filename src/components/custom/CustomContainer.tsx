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
    <div
      className={`w-fit border border-[var(--color-border)] py-3 px-4 rounded-lg bg-[var(--color-background)] ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
