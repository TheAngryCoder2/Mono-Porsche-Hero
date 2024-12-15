import { useState } from "react";
import Background from './Components/Background/Background';

const App = () => {
  let heroData = [
    {text1:"Change is easy.", text2:"Improvement is far more difficult."},
    {text1:"I couldn't find the sports car of my dreams.", text2:"So i build it myself"},
    {text1:"Good design.", text2:"Should be honest."},
    {text1:"If one does not fail at times.", text2:"Then one has not challenged himself."},
    {text1:"Porsche...", text2:"There is no, substitute."},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App