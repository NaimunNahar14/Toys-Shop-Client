
import { Link, useLocation, useNavigate} from 'react-router-dom';
import img from '../assets/istockphoto-687165852-612x612.jpg';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
         const user = result.user;
         toast.success('Successfully login!')
         console.log(user);
         navigate(from, {replace: true});
        })
        .catch(error =>{
         console.log(error.message);
        })
 
     }

    const {SignIn} = useContext(AuthContext);
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const Handlelogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;


        SignIn(email,password)
        .then(result =>{
            const user = result.user;
            alert('login SuccessFully')
            
            console.log(user)
            navigate(from, {replace: true});
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={Handlelogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                        <h2>Don't Have an Account? <Link to='/signup' className='text-cyan-600'>Sign Up</Link></h2>
                        <button className="btn btn-outline btn-error" onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;