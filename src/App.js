import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import Info from "./components/Info.js"
import Card from "./components/Card.js"
import thub from './images/thumbnail.png'
import wedding from './images/wedding-photography.png'
import bike from './images/mountain-bike.png'
import status from './images/status.png'


// if i had the data in a file on array with objects
//here i would have a cards array that contains Card jsx elements created from the data from the data file
// const cards = data.map(item => { 
//   return (
//     <Card 
//       img={item.img}
//       rating={item.stats.stars}
//       text={item.tittle}
//       price={item.price}
//     />
//   )
// })
// 
// to render the array we can simply do {cards} in the jsx, react is smart enough to translate each element itself ! 


function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <div className='cards'>
        <Card 
          img={thub}
          status={status}
          rating='5.0'
          text='Life Lessons with Katie'
          price='136'
          openSpots={2}
          />
        <Card 
          img={wedding}
          status={status}
          rating='4.6'
          text='Learn wedding photography'
          price='125'
          openSpots={0}
          />
        <Card 
          img={bike}
          status={status}
          rating='4.8'
          text='Group Mountain Biking'
          price='50'
          openSpots={15}
          />
      </div>

    </div>
  );
}

export default App;
