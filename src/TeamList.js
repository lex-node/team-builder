import React from 'react';

const TeamList = props => {
    return(
        {
            props.teamMembers.map(teamMember => (
                <div>
                    <h2>{teamMember.name}</h2>
                    <p>Power:{teamMember.power}</p>
                </div>
            ))
        }
    )
}


export default TeamList;


