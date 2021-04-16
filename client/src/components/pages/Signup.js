import React, { Component } from 'react'
import axios from 'axios'
import './Signup.css';

class Signup extends Component {
    state = {
        email: '',
        username: '',
        password: ''

    }
    handleInputChange = e => {
        const { name, value} = e.target
        this.setState({ [name]: value })
    // console.log( e.target.name, e.target.value)

    }
    handleSubmit = e =>{
        e.preventDefault()
        const UserInfo = {username:this.state.username, email:this.state.email,  password:this.state.password }
        console.log(UserInfo )
        axios.post('/api/user', {username:this.state.username, email:this.state.email,  password:this.state.password }).then(res => console.log(res))
        // localStorage.setItem('fullname', `{this.state.email} ${this.state.username} ${this.state.password}`)
    }
    render() {
        return (
            <div className="Container">
                 <div className="Form-container">
                     <div className="Text-container">
                
                {/* <p>Hello {this.state.firstName} {this.state.lastName}</p> */}
                < form onSubmit={this.handleSubmit}>
               
                <div className="row">
                        <lable> Username</lable><br />
                        <input 
                        name="username" 
                        placeholder="Full Name"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text" 
                        />
                    </div>

                    <div className="row">
                        <lable> email</lable><br />
                        <input
                         name="email" 
                         placeholder="email"
                         value={this.state.email}
                        onChange={this.handleInputChange}
                        type="text" 
                        />
                    </div>
                    

                    <div className="row">
                        <lable> Password</lable><br />
                        <input 
                        name="password"
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="text" 
                        />
                    </div>
                    <br />
                    <button type="signup">Submit</button>
                </form>
                </div>
                </div>
            </div>
            
        )
    }
}
export default Signup;





