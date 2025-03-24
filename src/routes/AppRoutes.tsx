import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Career from "@/pages/Career";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Process from "@/pages/Process";
import Project from "@/pages/Project";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
