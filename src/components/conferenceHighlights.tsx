// import React from 'react';
// import focusIcon from '../assets/focus-icon.png';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import focusIcon from '../assets/keynotespeakersTxt.png';
// import targetIcon from '../assets/target-icon.png';
// import targetIcon from '../assets/tutorialsTxt.png';
// import papersIcon from '../assets/papers-icon.png';
// import papersIcon from '../assets/papers-icon-2.png';
import './styles/KeynoteSpeakers.css';
import './styles/conferenceInfo.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { HashLink } from 'react-router-hash-link';
import DrTessy from '../assets/DrTessy.png';
import DrSaji from '../assets/DrSaji.png';
import trakcs from '../assets/tracks.png'

const speakers = [
  {
    name: "Dr. Tessy Thomas",
    title: "Distinguished Scientist, Director General (Formal) Aeronautical Systems",
    image: DrTessy, // Replace with actual image when available
    bio: `Dr. Tessy Thomas, Distinguished Scientist, Director General Aeronautical Systems obtained her
BTech in Electrical Engineering from Calicut University in 1985 and ME in Guided Missiles from the
Institute of Armament Technology, Pune in 1986 and PhD in Missile Guidance from Jawaharlal Nehru
Technological University (JNTU), Hyderabad in 2014. She obtained MBA in Operations Management
from Indira Gandhi National Open University (IGNOU), New Delhi, in 2007. She joined IAT, Pune as
a faculty member in Guided Missiles in 1986. She joined the Inertial Navigation group as Scientist 'B'
1988 at Hyderabad. She has been associated with the Agni Programme since its developmental flights.
She has designed the guidance scheme for long-range missile systems, which is used in all Agni
missiles. An energy management guidance scheme was designed and developed for the first time in
the country for an all–solid propelled long-range system, for which she was conferred the Agni Self
Reliance Award in 2001. She led a major project, AGNI-4, as Project Director for a state-of-the-art
system with many new technologies for the first time, which was successfully flight-tested and proven.
She was also Project Director (Mission) for the long-range AGNI-5 system, which was successfully
flight-tested and proven. As Director of the Advanced Systems Laboratory, DRDO, she held
multidimensional roles and responsibilities and led the development of a strategic system. Presently,
she is leading the Aeronautical Systems Cluster Laboratories as Director General.`
  },
  {
    name: "Saji S",
    title: "Senior Vice President, HVDC Hitachi Energy India",
    image: DrSaji, // Replace with actual image when available
    bio: `Saji S is Hitachi Energy's HUB Manager HVDC & HVDC Service India. He joined the technology
pioneer in 1995 and led some of its milestone and most ambitious power-linking projects in India.
Hitachi Energy is the global leader in HVDC technology and has installed around half of the
transmission links worldwide. He completed an Executive Education Program in Marketing (EEPM) at
the Indian Institute of Management, Kozhikode, focusing on Marketing/Marketing Management,
General, in 2011-2012. He completed a Bachelor of Technology (B.Tech) degree in Electrical &
Electronics from the University of Kerala, studying there from 1987 to 1991. He led Hitachi Energy's
second and one of India's longest ultrahigh-voltage direct current transmission link projects, running
from Raigarh in central India to Pugalur in Tamil Nadu from 2016 onwards. He also headed the upgrade
work of India's oldest commercial HVDC link between Rihand in Uttar Pradesh and Dadri near Delhi.
He spearheaded ABB's first industrial drive factory setup in India and the establishment of its solar
inverters business here. With close to three decades of experience in the Automation & Energy domain,
Saji has handled diverse leadership roles at ABB ranging from Asst. Vice President of LV Drive Systems
and Renewable Business to Vice President Power Systems. In these roles, he has helped shape Hitachi
Energy offerings, ensuring high quality products and services for customers. For more than 25 years,
ABB has supported India's HVDC journey, and Saji has seen all of it. He is well-versed with the
country's power sector and energy challenges and believes UHVDC will play a large part in India's
energy revolution.`
  }
];

const ConferenceHighlights = () => {
  return (
    <div className="conference-info-container">
      <h1>Conference Highlights</h1>
      <div className="info-cards">
        {/* <div className="info-card">
          <img src={focusIcon} alt="Focus" className="info-icon" />
          <h2>Keynote Speakers</h2>
          <ul>
            <HashLink smooth to="/speakers#speaker0">
              <li>Dr. Tessy Thomas</li>
            </HashLink>
            <HashLink smooth to="/speakers#speaker1">
              <li>Saji S</li>
            </HashLink>
          </ul>
        </div>
        <Link to="/tutorials">
        <div className="info-card">
          <img src={targetIcon} alt="Objectives" className="info-icon" />
          <h2>Tutorials</h2>
          <ul>
            <li>Tutorial 1</li>
            <li>Tutorial 2</li>
            <li>Tutorial 3</li>
          </ul>
        </div>
        </Link>
        <HashLink smooth to="/tracks#top">
          <div className="info-card">
            <img src={papersIcon} alt="Call for Papers" className="info-icon" />
            <h2>Technical Tracks</h2>
          </div>
        </HashLink> */}
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <HashLink to="/speakers#speaker0">
            <div className="speaker-card ch-speaker-card" >
              <div className="speaker-image">
                <img src={speakers[0].image} alt={speakers[0].name} />
              </div>
              <div className="speaker-info ch-speaker-info">
                <h2 className='keynote-speaker-card-heading'><strong>Keynote Speaker</strong></h2>
                <h2>{speakers[0].name}</h2>
                <h3><strong>{speakers[0].title}</strong></h3>
                {/* <p className="speaker-bio">{speakers[0].bio}</p> */}
              </div>
            </div>
          </HashLink>
          <HashLink to="/speakers#speaker1">
            <div className="speaker-card ch-speaker-card">
              <div className="speaker-image">
                <img src={speakers[1].image} alt={speakers[1].name} />
              </div>
              <div className="speaker-info ch-speaker-info">
                <h2 className='keynote-speaker-card-heading'><strong>Keynote Speaker</strong></h2>
                <h2>{speakers[1].name}</h2>
                <h3><strong>{speakers[1].title}</strong></h3>
                {/* <p className="speaker-bio">{speakers[1].bio}</p> */}
              </div>
            </div>
          </HashLink>
          <HashLink to='/tracks#top'>
            <div className='tracks-card-container'>
              <h1>Techinical Tracks at ICCC 2025</h1>
              <img src={trakcs} alt="Tracks Image" className='tracks-img'/>
            </div>
          </HashLink>
        </Carousel>
      </div>
    </div>
  );
}

export default ConferenceHighlights;
