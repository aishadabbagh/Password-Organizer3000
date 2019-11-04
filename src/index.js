import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let userEmails = [
    "Aisha.dabbagh@gmail.com",
    "Aisha.Dabbagh@alumni.qimam.com",
    "A.dabbagh@hotmail.com"
];

//Sending user_emails to app//
ReactDOM.render(
<App userEmails={userEmails}/>,
document.getElementById('root'));