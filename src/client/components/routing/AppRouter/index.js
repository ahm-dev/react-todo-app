// External dependencies
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// Local dependencies
import Header from '@components/layout/Header';
import Content from '@components/layout/Content';
import { routes } from '@components/routing/routes.js';

const AppRouter = () => {
  return (
    <Router>
      <Header></Header>
      <Content>
        {routes.map(route => {
          return <Route {...route}></Route>;
        })}
      </Content>
    </Router>
  );
};

export default AppRouter;
