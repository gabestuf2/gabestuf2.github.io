"use strict";

const e = React.createElement;

function Header() {
  return (
    <div className="header">
      <section className="logo-container">
        <button className="home">Gabe Camacho</button>
      </section>
      <div className="div-line"></div>
      <nav className="navigation">
        <button>About</button>
        <button>ZEROS</button>
        <button>Facts</button>
        <button>Catan</button>
        <button>L'moo</button>
      </nav>
    </div>
  );
}

const domContainer = document.querySelector(".header");
ReactDOM.render(e(Header), domContainer);
