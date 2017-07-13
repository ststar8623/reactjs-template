import React from 'react';
import ReacDOM from 'react-dom';
import {Provider} from 'react-redux';
import Layout from './components/Layout';
import store from './store';
const app = document.getElementById('app');

ReacDOM.render(<Provider store={store}>
  <Layout />
  </Provider>, app);