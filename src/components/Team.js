import React from 'react';
import '../assets/team.css';

export default function Team() {
  return (
    <div className="container">
      <div className="heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>OUR TEAM</h2><hr className="orange" />
        </div>
      </div>
      <div className="row">
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Ashish Desai</h3>
            <h4>973-520-3635</h4>
            <hr className="yellow" />
          </div>
        </div>
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Rathin Mehta</h3>
            <h4>908-720-9082</h4>
            <hr className="yellow" />
          </div>
        </div>
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Jitendra Shah</h3>
            <h4>609-510-9746</h4>
            <hr className="yellow" />
          </div>
        </div>
        <div className="member">
          <div className="col-md-4 col-md-offset-4 col-xs-12 text-center name">
            <h3>Jagadish Christian</h3>
            <h4>201-240-6019</h4>
            <hr className="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
}
