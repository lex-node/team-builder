import React, {useState} from 'react';
import './App.css';
import TeamList from './TeamList';
import TeamForm from './TeamForm';

function App() {

    let initialTeamMembers = [
        {name: "Professor X", power: "telepathy"},
        {name: "Cyclops", power: "laser eyes"},
        {name: "Iceman", power: "ice"},
        {name: "Angel", power: "flying"}
    ];

    const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

    const addNewTeamMember = teamMember => {
        setTeamMembers([...teamMembers, teamMember]);
    };

    return (
        <div className="App">
            <div className="team-list">
                <TeamList teamMembers={teamMembers}/>
            </div>
            <TeamForm addNewTeamMember={addNewTeamMember}/>
        </div>
    );
}

export default App;
