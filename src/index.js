import React from 'react';
import ReactDOM from 'react-dom/client';
import Components from './Components';

var Array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function App () {
  return (
   <React.Fragment>
    <Components Array = {Array}></Components>
   </React.Fragment>
  )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);
