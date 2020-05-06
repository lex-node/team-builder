import React, {useState} from 'react';
import styled from 'styled-components';

const InputContainer = styled.label`
    margin: 10px; 
    padding: 5px; 
    color: deeppink;
`
const Form = (props) => {

    const [newMember, setNewMember] = useState({name: ``, email: ``, role: ``});

    const handleChange = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.setTeamMembers([...props.teamMembers, newMember]);
        setNewMember({name: ``, email: ``, role: ``});
    }

    return (
        <div style={{
            display: `flex`,
            flexDirection: `column`,
            border: `solid`,
            justifyContent: `space-around`,
            alignItems: `center`
        }}>
            <h2 style={{borderBottom: `solid`, borderColor: `white`, color: `deeppink`}}>add a new team member</h2>
            <form onSubmit={event => handleSubmit(event)} style={{display: `flex`, flexDirection: `column`}}>
                <InputContainer>
                    Name: <input type="text" name={`name`} value={newMember.name}
                                 onChange={event => handleChange(event)}/>
                </InputContainer>
                <InputContainer>
                    Email: <input type="text" name={`email`} value={newMember.email}
                                  onChange={event => handleChange(event)}/>
                </InputContainer>
                <InputContainer>
                    Role: <input type="text" name={`role`} value={newMember.role}
                                 onChange={event => handleChange(event)}/>
                </InputContainer>
                <button onSubmit={event => handleSubmit(event)}>Submit</button>
            </form>
        </div>
    )
}


export default Form;
