import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            username: '',
            password: ''
        };
    }
    

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault()
        const UserInfo = {
            username: this.state.username, email: this.state.email, password: this.state.password
        }
        axios.post('/api/user', UserInfo).then(res => {
            // console.log(res.data.email)
            localStorage.setItem('fullname', `${res.data.email}`)
            // dispatch({ type: USER_LOGIN, payload:localStorage.fullname });

            this.props.history.push('/recipe')
        })
        this.setState({
            username: '',
            email: '',
            password: ''
        });
    };

    render() {
        return (
            <div className="Container">
                <div className="Form-container">
                    <div className="Text-container">
                        < form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <label> Username</label><br />
                                <input
                                    name="username"
                                    placeholder="Full Name"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    type="text"
                                />
                            </div>

                            <div className="row">
                                <label> email</label><br />
                                <input
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    type="text"
                                />
                            </div>

                            <div className="row">
                                <label> Password</label><br />
                                <input
                                    name="password"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    type="password"
                                />
                            </div>
                            <br />
                            <div style={{width:'50%',display:'flex',justifyContent:'space-between',margin:'0 auto',}}>
                            <button className='sign-btn' type="submit">Submit</button>
                            <Link className='mylink1' to='/login'>Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};
export default withRouter(Signup);
