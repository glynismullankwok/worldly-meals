import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    };

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        // console.log( e.target.name, e.target.value)
    };

    handleSubmit = e => {
        e.preventDefault()
        const UserInfo = {
            username: this.state.username, email: this.state.email, password: this.state.password
        }
        console.log(UserInfo)

        axios.post('/api/user', UserInfo).then(res => {
            console.log("Signed User ", res)
            this.props.history.push('/login')
        })
        localStorage.setItem('fullname', `{this.state.email} ${this.state.username} ${this.state.password}`)
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
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    type="text"
                                />
                            </div>

                            <div className="row">
                                <lable> Password</lable><br />
                                <input
                                    name="password"
                                    placeholder="Enter password"
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
        );
    };
};
export default withRouter(Signup);





// import React, { useState} from 'react'
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Row from "../../components/Row";

// const Signup = () => {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("username is " + username);
//     console.log("password is " + password);
//   };
//     return (

//       <div>
//       <div className="mt-4">
//         <h2>Welcome to Wikipedia Searcher!</h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <Container className="mt-3 px-5">
//           <Row className="form-group">
//             <Col size="12">
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 onChange={e => setUsername(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <Row className="form-group">
//             <Col size="12">
//               <input
//                 className="form-control"
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={e => setPassword(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <button className="btn btn-success" type="submit">
//             Submit
//           </button>
//         </Container>
//         <Container className="mt-4">
//           <h3>Hello {username}!</h3>
//           <p>I probably shouldn't tell you this, but your password is {password}!</p>
//         </Container>
//       </form>

//     </div>

//         // <div>
//         //   <h1>Signup</h1>  
//         // </div>
//     );
// }

// export default Signup;
