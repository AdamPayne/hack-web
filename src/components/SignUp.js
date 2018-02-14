import React from 'react';

import Headline from './Headline';

import Alert from './Alert';

import loader from '../assets/loader.svg';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            svn_service: 0,
            svn_username: '',
            field: 'Developer',
            expertise: 'Junior',
            fileName: '',
            fileInput: false,
            emailTaken: 0,
            emailValid: true,
            signupSuccessful: false,
            emptyField: false
        };
        this.signUpHandler = this.signUpHandler.bind(this);
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSvnUsername = this.setSvnUsername.bind(this);
        this.setSvnService = this.setSvnService.bind(this);
        this.setField = this.setField.bind(this);
        this.setExpertise = this.setExpertise.bind(this);
        this.setFileInput = this.setFileInput.bind(this);
    }
    signUpHandler() {
        if (this.state.name === '') {
            this.setState({
                emptyField: true,
                signupSuccessful: false,
            });
        } else if (this.state.email === '') {
            this.setState({
                emptyField: true,
                signupSuccessful: false,
            });
        } else if (this.state.svn_username === '') {
            this.setState({
                emptyField: true,
                signupSuccessful: false,
            });
        } else {
            this.setState({
                emptyField: false,
                emailValid: true,
                emailTaken: 0
            });
            this.checkEmail(() => {
                const fileInputField = document.getElementById('file-input-field');
                document.getElementById('sign-up-loader').style.display = 'block';
                document.getElementById('sign-up-form').style.display = 'none';
                if (this.state.fileInput) {
                    const data = new FormData();
                    data.append('file', fileInputField.files[0]);

                    fetch("https://glacial-ridge-92711.herokuapp.com/competitors", {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.state.name,
                            email: this.state.email,
                            svn_service: this.state.svn_service,
                            svn_username: this.state.svn_username,
                            field: this.state.field,
                            expertise: this.state.expertise,
                            cv: data
                        })
                    })
                    .then(res => res.json())
                    .then((res) => {
                        document.getElementById('sign-up-loader').style.display = 'none';
                        document.getElementById('sign-up-form').style.display = 'block';
                        this.setState({ signupSuccessful: true });
                    });
                } else {
                    fetch("https://glacial-ridge-92711.herokuapp.com/competitors", {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.state.name,
                            email: this.state.email,
                            svn_service: this.state.svn_service,
                            svn_username: this.state.svn_username,
                            field: this.state.field,
                            expertise: this.state.expertise
                        })
                    })
                    .then(res => res.json())
                    .then((res) => {
                        document.getElementById('sign-up-loader').style.display = 'none';
                        document.getElementById('sign-up-form').style.display = 'block';
                        this.setState({ signupSuccessful: true });
                    });
                }
            });
        }
    }
    checkEmail(callback) {
        fetch("https://glacial-ridge-92711.herokuapp.com/competitors/email/" + this.state.email)
            .then(res => res.json())
            .then(res => {
                if (this.validateEmail() === false) {
                    this.setState({ 
                        emailValid: false,
                        signupSuccessful: false,
                    });
                } else {
                    this.setState({ emailValid: true });
                    if (parseInt(res.exists) === 1) {
                        this.emailTaken();
                    } else {
                        callback();
                    }
                }
            });
    }
    emailTaken() {
        this.setState({emailTaken: 1});
    }
    validateEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }
    renderResponse() {
        if (this.state.emailTaken === 1) {
            return (
                <Alert type="error">Email is already taken.</Alert>
            );
        } else if (this.state.emailValid === false) {
            return (
                <Alert type="error">Please enter a valid email.</Alert>
            );
        } else if (this.state.signupSuccessful === true){
            return (
                <Alert type="success">You have signed up successfully.</Alert>
            );
        } else if (this.state.emptyField === true) {
            return (
                <Alert type="error">All fields are required</Alert>
            );
        }
    }
    setName(e) {
        this.setState({ name: e.target.value });
    }
    setEmail(e) {
        this.setState({ email: e.target.value });
    }
    setSvnUsername(e) {
        this.setState({ svn_username: e.target.value });
    }
    setSvnService(e) {
        this.setState({ svn_service: e.target.value });
    }
    setField(e) {
        this.setState({ field: e.target.value });
    }
    setExpertise(e) {
        this.setState({ expertise: e.target.value });
    }
    setFileInput() {
        const fileInputField = document.getElementById('file-input-field');
        if (fileInputField.files[0]) {
            this.setState({ 
                fileName: fileInputField.files[0].name,
                fileInput: true,
            });
        } else {
            this.setState({ 
                fileName: '',
                fileInput: false,
            });
        }
    }
    render() {
        return (
            <div>
                <div id="sign-up">
                    <Headline>Sign Up</Headline>
                    <div id="sign-up-loader">
                        <img src={loader} alt="Loading.." />
                    </div>
                    <div id="sign-up-form">
                        <input type="text" value={this.state.name} onChange={this.setName} placeholder="Name" />
                        <input type="text" value={this.state.email} onChange={this.setEmail} placeholder="Email" />
                        <div id="svn">
                            <select onChange={this.setSvnService}>
                                <option value="0">GitHub</option>
                                <option value="1">Bitbucket</option>
                            </select>
                            <input type="text" value={this.state.svn_username} onChange={this.setSvnUsername} placeholder="Username" />
                        </div>
                        <div class="fe-parent">
                            <p class="fe-label">You are a:</p>
                            <select id="field" onChange={this.setField}>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Entrepreneur">Entrepreneur</option>
                                <option value="Enthusiast">Enthusiast</option>
                            </select>
                        </div>
                        <div class="fe-parent">
                            <p class="fe-label">Level of Expertise:</p>
                            <select id="expertise" onChange={this.setExpertise}>
                                <option value="Junior">Junior</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Senior">Senior</option>
                            </select>
                        </div>
                        <div class="fe-parent">
                            <p class="fe-label">CV (Optional):</p>
                            <div id="file-input">
                                <input onChange={this.setFileInput} id="file-input-field" type="file" />
                                <input type="text" value={this.state.fileName} placeholder="Select a file.." />
                            </div>
                        </div>
                        <button onClick={this.signUpHandler}>Sign Up</button>
                        {this.renderResponse()}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
