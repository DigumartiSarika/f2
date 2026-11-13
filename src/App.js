import {useState} from "react"

const App = () => {
  const [name,setName]=useState("Swaroop")
  const [og,setOg]=useState("aids")

  const click=()=>{
    alert("h1 ra")
  }
  const sai=()=>{
    console.log("Hi sai")
  }
  const oc=(event)=>{
    console.log(event.target.value)
    setName(event.target.value)

  }
  const change=()=>{
    setOg(name)
  }
  return (
    <>
      <h1>AIDSC</h1>
      <button onClick={click}>Alert</button>
      <br/>
      <button onClick={sai}>Sai</button>
      <br/>
      <h1>Name: {name}</h1>

      <input placeholder="enter you name" onChange={oc} value={name}/>
      <br/>
      <h1>{og}</h1>
      <button onClick={change}>Change</button>
      
    </>
  );
};
export default App;
