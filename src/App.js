import { useEffect, useState } from "react";
import Player from "./components/Player";
import "./index.css"


function App() {
  const [songs] = useState([
    {
      title : "say it right",
      artist : "Nelly",
      img_src : "images/nelly.jpg",
      src : "songs/nelly.mp3", 
    },
    {
      title : "Umbrela",
      artist : "Rihanna",
      img_src : "images/rihanna.jpg",
      src : "songs/rihanna.mp3", 
    },
  ])
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(0)

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0
      }else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])
  return (
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />
    </div>
  );
}

export default App;
