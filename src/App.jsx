import React, { useState } from "react";
import Navbar from "./Components/Nav/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ThankYou from "./Components/ThankYou/ThankYou";

const App = () => {
  const [subscribe, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      {subscribe ? <ThankYou /> : <Footer onSubscribe={handleSubscribe} />}
    </div>
  );
};

export default App;
