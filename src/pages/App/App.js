import "./App.scss";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import AboutMe from "../../components/AboutMe";
import Services from "../../components/Services";

function App() {
  return (
    <>
      <header className="navbar__section">
        <Navbar />
      </header>
      <section className="sections">
        <Banner
          name="Julieta Pontino"
          profesion="Frontend Developer"
          liUser="in/julieta-pontino-3a168b211/"
          ghUser="juliponti"
          twUser="ju_ponti"
          igUser="julipontino"
        />
        <AboutMe />
        <Services />
      </section>
    </>
  );
}

export default App;
