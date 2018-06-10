//Higher Order Component (HOC) - a component (HOC) that renders another component 
//Goal is to reuse code 
//Render hijacking
//Prop manipulation
//Abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> the info is {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to grab info</p> }
        </div>
    )
}



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are deets'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='The patient has died' />, document.getElementById('app'));