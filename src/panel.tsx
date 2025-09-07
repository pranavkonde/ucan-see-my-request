import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomThemeProvider } from './ThemeContext';
import App from './App';

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);

rootDiv.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);