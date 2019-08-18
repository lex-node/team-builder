import React from 'react';

const TeamList = props => {
    return (
        <div>
            {
                props.teamMembers.map(teamMember => (
                    <div key={teamMember.name}>
                        <h2>{teamMember.name}</h2>
                        <p>Power: {teamMember.power}</p>
                    </div>
                ))
            }
        </div>
    )
}


export default TeamList;

