import React, {useState} from "react";


const TeamForm = props => {
    const [teamMember, setTeamMember] = useState({name: "", power: ""});

    const handleChange = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                New Team Member Name:
                <input
                    type="text"
                    name="name"
                    value={teamMember.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                New Team Member Power:
                <input
                    type="text"
                    name="power"
                    value={teamMember.power}
                    onChange={handleChange}
                />
            </label>
            <button>Add Team Member!</button>
        </form>
    );
};

export default TeamForm;
