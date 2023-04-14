import {useState} from 'react'
function Input1(){
    const [data,setData]=useState(null);
    const[print,setPrint]=useState(false);
    function getData(val){
console.warn(val.target.value)
setData(val.target.value)
setPrint(false)
    }
    return(
        <div>
            <hr/>
            {
                print?<h1>{data}</h1>:null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)}>Print Data</button>
            <hr/>
        </div>
    )
} 
export default Input1;