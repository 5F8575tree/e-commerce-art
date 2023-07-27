import * as React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

document.addEventListener("turbo:load", () => {
  console.log("Hello from React!");

  if (document.getElementById("react-element")) {
    const container = document.getElementById("react-element");
    const root = createRoot(container);
    root.render(<Navbar />);
  }
});
