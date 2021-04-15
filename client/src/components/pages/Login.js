import React, { Component } from 'react'

class Login extends Component {
    state = {
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
        console.log('Submitting...', this.state.username, this.state.password )
        localStorage.setItem('fullname', `{this.state.username} ${this.state.password}`)
    }
    render() {
        return (
            <div>
                {/* <p>Hello {this.state.firstName} {this.state.lastName}</p> */}
                < form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <lable> Username</lable><br />
                        <input
                         name="username" 
                         value={this.state.username}
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





