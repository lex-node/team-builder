import React, {useState} from 'react';
import './App.css';

function App() {

    let initialTeamMembers = [
        {name: "Professor X", power: "telepathy"},
        {name: "Cyclops", power: "laser eyes"},
        {name: "Iceman", power: "ice"},
        {name: "Angel", power: "flying"}
    ];


    const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

    console.log(teamMembers);

  return (
    <div className="App">
       <div className="team-list">
        {
            teamMembers.map(teamMember => (
               <div>
                <h2>{teamMember.name}</h2>
                <p>Power: {teamMember.power}</p>
               </div>
            ))
        }
        </div>
    </div>
  );
}

export default App;
