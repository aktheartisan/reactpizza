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
   const pizza = pizzaData;
  //  const pizza = [];
  const pizzaLength = pizza.length;
  //use fragmet to place two element in a one jsx
  return (
    <div>
      <main className="menu">
        <h2>Menu</h2>

        {pizzaLength>0 ? 
        <>
            
        <p>hai hello welcome to ak pizza hut.we have six varity of pizza</p>
        <ul className="pizzas"> 

        {
           pizza.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
           )) 
        }
        </ul>
        
        </>
      
        : <p>sorry</p>}
      </main>
    </div>
  );
}


function Pizza(props) {

  let soldOut = props.pizzaObj.soldOut;
  console.log(props);

  //using ternary to show if pizza variety is sold

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
  let closeHour = 24;
  let open = hour >= openHour && hour <= closeHour;
  console.log(open);
  return (
    <div>
      <footer>
        {open ? (
          //send js as props to the openhour component
          <Openhour open={openHour} close={closeHour}/>
        ) : (
          <p>we are closed</p>
        )}
      </footer>
    </div>
  );
}

//change jsx into components-openhour

function Openhour(props){

  //receive js as props to the openhour component

  return (
    <div className="order">
            <p>we are open from {props.open}pm to {props.close}pm</p>
            <button className="btn">book now</button>
    </div>
  )
}

export default App;
