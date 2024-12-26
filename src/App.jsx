// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";

// import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/register" exact element={<Register/>} />{" "}
      {/* <Route path="/
      " Component={Home} />
        // <Route path="/" Component={Login} /> */}
      <Route path="/login" exact element={<Login />} />{" "}
    </Routes>
  );
};

export default App;
