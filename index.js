import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EditablePage from "C:/Users/dell/Documents/projects/notionclone/notionclone/src/component/editablePage.js";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h1 className="Logo">notion.clone</h1>
    <p className="Intro">
      Helloo{" "}
      <span role="img" aria-label="greetings" className="Emoji">
        👋
      </span>{" "}
      You can add content below. Type <span className="Code">/</span> to see
      available elements.
    </p>
    <EditablePage />
  </React.StrictMode>,
  rootElement
);
reportWebVitals();
