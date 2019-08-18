import React from 'react';

const TeamList = props => {

    return (
        <div className="container">
            {
                props.teamMembers.map(teamMember => (
                    <div className="card" key={teamMember.name}>
                        <h2>{teamMember.name}</h2>
                        <p>Power: {teamMember.power}</p>
                        <button onClick={props.setMemberToEdit(teamMember)}>Edit</button>
                    </div>
                ))
            }
        </div>
    )
}


export default TeamList;



