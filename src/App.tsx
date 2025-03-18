import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  // import MainLayout from "@/layouts/MainLayout";
  import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
// import About from "@/pages/About";
// import Services from "@/pages/Services";
// import Contact from "@/pages/Contact";
// import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;









// <Provider store={store}>
// <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
// <AuthProvider>
// <BrowserRouter>{/* <Routing /> */}
// </BrowserRouter>;
// </AuthProvider>
// </Provider>
