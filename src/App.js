import "./App.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header>
        <h2>Ak pizza co</h2>
      </header>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <main className="menu">
        <h2>Menu</h2>

        {pizzaData.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
        ))}
      </main>
    </div>
  );
}

function Pizza(props) {
  let soldOut = props.pizzaObj.soldOut;
  console.log(props);

  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt="" />
      {soldOut ? (
        <p>sorry it is finished</p>
      ) : (
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price + 10}</span>
        </div>
      )}
    </div>
  );
}

function Footer() {
  let hour = new Date().getHours();
  // console.log(hour);
  let openHour = 15;
  let closeHour = 22;
  let open = hour >= openHour && hour <= closeHour;
  console.log(open);
  return (
    <div>
      <footer>
        {open ? (
          <div className="order">
            <p>we are open</p>
            <button className="btn">book now</button>
          </div>
        ) : (
          <p>we are closed</p>
        )}
      </footer>
    </div>
  );
}

export default App;
