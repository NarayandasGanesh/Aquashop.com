import React from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "./Cart";

import AdminPage from "./AdminPage";

import Clothes from "./Clothes";
import Cosmetics from "./Cosmetics";
import Electronics from "./Electronics";
import Homepage from "./Homepage";
import Jewelery from "./Jewelery";
import ShopBuddy from "./ShopBuddy";
import ShopLocal from "./ShopLocal";
import Singleproduct from "./Singleproduct";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Address from "./AddressPage";
import PaymentPage from "./Payment";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/adminPage" element={<AdminPage />} />

      <Route path="/" element={<Homepage />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/jewelery" element={<Jewelery />} />
      <Route path="/cosmetic" element={<Cosmetics />} />
      <Route path="/shopbuddy" element={<ShopBuddy />} />
      <Route path="/shoplocal" element={<ShopLocal />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/clothes/singleproduct" element={<Singleproduct />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment"  element={<PaymentPage />}/>
    </Routes>
  );
};
export default AllRoutes;
// <Route path="/singleproduct/:id"  element={<SingleProduct />} />
//check
