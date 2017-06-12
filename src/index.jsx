import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import appState from './AppState.js';
import App from './App';




render(
  <AppContainer>
    <App store={appState} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp store={appState} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
