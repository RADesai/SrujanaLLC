import React from 'react';
import '../assets/team.css';

const teamMembers = [
  { name: 'Ashish Desai', phoneNumber: '(973) 520-3635' },
  { name: 'Rathin Mehta', phoneNumber: '(908) 720-9082' },
  { name: 'Jitendra Shah', phoneNumber: '(609) 510-9746' },
  { name: 'Jagadish Christian', phoneNumber: '(201) 240-6019' }
]

const getTeamMember = ({ name, phoneNumber }) => (
  <div className="member">
    <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
      <h3>{name}</h3>
      <h4>{phoneNumber}</h4>
      <hr className="yellow" />
    </div>
  </div>
);

export default function Team() {
  return (
    <div className="container">
      <div className="heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>OUR TEAM</h2><hr className="orange" />
        </div>
      </div>
      <div className="row">
        { teamMembers.map(teamMember => getTeamMember(teamMember)) }
      </div>
    </div>
  );
}
