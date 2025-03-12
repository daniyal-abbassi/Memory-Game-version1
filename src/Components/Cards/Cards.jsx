import images from "../../images";
import "./cards.css";
import { useEffect, useState } from "react";
export default function Cards({ setScore, setBestScore,bestScore,score,numberOfImages, setNumberOfImages }) {
  const [tenImages, setTenImages] = useState(images.slice(0, numberOfImages));
  const [clickedIds, setClickedIds] = useState([]);

  const randomize = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffleImages = (id) => {
    const recentImages = [...tenImages];
    const shuffled = randomize(recentImages);
    setTenImages(shuffled);
    
    if(clickedIds.includes(id)) {
      setScore(0)
      if(score>bestScore) {
        setBestScore(score)
      }     
      setClickedIds([])
    } else {
      setScore((i) => i + 1);
      if(bestScore===score) {
        setBestScore(i=>i+1)
      }
    setClickedIds((i) => [...i, id]);
    }
   
  };
  const handleNumberOfImage = (e) => {
    e.preventDefault();
    setNumberOfImages(Number(e.target.value));
  }
  useEffect(()=>{
    setTenImages(images.slice(0, numberOfImages))
  },[numberOfImages])
  return (
    <>
    <div className="input">
    <label htmlFor="render-number">Number Of Images: </label>
    <input id='render-number' type='number' placeholder='Cards No.'  onChange={handleNumberOfImage}/>
    </div>
    
      <div className="image-container">
        {tenImages.map((character) => (
          
          <figure className="image-wrapper" key={character.id}>
            <img
              onClick={() => shuffleImages(character.id)}
              
              className="image"
              src={character.url}
              alt={character.name}
            />
            <figcaption className="caption">{character.name}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
