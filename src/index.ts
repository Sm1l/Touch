import "./main.scss";

import Header from "./components/Header.ts";
import WeAreTouch from "./components/WeAreTouch.ts";
import MakeAProduct from "./components/MakeAProduct.ts";
import WhatWeDo from "./components/WhatWeDo.ts";
import OurDesign from "./components/OurDesign.ts";
import Footer from "./components/Footer.ts";

function App(): void {
  const app: HTMLElement | null = document.getElementById("app");

  app?.appendChild(Header());
  app?.appendChild(WeAreTouch());
  app?.appendChild(MakeAProduct());
  app?.appendChild(WhatWeDo());
  app?.appendChild(OurDesign());
  app?.appendChild(Footer());
}

App();
