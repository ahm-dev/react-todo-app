// External dependencies
import React from 'react';

// Local dependencies
import Me from '@assets/me.jpg';

const AboutContent = () => {
  return (
    <div>
      <img
        src={Me}
        alt="In greyscale: the author of this app, Alex Measday"
        className="about-me-img"
      />
      <div className="about-descr text-left">
        <p>
          Welcome to my todo app, written in React! I'm a full-stack web
          developer within the DMV area with a background focused in
          JavaScript-oriented tech stacks. MEAN, MERN, <i>"MEVN"</i> - you name
          it, and I've probably worked in it. I have a strong interest in
          cloud-based services, linguistics, and anything related to
          computational linguistics (a wonderful mix of two beautiful
          disciplines).
        </p>
        <p>
          You can find out more about me via my{' '}
          <a
            className="link"
            href="https://www.linkedin.com/in/alex-measday-480884154/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
