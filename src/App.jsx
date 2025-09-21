import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
//import RegisterPage from "./pages/Register";
//import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import TitleManager from "./components/TitleManager";
import Spinner from "./components/Spinner";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
function App() {
  return (
    <BrowserRouter>
      <TitleManager />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

// <Route element={<PrivateRoute />}> </Route>
//  <Route element={<PublicRoute />}>  </Route>
