import React, { Component } from 'react';
import LoginRegisterComponents from './LoginRegisterComponents';
import ReactDOM from 'react-dom';

class Onboarding extends Component {
    handleLoginClick(){
        ReactDOM.render(<LoginRegisterComponents method="login"/>, document.getElementById('root'));
    }

    handleRegisterClick(){
        ReactDOM.render(<LoginRegisterComponents method="register"/>, document.getElementById('root'));
    }

    render() {
        return <header className="Onboarding">
            <button className="btn_login_onboarding" type="button" onClick={this.handleLoginClick}>I have an account</button>
            <button className="btn_register_onboarding" type="button" onClick={this.handleRegisterClick}>Register an account</button>
        </header>
    }
}

export default Onboarding;