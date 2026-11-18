import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Header.jsx";
import Card from "./Card.jsx";
import ButtonMsg from "./ButtonMsg.jsx";

const listaUtworow = [
 ["Telephone", "Lady Gaga", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLuPz7b3VB0xTML6xBSFjn07buUz3UIxozH5NrC2lfA&s=10"],
 ["Danceteria", "Madonna", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7ymkTJrBIa9uOmud_XoikmpH0MmKac8_z_S5iOKmwg&s=10"],
["Molly", "Emei", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QamrfsQ9pK88UsA79RINoqg3bLUJO-5odxG-1dUbnQ&s"],
["Animal", "KATSEYE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95xAopkmCDTc4VhKxv0NioFDiV8T8Wk7eJJNeEwlj9Q&s=10"],
["What's the Point!", "Emei", "https://images.genius.com/41dbdcc0055edead18e5d50b7dc47b11.1000x1000x1.png"],
["Stay Over", "Onlyfriends", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkt5h8fxEbo1RIwuHrOFJYRQZYPSCAnG0lK1BVGFUZpg&s=10"],
["ALL NIGHT", "Snow Wife", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvNa7tQIVejWsGbcHIpOl3HhrBu0Z7Ac8hyyN0RSEgw&s=10"],
["Primadonna", "MARINA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t0f7q6qBR04gjgwcKhgg02XJF0ePWoDxIbIJyZDLlw&s=10"],
["jealousy, jealousy", "Olivia Rodrigo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVt36gJteuTGXxdoqHjm14f9dI8-kS0GKttM16Jy_Ew&s"],
["Fame is a Gun", "Addison Rae", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zk4hgDz8sQTaeBpdKEwaKp2YRQHxLKORszT6rtJ4SQ&s=10"],
["my strange addiction", "Billie Eilish", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnjCMtKxMRbplqdNKpg-T-UJB-w_7o-RqOuTb08asHA&s=10"],
["Boyfriend", "Dove Cameron", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0Ey0oWPlB9VgckqMSpv1hnsx2NgLZGAhGxAM_9Hjxw&s=10"],
["Red Flag", "Cloudy June", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAEYOS5iIJeNWSm2qtDiA6QXlJvvLSbfB5M8TeikeNw&s=10"],
["what's it like?", "Nxdia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaxX08jFk3WRa5nYB8KozSCK4MOBsbsvlgDeiAJHplw&s=10"],
["Red Wine Supernova", "Chappell Roan", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFVmiG4W1nqxLD-_U_mq4oOYRszTncjmUTTsimv1c41w&s=10"],
["Ancient Dreams in a Modern Land", "MARINA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcjj6YkWqtfPTikCJvNDgLnKc-dUWzcW8DQ4orQZD-w&s=10"],
["Good Luck, Babe!", "Chappell Roan", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kcmTdj3ZuYH6GD5VYyEKTnWHqxszzvm27VtHvKrraA&s=10"],
["WHERE IS MY HUSBAND!", "RAYE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MdX1W9NW5HxO-1kT2F1FtTbpOOHi6dyYvbjg_AFtjw&s=10"]
];

const listaCytatow = [
  "Muzyka mówi to, czego nie da się powiedzieć słowami.",
  "Dobra playlista potrafi zmienić cały dzień.",
  "Ciekawostka: Muzyka klasyczna może poprawić koncentrację i pamięć.",
  "Muzyka łączy ludzi z całego świata.",
];

function losujCytat() {
  const numer = Math.floor(Math.random() * listaCytatow.length);
  return listaCytatow[numer];
}

function App() {
  const [cytat] = useState(() => losujCytat());
  const [ciemnyTryb, setCiemnyTryb] = useState(false);
  const [szukanaFraza, setSzukanaFraza] = useState("");

  const przefiltrowaneUtwory = listaUtworow.filter((utwor) =>
    utwor[0].toLowerCase().includes(szukanaFraza.toLowerCase())
  );

const kolorTla = ciemnyTryb ? "#1a3123" : "#d9f2e1";

  function przelaczTryb() {
    setCiemnyTryb(!ciemnyTryb);
  }

  return (
        <div
      className={ciemnyTryb ? "strona ciemna" : "strona"}
      style={{ backgroundColor: kolorTla }}
    >
      <img className="plyta-tlo" src="plyta.png" alt="" />
      <img className="nuta-tlo" src="nuta.png" alt="" />

      <Header
        ciemnyTryb={ciemnyTryb}
        przelaczTryb={przelaczTryb}
      />

      <main className="container py-4">
        <ButtonMsg />

        <p className="cytat">{cytat}</p>

        <input
          type="text"
          className="form-control pole-szukaj"
          placeholder="Szukaj utworu po tytule..."
          value={szukanaFraza}
          onChange={(podanyTytul) => setSzukanaFraza(podanyTytul.target.value)}
        />

        <div className="row g-3 mt-2">
          {przefiltrowaneUtwory.map((utwor) => (
            <div className="col-12 col-md-6 col-lg-4" key={utwor[0]}>
              <Card tytul={utwor[0]} artysta={utwor[1]} zdjecie={utwor[2]} />
            </div>
          ))}
        </div>

        {przefiltrowaneUtwory.length === 0 && (
          <p className="brak-wynikow">
            {listaUtworow.length === 0
              ? "Lista jest pusta."
              : "Nic nie znaleziono. Spróbuj wpisać inny tytuł."}
          </p>
        )}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
