import React from 'react';
import '../assets/events.css';

const getEventTile = (eventName, date, posterUrl) => (
  <div className="col-md-6 col-sm-12 col-xs-12 text-center">
    <div className="event-card">
      <div className="event-description">
        <span className="name">{eventName}</span> - {date}
      </div>
      <div className="text-center">
        <img src={posterUrl} alt="Sangam_postcard_5_x_7_1" className="poster img-rounded" />
      </div>
    </div>
  </div>
);

export default function Events() {
  return (
    <div className="container">
      <div className="heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>UPCOMING EVENTS</h2>
          <hr className="orange" />
          <div className="col-md-10 col-md-offset-1 col-xs-12">
            <div className="date">
              <h3>Srujana & TV Asia Present</h3>
              <span className="name">Colors of Rajasthan</span> - 22 JUN 2018
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/fRMUv0/COR-with-supporters.jpg" alt="COR-with-supporters" border="0" />
            </div>
          </div>
        </div>
      </div>

      <div className="row heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>PAST EVENTS</h2><hr className="orange" />
        </div>
      </div>
      <div className="col-md-8 col-md-offset-2 col-xs-12">
        <div className="row">
          { getEventTile('Bhairav Se Bhairavi Tak', '22 JUN 2018', 'https://image.ibb.co/fPdUtJ/0.jpg') }
        {/* </div>
        <div className="row"> */}
          { getEventTile('Yugpurush', '06 AUG 2017', 'https://image.ibb.co/cfejnF/yugpurush_Logo.jpg') }
          { getEventTile('Sangam', '25 MAY 2017', 'https://image.ibb.co/kAbUt5/Sangam_postcard_5_x_7_1.jpg') }
        {/* </div>
        <div className="row"> */}
          { getEventTile('Sogaat', '22 NOV 2015', 'https://image.ibb.co/nzCxd5/Screen_Shot_2017_04_26_at_10_14_47_PM.png') }
          { getEventTile('Shabda Sangat', '30 NOV 2014', 'https://image.ibb.co/mEnGo5/Shabda_Sangat.gif') }
        {/* </div>
        <div className="row"> */}
          { getEventTile('Sur Safar', '16 AUG 2014', 'https://image.ibb.co/bFmWMQ/Sur_Safar.png') }
          { getEventTile('Ashok Dave', '26 APR 2014', 'https://image.ibb.co/dLzAy5/Screen_Shot_2017_04_26_at_10_14_08_PM.png') }
        </div>
      </div>
    </div>
  );
}
