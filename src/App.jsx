import {useState} from "react";
import data from "./data.js";

const App = () => {
  const [people, setPeople] = useState(data)
  const number = people.length;
  console.log(people);
  return <div className="container">
    <h2>{number} Birthdays Today</h2>
    {people.map((person) => {
      const {id, name, age, image} = person;
      return (
          <div className="person" key={id}>
            <img src={image} alt={name} style={{ width: '200px' }} />
            <div className="info">
              <h1>{name}</h1>
              <h5>{age} Years</h5>
            </div>
          </div>
      )
    })}
    <button className="btn" onClick={()=> setPeople([])}>Clear All</button>
  </div>;
};
export default App;
