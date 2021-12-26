import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";

/* Select Theme by User pereferences */
export const light = {
    palette: {
        mode: 'light',
    },
}
export const dark = {
    palette: {
        mode: 'dark',
    },
}

let isUserThemeDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log('isDark = ' + isUserThemeDark);

const appliedTheme = createTheme(isUserThemeDark ? dark : light);
/* Select Theme by User pereferences */

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={appliedTheme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
