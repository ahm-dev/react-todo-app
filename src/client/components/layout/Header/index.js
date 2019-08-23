import React from 'react';

import HeaderToolbar from '@components/layout/Header/HeaderToolbar';
import NavigationControls from '@components/layout/Header/NavigationControls';

const Header = props => {
  return (
    <header className="flex-grow">
      <HeaderToolbar title="Cool React Todo App">
        <NavigationControls />
      </HeaderToolbar>
    </header>
  );
};

export default Header;
