import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Login (props){
    const f = props.onChangeFunction
    return (
        <div className="login">
            <input type="text" placeholder="Enter your userName" onChange={f.userName}/>
            <input type="password" placeholder="Enter your password" onChange={f.password}/>
            <button onClick={f.loginUser}>Login</button>
        </div>
    )
}

export default Login;