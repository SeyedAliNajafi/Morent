import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Recommended from "./components/Recommended";
import Popular from "./components/Popular";
import AOS from "aos";
import "aos/dist/aos.css";
function Home({ likedProducts, setLikedProducts, setPayProduct }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1050, once: true });
  });
  return (
    <div>
      <NavBar
        likedProducts={likedProducts}
        setLikedProducts={setLikedProducts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPayProduct={setPayProduct}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {searchTerm === "" && <Hero />}
      {searchTerm === "" && <Popular setPayProduct={setPayProduct} />}
      <Recommended
        searchTerm={searchTerm}
        likedProducts={likedProducts}
        setLikedProducts={setLikedProducts}
        setPayProduct={setPayProduct}
      />
      <Footer />
    </div>
  );
}

export default Home;
