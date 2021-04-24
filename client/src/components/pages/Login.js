import React, { useState } from 'react'
import axios from 'axios'
import { USER_LOGIN } from '../../utils/context/action';
import { Link, withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from '../../utils/context/GlobalState';
import './Login.css'

const Login = () => {
    const [state, dispatch] = useStoreContext();
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault()
        const Userlog = {
            email: email,
            password: password
        }
        axios.post('/api/user/login', Userlog).then(res => {
            localStorage.setItem('fullname', `${res.data.email}`);
            dispatch({ type: USER_LOGIN, payload:localStorage.fullname });
            history.push('/recipe')
        }).catch(err => console.log('Incorrect: ', err));

        setEmail('');
        setPassword('');
    };

    return (
        <div className="Container">
            <div className="Form-container">
                <div className="Text-container">
                    < form onSubmit={handleSubmit}>
                        <div className="row">
                            <label> Enter Email</label><br />
                            <input
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="row">
                            <label> Password</label><br />
                            <input
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <br />
                        <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between', margin: '0 auto', }}>
                            <button className='login-btn' type="login">Login</button>
                            <Link className='mylink1' to='/signup'>signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Login);





