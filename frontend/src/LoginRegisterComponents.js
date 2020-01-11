import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FWApp from './FWApp'
const SERVER = "http://52.15.229.11:8080";
class LoginRegisterComponents extends Component {


    doLogin() {
        let credentials = {};
        credentials.username = document.querySelector('.login_container>input[type="text"]').value;
        credentials.password = document.querySelector('.login_container>input[type="password"]').value;

        fetch(`${SERVER}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(response => response.json())
            .then(result => {
                if (result.message !== "Authorized!")
                    document.querySelector('#err_label').textContent = result.message;
                else {
                    ReactDOM.render(<FWApp username={credentials.username}/>, document.getElementById('root'));
                }
            });
    }

    doRegister() {
        let credentials = {};
        credentials.username = document.querySelector('.register_container>input[type="text"]').value;
        credentials.password = document.querySelector('.register_container>input[type="password"]').value;
        let verify = document.querySelector('#input_pwd_verify').value;
        if (verify === credentials.password) {
            fetch(`${SERVER}/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            }).then(response => {
                return response.json();
            }).then(result => {
                document.querySelector('#err_label').textContent = result.message;
                if (result.message !== "Username allready taken!")
                    ReactDOM.render(<LoginRegisterComponents method="login" />, document.getElementById('root'));
            });
        }
        else {
            document.querySelector('#err_label').textContent = "Password doesn't match!"
        }
    }

    render() {
        if (this.props.method === "login")
            return <div className="LoginRegisterComponents">
                <div className="login_container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" onClick={this.doLogin}>Login</button>
                </div>
                <label id="err_label"></label>
            </div >
        else if (this.props.method === "register") {
            return <div className="LoginRegisterComponents">
                <div className="register_container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" required />
                    <input id="input_pwd_verify" type="password" placeholder="Repeat Password" required />

                    <button type="submit" onClick={this.doRegister}>Register</button>
                </div>
                <label id="err_label"></label>
            </div>
        }

        return <div>Err no prop</div>
    }
}

export default LoginRegisterComponents;