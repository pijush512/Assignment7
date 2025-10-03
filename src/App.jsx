import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar/Navbar";
import Cards from "./Component/Cards/Cards";


const fetchCard = async() => {
  const res = await fetch("/Card.json")
  return await res.json()
}

const cardPromise = fetchCard();

function App() {
  const [inprogress, setInProgress] = useState(0);

  const handleCardClick = () => {
    setInProgress((porgress) => porgress + 1 );
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner inprogress={inprogress}></Banner>

      <Suspense fallback={<p>Loading...</p>}>
        <Cards cardPromise={cardPromise} onCardClick={handleCardClick}></Cards>
      </Suspense>


              
    </>
  );
}

export default App;
