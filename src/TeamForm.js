import React, {useState, useEffect} from "react";


const TeamForm = props => {
    const [teamMember, setTeamMember] = useState({name: "", power: ""});

    const handleChange = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({name: "", power: ""})
    };

    useEffect(() => {
        setTeamMember(props.memberToEdit)
    }, [props.memberToEdit]);

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


/***Get TeamForm.jsm.js ready to edit members**

- If `TeamForm` receives `props.memberToEdit`, then that member object should populate your state object that is controlling your forms.
Now, it may be tempting to do something like this: `const [member, setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})`
for our form to update with whatever member we click on. However, this is a trap that will cause a pretty big bug in our app.
If props are used to set state like this, the state property will _NOT_ update when the prop changes.
So... what kind of technique have we learned to keep something in sync with props when they change? `useEffect`!
Write an effect that syncs with `props.memberToEdit`. When `props.memberToEdit` changes, the effect will update the `member` state object with the new data.
This will populate the inputs with whichever member we are trying to update.*/



