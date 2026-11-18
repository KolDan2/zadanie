function Header({ ciemnyTryb, przelaczTryb }) {
  return (
    <header className="naglowek">
      <div className="container">
        <h1 className="tytul-portalu">Portal o muzyce</h1>
      </div>

      <button className="btn przycisk-trybu" onClick={przelaczTryb}>
        {ciemnyTryb ? "Jasne tło" : "Ciemne tło"}
      </button>
    </header>
  );
}

export default Header;
