import React, { Component } from 'react';
import './App.css';
const SERVER = "http://52.15.229.11:8080";
class LoginRegisterComponents extends Component {


    doLogin(){
        let credentials={};
        credentials.username = document.querySelector('.login_container>input[type="text"]').value;
        credentials.password = document.querySelector('.login_container>input[type="password"]').value;

        fetch (`${SERVER}/login`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            body:credentials

        });
    }

    doRegister(){
        let credentials={};
        credentials.username = document.querySelector('.register_container>input[type="text"]').value;
        credentials.password = document.querySelector('.register_container>input[type="password"]').value;
        fetch (`${SERVER}/register`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(credentials)
        });
        console.log(JSON.stringify(credentials));
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

            </div >
        else if (this.props.method === "register"){
            return <div className="LoginRegisterComponents">
                <div className="register_container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"  required />
                    <input type="password" placeholder="Repeat Password"  required />

                    <button type="submit" onClick={this.doRegister}>Register</button>
                </div>
            </div>
        }

        return <div>Err no prop</div>
    }
}

export default LoginRegisterComponents;