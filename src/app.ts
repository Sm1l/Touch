import "./style.scss";

import Footer from "./components/footer.ts";
import Header from "./components/header.ts";
import Main from "./components/main.ts";

function App(): void {
  const app: HTMLElement | null = document.getElementById("app");

  app?.appendChild(Header());
  app?.appendChild(Main());
  app?.appendChild(Footer());
}

App();
