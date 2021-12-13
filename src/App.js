import html2canvas from "html2canvas";
import { useState } from "react";
import "./App.css";

function App() {
  const [opcion1, setOpcion1] = useState("");
  const [opcion2, setOpcion2] = useState("");
  const [imagen, setImagen] = useState("");
  return (
    <div className="App">
      <select onChange={(e) => setImagen(e.target.value)}>
        <option value="descarga">Bebx</option>
        <option value="descarga03">Pensa</option>
        <option value="descarga04">Risa</option>
        <option value="descarga02">Quemado</option>
        <option value="descarga05"> Enojada</option>
      </select>
      <br />
      <input
        type="text"
        placeholder="Opcion 1"
        onChange={(e) => setOpcion1(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Opcion 2"
        onChange={(e) => setOpcion2(e.target.value)}
      />
      <br />
      <button
        onClick={(e) =>
          html2canvas(document.querySelector("#meme")).then((canvas) => {
            let img = canvas.toDataURL("image/png");
            let link = document.createElement("a");
            link.download = "meme.png";
            link.href = img;
            link.click();
          })
        }
      >
        Exportar
      </button>

      <div className="meme" id="meme">
        <span>{opcion2}</span>
        <br />
        <br />
        <span>{opcion1}</span>
        <img src={"/images/" + imagen + ".jpeg"} alt="imagen" />
      </div>
    </div>
  );
}

export default App;
