import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

/* Select Theme by User pereferences */
const light = {
    palette: {
        mode: 'light',
    },
}
const dark = {
    palette: {
        mode: 'dark',
    },
}
let isUserThemeDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const appliedTheme = createTheme(isUserThemeDark ? dark : light);
/* Select Theme by User pereferences */

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={appliedTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
