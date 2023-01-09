import React, {useState,useEffect} from "react";

function App(){
  const [count, setCount] = useState(0);   //useState hook used to set the counter initially to value '0'
  
  // let date =new Date();     //getting the standard date and time with time zone
  // let hour = date.getHours();  //fetching  only hours (0-23:59 ~ 24)
  // console.log(hour)              // line 6,7,8 are depedencies to hook so declared inside useffect
  
  let time = (hrs)=>{               //function invoked inside use effect hook
    if (hrs===0 || hrs <12){
       alert("Good Morning! Welcome to the Counter-App")
    }
    else if (hrs>=12 && hrs<16){
       alert("Good Afternoon! Welcome to the Counter-App")
    }
    else if (hrs >=16 || hrs<24){         //can not use else because not supported in react js
       alert("Good Evening! Welcome to the Counter-App")       //used with array because alert msg will only be rendered once
    }
  }
  useEffect(()=>{
    let date =new Date();     //getting the standard date and time with time zone
    let hour = date.getHours();  //fetching  only hours (0-23:59 ~ 24)
    console.log(hour)
    time(hour)
  },[]);

  // useEffect(()=>{
  //   alert("Welcome to the Counter-App");  //if used without array so alert msg will be rendered each time buttons pressed
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