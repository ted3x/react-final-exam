import React,{ Fragment } from 'react';
import './about-me.css'

const AboutMe = () => {
  return (
    <div className="about-me">
        <h2>About Me</h2>
        <p>
          გამარჯობა, მე ვარ თედო მანველიძე, 20 წლის. ვსწავლობ BTU-ში IT ფაკულტეტზე.
          <div className="about-me-links">
            <a className="about-me-link-item" href="https://fb.com/tedex.manvelidze">Facebook</a>
            <a className="about-me-link-item" href="https://github.com/ted3x">Github</a>
          </div>
        </p>
    </div>
  );
};
  
export default AboutMe;
  