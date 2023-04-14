
import {useState} from 'react'
function HideShow(){
    const [data,setUpdate]=useState(true);
    return(
        <div>
            
            {
                data?<h1>Hello Show</h1>:null
            }
            {/* <button onClick={()=>setUpdate(true)}>Show Me</button>
            <button onClick={()=>setUpdate(false)}>Hide Me</button> */}

            <button onClick={()=>setUpdate(!data)}><h1>Toggle btn</h1></button>
        </div>
    )
}
export default HideShow;