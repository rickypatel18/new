import { ReactNode } from "react";
import Header from "../views/header/Header";
import Footer from "@/views/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-foreground)] px-4 lg:px-0">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
