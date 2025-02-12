import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./components/dashboard";
import Payment from "./components/Payment";
import Filter from "./components/Filter";
import { Helmet } from "react-helmet-async";
function App() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [payProduct, setPayProduct] = useState(null);
console.log(likedProducts);

  useEffect(() => {
    // Save the likedProducts state to local storage
    const likedProductsString = JSON.stringify(likedProducts);
    localStorage.setItem("likedProducts", likedProductsString);
  }, [likedProducts]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Morent</title>
        <meta charset="UTF-8"></meta>
        <meta
          name="description"
          content="Morent a car rental website by Seyed Ali Najafi"
        />
        <meta
          name="keywords"
          content="Morent, car rental , rent , car , Seyed Ali Najafi, Ali Najafi"
        />
        <meta name="author" content="Seyed Ali Najafi | سید علی نجفی" />

        <link rel="canonical" href="https://morent.ir" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              likedProducts={likedProducts}
              setLikedProducts={setLikedProducts}
              setPayProduct={setPayProduct}
            />
          }
        ></Route>
        <Route
          path="/dashboard"
          element={<Dashboard setLikedProducts={setLikedProducts} />}
        ></Route>
        <Route
          path="/payment"
          element={
            <Payment
              setLikedProducts={setLikedProducts}
              payProduct={payProduct}
              likedProducts={likedProducts}
            />
          }
        ></Route>
        <Route
          path="/category"
          element={
            <Filter
              setLikedProducts={setLikedProducts}
              setPayProduct={setPayProduct}
              likedProducts={likedProducts}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
