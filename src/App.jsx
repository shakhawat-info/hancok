import { useState } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import Banner from './Component/Banner'
import About from "./Component/About";
import Popular from "./Component/Popular";
import Stream from "./Component/Stream";
import Games from "./Component/Games";
import Accesori from "./Component/Accesori";
import Team from "./Component/Team";
import Question from "./Component/Question";
import Nwesletter from "./Component/Nwesletter";
import Footer from "./Component/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Banner />
      <About />
      <Popular />
      <Stream />
      <Games />
      <Accesori />
      <Team />
      <Question />
      <Nwesletter />
      <Footer />
    </>
  );
}

export default App;
