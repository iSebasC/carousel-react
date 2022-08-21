import "./App.css";
import comic1 from "./assets/comic1.jpg";
import comic2 from "./assets/comic2.jpg";
import comic3 from "./assets/comic3.jpg";
import { useState, useEffect } from "react";

function App() {

  const [index, setIndex] = useState(0);

  const cards = [
    { id: "1", imagen: comic1 },
    { id: "2", imagen: comic2 },
    { id: "3", imagen: comic3 },
  ]

  const mod = (n, m) => {
    let result = n % m;
    //Devolver un valor positivo
    return result >= 0 ? result : result + m;
       
  }

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    } , 3000);
  }, [index]);

  return (
    <div className="App">
      <div className="carousel">

        {cards.map((item, i) => {
          const indexleft = mod(index - 1, cards.length);
          const indexright = mod(index + 1, cards.length);

          let className = "";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexright) {
            className = "card card--right";
          } else if (i === indexleft) {
            className = "card card--left";
          }   

          return <img key={item.id} src={item.imagen} alt="Comic" className={className} />

        })}
            
      </div>
    </div>
  );
}

export default App;
