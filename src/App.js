import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/contact";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/blog/Blog"
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Navigation/>
    <Home/>
    <About/>
    <Contact/>
    <Blog/>
    <Footer/>
    </>
  );
}
export default App;