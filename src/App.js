import { useState } from "react";
import Header from "./page/header";
import Footer from "./page/footer";
import Main from "./page/main";
import Info from "./components/info";
import "./styles/page.css"
import "./styles/main.css"
import "./styles/header.css"
import "./styles/footer.css"

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
