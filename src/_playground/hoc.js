// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code, Render hijacking, Prop manipulation, Abstract state

import React from "react";
import ReactDOM from "react-dom/client"

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin ? <p>Warning! This is confidential information.</p> : undefined}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

// Require Authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? undefined : <p>Please authenticate!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}
const AuthInfo = requireAuthentication(Info)

const appRoot = ReactDOM.createRoot(document.getElementById('app'))
appRoot.render(<AuthInfo isAuth={false} info="this is great"/>)