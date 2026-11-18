import { useState } from "react";

function ButtonMsg() {

  const [imie, setImie] = useState(localStorage.getItem("imie") || "");

  function przedstawSie() {
    const wpisaneImie = prompt("Jak masz na imię?");
    if (wpisaneImie) {
      localStorage.setItem("imie", wpisaneImie);
      setImie(wpisaneImie);
    }
  }

  return (
    <div className="powitanie">
      {imie && <p className="powitanie-tekst">Witaj, {imie}!</p>}
      <button className="btn przycisk-zielony" onClick={przedstawSie}>
        Przedstaw się
      </button>
    </div>
  );
}

export default ButtonMsg;
