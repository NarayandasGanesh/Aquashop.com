import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./AdminPage";
 
import Homepage from "./Homepage";



const AllRoutes = () => {
  return (
    <Routes>
   
      <Route path="/adminPage" element={<AdminPage />} />
     
      
    </Routes>
  );
};

export default AllRoutes;