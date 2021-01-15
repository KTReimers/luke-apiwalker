import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import {Router, Link} from '@reach/router';
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  const [id, setId] = useState("1");
  const [choice, setChoice]= useState("people");
  const onSubmitHandler = e =>{
    e.preventDefault();
  }
  const searchStyle={
    padding: "10px",
    display: "inline-flex"
  }
  let link = `/${choice}/${id}`;
  return (
    <>
      <div className="App ">
        <h1>Starwars</h1>
        <div style={searchStyle} className="nes-select is-dark">
            <form onSubmit={onSubmitHandler}>
              <select className="dark_select"  onChange={e=> setChoice(e.target.value)}>
                  <option value="people">People</option>
                  <option value="planets">Planets</option>
              </select>
              <label>ID: </label>
              <input type="number" id="dark_field" className= "nes-input is-dark" onChange={e=> setId(e.target.value)}/>
              <Link to={link}><button className="nes-btn primary">Search</button></Link>
            </form>
          </div>
        <Router>
          <People path="/people/:id"/>
          <Planets path="/planets/:id"/>
        </Router>
      </div>
    </>
  );
}

export default App;
