import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="main-area">
      <section className="side-menu">
        <div className="menu-topbar">
          <h2 className="side-menu-title">Menu</h2>
          <GiHamburgerMenu className="side-menu-icon" />
        </div>
      </section>
      <section className="main-element"> main element view</section>
    </div>
  );
}

export default App;
