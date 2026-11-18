function Card({ tytul, artysta, zdjecie }) {
  return (
    <div className="karta">
      {zdjecie ? (
        <img className="karta-zdjecie" src={zdjecie} alt={tytul} />
      ) : (
        <div className="karta-zdjecie karta-brak-zdjecia">♪</div>
      )}
      <h2 className="karta-tytul">{tytul}</h2>
      <p className="karta-artysta">{artysta}</p>
    </div>
  );
}

export default Card;
