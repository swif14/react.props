import React, {useState}from 'react';
import ReactDOM from 'react-dom/client';




function App () {
  
  const [number1, increaseOne] = useState("")
  const [number2, increaseTwo] = useState("")
  return (
   <React.Fragment>

    <button  style={{backgroundColor: "red", color: "white", border: "none"} } onClick={() => increaseOne(document.write(number1 + 1))}>redClick</button>
    
    <button  style={{backgroundColor: "green", color: "white", border: "none", marginLeft: "15px"} } onClick={() => increaseTwo(document.write(number2 + 2))}>greenClick</button>

   </React.Fragment>
  )
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);
