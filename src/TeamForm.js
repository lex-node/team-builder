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
        <div className="container">
            <div className="card">
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
                    <br/>
                    <label>
                        New Team Member Power:
                        <input
                            type="text"
                            name="power"
                            value={teamMember.power}
                            onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <button>Add Team Member!</button>
                </form>
            </div>
        </div>
    );
};

export default TeamForm;
