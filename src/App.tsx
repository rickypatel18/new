import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollContext from "./context/ScrollContext";

const App = () => {
  return (
    <Router>
      <ScrollContext>
      <AppRoutes />
      </ScrollContext>
    </Router>
  );
};

export default App;
