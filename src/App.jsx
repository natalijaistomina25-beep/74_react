import Feedback from "./components/Feedback/Feedback";
function App() {
  return (
    <div>
      <Feedback />
    </div>
  );            
  
}

export default App;




//import { useState } from "react";
//import "./App.css";
//import Button from "./components/Button/Button";

//function App() {
 // const [count, setCount] = useState(0);
  // setCount(count+1)
  // setCount((prev)=>prev+1)
  //const onMinus = () => setCount((prev) => prev - 1);
  //return (
    //<div className="app">
    //  React Introduction
    //  {/* Вызов компонента */}
    //  <Button name="plus" onButtonClick={() => setCount((prev) => prev + 1)} />
    //  <Button name="minus" onButtonClick={onMinus}/>
     // <div>{count}</div>
   // </div>
  //);
//}
//export default App;