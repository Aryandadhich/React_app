import React from 'react';
import ReactDOM from 'react-dom';

import App from  './App';

//this is going to trigger our div with an id of root and its going to
// inject our entire react application right inside of app.js
//here <App /> is component
ReactDOM.render(<App />, document.getElementById('root'));