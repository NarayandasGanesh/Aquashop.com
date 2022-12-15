import "./App.css";

import Footer from "./components/Footer";
import AllRoutes from "./pages/AllRoutes";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
