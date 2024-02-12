import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
