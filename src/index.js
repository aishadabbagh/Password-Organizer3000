import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let userEmails = [{
    ID: 1,
    Email : "Aisha.dabbagh@gmail.com",
    "Website": [
    {"Facebook": "1234"},
    {"Twitter": "0000"},
    {"Google": "4321"}] 
},
{   ID: 2,
    Email : "a.dabbagh@hotmail.com",
    "Website": [
    {"Yahoo" : "kkkk"},
    {"Youtube": "1234"}]
},
{   ID: 3,
    Email : "a.d@yahoo.com",
    "Website": [
    {"Yahoo" : "kkkk"},
    {"Youtube": "4444"} ] 
}
];

//Sending user_emails to app//
ReactDOM.render(
<App userEmails={userEmails}/>,
document.getElementById('root'));