// External dependencies
import React from 'react';

// Local dependencies
import { ViewTitle } from '@components/common';
import AboutContent from '@components/about/AboutContent';

const AboutView = () => {
  return (
    <div>
      <ViewTitle title="About Alex Measday" />
      <AboutContent />
    </div>
  );
};

export default AboutView;
