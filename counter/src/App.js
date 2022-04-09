import "./styles.css";
import {useState} from "react"



export default function App() {
  const [counter,setCounter]=useState(5);
  return (
    <div className="App">
     <h1>{counter}</h1>
    <button onClick={()=>{
setCounter(counter+1);
}}>add 1</button>
<button onClick={()=>{

if(counter<=0)
{return}
 setCounter(counter-1);
}}>sub 1</button>
<button onClick={()=>{
  
  setCounter(counter*2);
}}>Double</button>
    </div>
  );
}
