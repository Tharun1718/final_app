import './App.css';
import { useState, useEffect} from "react";

// const API="http://localhost:4000"

const API = "https://tharun-node.herokuapp.com"

function App() {
  const [mobiles, setMobiles] = useState([])

  useEffect(() =>{
    fetch(`${API}/mobiles`)
    .then((res)=> res.json())
    .then((mbs)=> setMobiles(mbs))
  },[])

  return (
    <div className="App">
      <div className="phone-list-container">
      {mobiles.map((mob)=>(
        <Phone key={mob._id} mobile={mob} />
      ))}
      </div>
    </div>
  );
}


function Phone({mobile}){
  
  return(
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  )
}

export default App;
