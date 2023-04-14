import React,{useState} from 'react'
const StateTutorial=()=>{
const[counter,setCounter]=useState(0);

return(
    <div>
        {counter}
        <br/>
        <button onClick={()=>setCounter(counter+1)}>increment</button>
    </div>
);
}
export default StateTutorial;