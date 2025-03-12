
import { useEffect, useState } from 'react';
import './App.css'
import Cards from './Components/Cards/Cards'
import Scores from './Components/Scors/Scores'
import Header from './Components/Header';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore,setBestScore] = useState(0)

  const [numberOfImages, setNumberOfImages] = useState(10);

  
  return (
    <>
      <div className="header">
        <Header />
        <Scores score={score} bestScore={bestScore} />
      </div>
      
      <Cards numberOfImages={numberOfImages} setNumberOfImages={setNumberOfImages} setScore={setScore} setBestScore={setBestScore} bestScore={bestScore} score={score}/>
    </>
  )
}

export default App
