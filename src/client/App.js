// External dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Local dependencies
import AppRouter from '@components/routing/AppRouter';
import { store } from '@config/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
