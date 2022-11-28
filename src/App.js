import React, {useState,useEffect} from "react";

function App(props){
  const [count, setCount] = useState(0);   //useState hook used to set the counter initially to value '0'
 
  useEffect(()=>{
    alert("Welcome to the Counter-App");    //used with array because alert msg will only be rendered once
  },[]);

  // useEffect(()=>{
  //   alert("Welcome to the Counter-App");  //used without array because alert msg will be rendered each time buttons pressed
  // });
  
  return(
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Static Counter</h1>
            <div className="my-4">
              <h2 className="my-4" style={{color:"blue"}}>{count}</h2>
              <button disabled={count===0} className="btn btn-danger m-1" onClick={()=>setCount(count-1)}>Decrement (-)</button>
              <button className="btn btn-success m-1" onClick={()=>setCount(count+1)}>Increment (+)</button>
              <button disabled={count===0} className="btn btn-secondary m-1" onClick={()=>setCount(0)}>Reset</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App