import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// fetched the root element from DOM and Create a React root..then Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
