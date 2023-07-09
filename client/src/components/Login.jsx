import './Login.css'
import { useNavigate } from 'react-router';

const Login = () =>{
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div id="login-form-wrap">
                <h2>Login</h2>
                <form id="login-form">
                    
                    <p>
                    <input type="email" id="email" name="email" placeholder="Email Address" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                    <input type="password" id="password" name="password" placeholder="Password" min="8" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                    <input type="submit" id="login" onClick={()=>navigate('/home')} value="Login" />
                    </p>
                </form>
                <div id="create-account-wrap">
                    <p>Not a member? <a href="#">Create Account</a></p>
                </div>
        </div>
        </div>
        
    )
};

export default Login;