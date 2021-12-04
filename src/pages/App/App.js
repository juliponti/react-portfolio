import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";
import Experience from "../../components/Experience";
import MyWork from "../../components/MyWork";
import Contact from "../../components/Contact";
import "./App.scss";

function App() {
  return (
    <>
      <header className="navbar__section">
        <Navbar />
      </header>
      <section className="sections">
        <Banner />
        <AboutMe />
        <Services />
        <Experience />
        <MyWork />
      </section>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
