import React,{useState} from 'react'
function Update(){
    const[data,setData]=useState(0)
    function Update1(){
        setData(data+1)
    }
    return(
        <div>
<h1>This is my Update Component..{data}</h1>
<button onClick={Update1}>Update Data</button>
        </div>
    )
}
export default Update;