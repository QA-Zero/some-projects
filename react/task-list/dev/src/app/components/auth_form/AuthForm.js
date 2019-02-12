import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import cred from '$const/credentials';
import '$assets/styles/AuthForm.scss';

export default class AuthForm extends PureComponent {
    handleLoginChange = e => {
        this.setState({
            ...this.state,
            login: e.target.value,
        });
    };

    handlePasswordChange = e => {
        this.setState({
            ...this.state,
            password: e.target.value,
        });
    };

    handleSignIn = () => {
        const { login, push } = this.props;
        if (
            this.state.login === cred.login
            &&
            this.state.password === cred.password
        ) {
            login();
            push('/list');
        } else {
            this.setState({
                ...this.state,
                showError: true,
            });
        }
    };

    handleKeyDown = e => {
        this.setState({
            ...this.state,
            showError: false,
        });

        if (e.keyCode === 13) {
            this.handleSignIn();
        }
    };

    constructor(props) {
        super(props);
        const { isAdmin, push } = props;

        if (isAdmin) push('/');

        this.state = {
                login: '',
             password: '',
            showError: false,
        };
    }

    render() {
        const { login, password, showError } = this.state;

        return (
            <div className="auth-form">
                <TextField
                    className="field login"
                    helperText="Login"
                    value={login}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleLoginChange}
                    autoFocus={true}
                    placeholder="admin"
                />
                <TextField
                    className="field password"
                    helperText="Password"
                    value={password}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handlePasswordChange}
                    placeholder="123"
                />
                <Button
                    className="btn signIn-btn"
                    onClick={this.handleSignIn}
                >Sign in</Button>
                {
                    showError
                        ? <div className="error">Wrong!</div>
                        : <div className="error" />
                }
            </div>
        )
    };
}
