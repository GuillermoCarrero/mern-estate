import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading ={null} persistor ={persistor}>
    <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
