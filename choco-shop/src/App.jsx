import { useState } from "react";
import shopLogo from "./assets/logo-heart.png";
import bunnyCake from "./assets/bunny-cake.gif";
import cuterly from "./assets/cuterly.png";
import lightHeart from "./assets/light-pink-heart.png";
import bonbonTwist from "./assets/bonbon.png";
import bonbonDot from "./assets/bonbon-duo.png";
import bonbonCherry from "./assets/cherry-bun.png";
import hotPink from "./assets/hot-pink-heart.png";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="choco-store">
        <Navbar />
        <div className="cont-geo">
          <div className="pink-class">
            <div className="pink-geo">
              <div className="cuterly">
                <img src={cuterly} alt="figuras de garfo e faca" />
              </div>

              <div className="logo-dif">
                <img src={bunnyCake} alt="coelho segurando fatia de bolo" />
              </div>

              <div className="heart-deco-x">
                <img src={lightHeart} alt="coelho segurando fatia de bolo" />
              </div>
            </div>
          </div>

          <div className="white-geo">
            <div className="logo-main">
              <img src={shopLogo} alt="logo principal da loja" />
            </div>

            <div className="bonbon">
              <div className="bonbon-cherry">
                <h4>Chocolate</h4>
                <img src={bonbonCherry} alt="logo principal da loja" />
              </div>

              <div className="bonbon-twist">
                <img src={bonbonTwist} alt="logo principal da loja" />
                <h4>Cookies</h4>
              </div>

              <div className="bonbon-dot">
                {" "}
                <img src={bonbonDot} alt="logo principal da loja" />
              </div>

              <div className="heart-deco">
                <img src={hotPink} alt="logo principal da loja" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
