import axios from 'axios'
import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = e => {
        const { name, value} = e.target
        this.setState({ [name]: value })
    // console.log( e.target.name, e.target.value)
    }

    handleSubmit = e =>{
        e.preventDefault()
        localStorage.setItem('fullname', `{this.state.email} ${this.state.password}`)
        const Userlog = {
            email: this.state.email,
            password:this.state.password
        }
        // console.log('Submitting...', Userlog)
        axios.post('/api/user/login', Userlog ).then(res => console.log('Userlog', res.data));
        
       this.setState( {
            email: '',
            password: ''
        })
    }
    
    render() {
        return (
            <div>
                {/* <p>Hello {this.state.firstName} {this.state.lastName}</p> */}
                < form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <lable> Enter Email</lable><br />
                        <input
                         name="email" 
                         value={this.state.email}
                        onChange={this.handleInputChange}
                        type="text" 
                        />
                    </div>
                    <div className="row">
                        <lable> Password</lable><br />
                        <input 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="text" 
                        />
                    </div>
                    <br />
                    <button type="login">Login</button>
                </form>
            </div>
        )
    }
}
export default Login;





