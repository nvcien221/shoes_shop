import React from "react";
import { Outlet } from "react-router-dom";

export function BaseTemplate() {
  return (
    <div>
      <header>Header</header>
      <br />
      <Outlet />
      <br />
      <footer>footer</footer>
    </div>
  );
}
