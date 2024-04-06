import React from "react";
import { Header } from "./Components/Common/Header/Header";
import { Footer } from "./Components/Common/Footer/Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
