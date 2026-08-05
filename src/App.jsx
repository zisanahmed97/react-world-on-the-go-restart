
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'


const fetchCountries = async() =>{
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}

function App() {

const countriesPromise = fetchCountries();
  return (
    <>
     <h1>React world on the go</h1>
   <Suspense fallback={<h2>nadir vai loading....</h2>}>
    <Countries countriesPromise={countriesPromise}></Countries>
   </Suspense>

    </>
  )
}

export default App
