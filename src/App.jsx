import { Suspense } from "react";
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
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<p>Loading...</p>}>
        <Cards cardPromise={cardPromise}></Cards>
      </Suspense>


              
    </>
  );
}

export default App;
