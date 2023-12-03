import React, { useState } from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Cart from "../component/Cart";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ItemParent from "../component/ItemParent";
import Dashboard from "../component/Dashboard";

function App() {
  let [CartCount, SetCartCount] = useState(0);
  let [addToCart, setAddToCart] = useState(true);

  let X = [
    {
      Name: "Fancy Product",
      Rating: false,
      Price: "$40.00 - $80.00",
      sale: false,
      strike: false,
      strikeValue: "",
    },
    {
      Name: "Special Item",
      Rating: true,
      Price: "$18.00",
      sale: true,
      strike: true,
      strikeValue: "$20.00",
    },
    {
      Name: "Sale Item",
      Rating: false,
      Price: "$25.00",
      sale: true,
      strike: true,
      strikeValue: "$50.00",
    },
    {
      Name: "Popular Product",
      Rating: true,
      Price: "$40.00",
      sale: false,
      strike: false,
      strikeValue: "",
    },
    {
      Name: "Sale Item",
      Rating: false,
      Price: "$25.00",
      sale: true,
      strike: true,
      strikeValue: "$50.00",
    },
    {
      Name: "Fancy Product",
      Rating: false,
      Price: "$120.00 - $280.00",
      sale: false,
      strike: false,
      strikeValue: "",
    },
    {
      Name: "Special Item",
      Rating: true,
      Price: "$18.00",
      sale: true,
      strike: true,
      strikeValue: "$20.00",
    },
    {
      Name: "Popular Product",
      Rating: true,
      Price: "$40.00",
      sale: false,
      strike: false,
      strikeValue: "",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar CartCount={CartCount} SetCartCount={SetCartCount} />
        <Header />
        <Routes>
          <Route path="*" element={<Dashboard />}/>
          <Route
            path="ShopNow"
            element={
              <ItemParent
              X={X}
                addToCart={addToCart}
                setAddToCart={setAddToCart}
                CartCount={CartCount}
                SetCartCount={SetCartCount}
              />
            }
          />
          <Route path="Cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;