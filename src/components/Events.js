import React from 'react';
import '../assets/events.css';

const getEventTile = (eventName, date, posterUrl) => (
  <div className="col-md-6 col-xs-12 text-center">
    <div className="date">
      <span className="name">{eventName}</span> - {date}
            </div>
    <div className="text-center">
      <img src={posterUrl} alt="Sangam_postcard_5_x_7_1" className="poster img-rounded" />
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
              <span className="name">Bhairav Se Bhairavi Tak</span> - 22 JUN 2018
            </div>
            <div className="text-center">
              <img src="https://image.ibb.co/fPdUtJ/0.jpg" alt="bhairavi_Logo" className="main img-rounded" />
            </div>
          </div>
          {/* <div className="col-md-8 col-md-offset-2 col-xs-12">
            <h2>Brought to you by:</h2>
          </div>
          <div className="col-md-8 col-md-offset-2 col-xs-12 text-center sponsors">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <div className="sponsor">
                  <img src="https://image.ibb.co/ituAy5/ShopLogo.jpg" className="img-rounded" alt="sponsor-logo"/>
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Rahul & Meena Shukla from SS White Aerospace</h4>
                  <hr className="orange" />
                </div>
                <div className="sponsor">
                  <img src="https://image.ibb.co/cvQYJ5/Screen_Shot_2017_04_26_at_10_31_42_PM.png" alt="Screen_Shot_2017_04_26_at_10_31_42_PM" className="img-rounded" />
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Parikh Network</h4>
                  <hr className="orange" />
                </div>
                <div className="sponsor">
                  <img src="https://image.ibb.co/cpWMak/ED63_ADDB_0772_46_A6_8411_43_F421753845.jpg" alt="ED63_ADDB_0772_46_A6_8411_43_F421753845" />
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Sangita & Pranav Shah</h4>
                  <hr className="orange" />
                </div>
                <div className="sponsor">
                  <h4>Division 10 Inc</h4>
                  <hr className="yellow" />
                </div>
                <div className="sponsor">
                  <h4>Maa Siddheshwari Food Corp</h4>
                  <hr className="orange" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="row heading">
        <div className="col-md-8 col-md-offset-2 col-xs-12">
          <h2>PAST EVENTS</h2><hr className="orange" />
        </div>
      </div>
      <div className="col-md-8 col-md-offset-2 col-xs-12">
        <div className="row">
          { getEventTile('Yugpurush', '06 AUG 2017', 'https://image.ibb.co/cfejnF/yugpurush_Logo.jpg') }
          { getEventTile('Sangam', '25 MAY 2017', 'https://image.ibb.co/kAbUt5/Sangam_postcard_5_x_7_1.jpg') }
        </div>
        <div className="row">
          { getEventTile('Sogaat', '22 NOV 2015', 'https://image.ibb.co/nzCxd5/Screen_Shot_2017_04_26_at_10_14_47_PM.png') }
          { getEventTile('Shabda Sangat', '30 NOV 2014', 'https://image.ibb.co/mEnGo5/Shabda_Sangat.gif') }
        </div>
        <div className="row">
          { getEventTile('Sur Safar', '16 AUG 2014', 'https://image.ibb.co/bFmWMQ/Sur_Safar.png') }
          { getEventTile('Ashok Dave', '26 APR 2014', 'https://image.ibb.co/dLzAy5/Screen_Shot_2017_04_26_at_10_14_08_PM.png') }
        </div>
      </div>
    </div>
  );
}
