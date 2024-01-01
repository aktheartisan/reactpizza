
import './App.css';
import pizzaData from './data';

function App() {
  return (

    <div className='container'> 
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  
  );
}

function Header(){

  return(

    <div>
      <header><h2>Ak pizza co</h2></header>
    </div>
  )
}

function Menu(){

  return (

    <div>
      <main className='menu'> 
         <h2>Menu</h2>

         {pizzaData.map((pizza)=>(
          
          <Pizza name={pizza.name} photo={pizza.photoName} ingredient={pizza.ingredients} price={pizza.price}/>

         ))}
       
 
       </main>
    
    </div>
  )
}

function Pizza(props){

  console.log(props);

  return(

    <div className='pizza'>
      <img src={props.photo} alt=''/>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price + 10}</span>
      </div>
      
    </div>
  )
}

function Footer(){

  return(

    <div>
      <footer><h2>{new Date().toLocaleTimeString()} we are opened.</h2></footer>
    </div>
  )
}





export default App;
