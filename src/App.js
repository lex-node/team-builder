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

    const [memberToEdit, setMemberToEdit] = useState({name: "", power: ""});

    const addNewTeamMember = teamMember => {
        setTeamMembers([...teamMembers, teamMember]);
    };

    return (
        <div className="App">
            <div className="team-list">
                <TeamList teamMembers={teamMembers} setMemberToEdit={setMemberToEdit}/>
            </div>
            <TeamForm addNewTeamMember={addNewTeamMember} memberToEdit={memberToEdit}/>
        </div>
    );
}

export default App;

