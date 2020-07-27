import React, { Component } from 'react'
import { withRouter } from "react-router";

import './Register.css'

import { RoleData } from './Data';
import { SecurityQuestions } from './Data';
import axios from 'axios';
export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            role: '',
            insti: '',
            question1: '',
            answer1: '',
            question2: '',
            answer2: '',
            question3: '',
            answer3: '',
            SecurityQuestions: SecurityQuestions,
            error: ''
        }
    }

    inputHandler = (e) => {
        console.log("here")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmitted = (event) => {
        let data = {}
        data['name'] = this.state.name
        data['email'] = this.state.email
        data['pass'] = this.state.pass
        data['role'] = this.state.role
        data['insti'] = this.state.insti
        let ques = []
        let ques1 = {}
        ques1['ques'] = this.state.question1
        ques1['ans'] = this.state.answer1
        ques.push(ques1)
        let ques2 = {}
        ques2['ques'] = this.state.question2
        ques2['ans'] = this.state.answer2
        ques.push(ques2)
        let ques3 = {}
        ques3['ques'] = this.state.question3
        ques3['ans'] = this.state.answer3
        ques.push(ques3)
        data['QAs'] = ques

        console.log('data: ', data);

        URL = "https://us-central1-steady-voltage-277023.cloudfunctions.net/function-1"

        axios.post(URL, data)
            .then(response => {
                this.setState({
                    'error': ''
                })
                console.log('res: ' + response.data)})
            .catch((error) => {
                console.log(error.response.data);
                this.setState({
                    'error': error.response.data.error
                })
            });
    }

    onQuestion1Select = (event) => {
        this.setState({
            'question1': event.target.value
        })
        let SecurityQuestions = this.state.SecurityQuestions
        SecurityQuestions.forEach((data) => {
            if (data.selected === 1) {
                data.selected = 0
            }
        })
        SecurityQuestions.forEach((data) => {
            if (data.question === event.target.value) {
                data.selected = 1
            }
        })
        console.log(...SecurityQuestions);
        this.setState({ SecurityQuestions });
    }

    onQuestion2Select = (event) => {

        this.setState({
            'question2': event.target.value
        })
        let SecurityQuestions = this.state.SecurityQuestions
        SecurityQuestions.forEach((data) => {
            if (data.selected === 2) {
                data.selected = 0
            }
        })
        SecurityQuestions.forEach((data) => {
            if (data.question === event.target.value) {
                data.selected = 2
            }
        })
        console.log(...SecurityQuestions);
        this.setState({ SecurityQuestions });
    }

    onQuestion3Select = (event) => {

        this.setState({
            'question3': event.target.value
        })
        let SecurityQuestions = this.state.SecurityQuestions
        SecurityQuestions.forEach((data) => {
            if (data.selected === 3) {
                data.selected = 0
            }
        })
        SecurityQuestions.forEach((data) => {
            if (data.question === event.target.value) {
                data.selected = 3
            }
        })
        console.log(...SecurityQuestions);
        this.setState({ SecurityQuestions });
    }

    render() {
        return (
            <div>

                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 border rounded" >
                        <div className="container p-4">
                            <h3 className="text-center">Sign Up</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="name" className="form-control border" placeholder="Enter username" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" className="form-control  border" placeholder="Enter email" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="pass" className="form-control border" placeholder="Enter password" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Role</label>
                                <select name="role" className="form-control  border" onChange={this.inputHandler}>
                                    <option hidden>Select Role</option>
                                    {
                                        RoleData.map((data) =>
                                            <option value={data}>{data}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Institute</label>
                                <input type="text" name="insti" className="form-control  border" placeholder="Institute" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Security Question 1</label>
                                <select name="question1" className="form-control  border" onChange={(e) => this.onQuestion1Select(e)}>
                                    <option hidden>Select security question</option>
                                    {
                                        this.state.SecurityQuestions.map((data) => {
                                            if (data.selected === 0 || data.selected === 1) {
                                                return <option value={data.question}>{data.question}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" name="answer1" className="form-control  border" placeholder="Enter answer" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Security Question 2</label>
                                <select name="question2" className="form-control  border" onChange={(e) => this.onQuestion2Select(e)}>
                                    <option hidden>Select security question</option>
                                    {
                                        this.state.SecurityQuestions.map((data) => {
                                            if (data.selected === 0 || data.selected === 2) {
                                                return <option value={data.question}>{data.question}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" name="answer2" className="form-control  border" placeholder="Enter answer" onChange={this.inputHandler} />
                            </div>

                            <div className="form-group">
                                <label>Security Question 3</label>
                                <select name="question3" className="form-control  border" onChange={(e) => this.onQuestion3Select(e)}>
                                    <option hidden>Select security question</option>
                                    {
                                        this.state.SecurityQuestions.map((data) => {
                                            if (data.selected === 0 || data.selected === 3) {
                                                return <option value={data.question}>{data.question}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" name="answer3" className="form-control  border" placeholder="Enter answer" onChange={this.inputHandler} />
                            </div>

                            {
                                this.state.error != ''?
                                    <p className="form-group" style={{ color: 'red' }}>
                                        {this.state.error}
                                    </p>        
                                 : null
                            }
                            

                            <button type="submit" onClick={this.formSubmitted} className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/login">sign in?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);