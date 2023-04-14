import './App.css';
import React from 'react'
import Update from './Update'
import Prop1 from './Prop1'
import HideShow from './HideShow'
import Input1 from './Input1';
import Array1 from './Array1'
function App() {
  function btn(){
    alert('Successfully Clicked!')
  }
  return (
    <div className="App">
      <HideShow />
      <Array1></Array1>
      <Input1/>
      
     <h1>This is practice..</h1>
     <p>This is my basic paragraph in this react app</p>
     <button onClick={()=>btn()}>Click Me</button>
     <Update />
     
     <Prop1 name={"John"} email={"johan@.com"} />
     <hr/>
     <Prop1 name={"Aman"} email={"aman@.com"} />
     
    </div>
  );
}
export default App;
