import "./App.scss";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";

function App() {
  return (
    <>
      <header className="navbar__section">
        <Navbar />
      </header>
      <section className="sections">
        <Banner />
      </section>
    </>
  );
}

export default App;
