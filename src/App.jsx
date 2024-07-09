import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import HowToRefer from "./components/HowToRefer.jsx";
import ReferralBenefits from "./components/ReferralBenefits.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <HowToRefer />
        <ReferralBenefits />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default App;
