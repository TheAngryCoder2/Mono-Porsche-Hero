import { useEffect, useState } from "react";
import Background from './Components/Background/Background';
import Navber from "./Components/Navbar/Navber";
import Hero from "./Components/Hero/Hero"

const App = () => {
  let heroData = [
    {text1:"Change is easy.", text2:"Improvement is far more difficult."},
    {text1:"I couldn't find the sports car of my dreams.", text2:"So i build it myself"},
    {text1:"Good design.", text2:"Should be honest."},
    {text1:"If one does not fail at times.", text2:"Then one has not challenged himself."},
    {text1:"Porsche...", text2:"There is no, substitute."},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=> {
    setInterval(() => {
      setHeroCount((count)=>{return count===4?0:count+1})
    }, 2000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      < Navber/>
      <Hero
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      setPlayStatus={setPlayStatus}

      />
    </div>
  )
}

export default App