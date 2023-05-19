
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images (11).jpg'
import { AuthContext } from '../../Providers/AuthProviders';
import './NavBar.css';


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const HandleLogout = ()=>{
        logOut()
        .then()
        .catch(error => console.error())
    }
    const NavItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/alltoys'>ALL TOY S</Link></li>
        <li><Link to='/mytoys'>MY TOY S</Link></li>
        <li><Link to='/addtoy'>ADD TOY</Link></li>
        <li><Link to='/blogs'>BLOG</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {NavItems}
                </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">
                <img className='h-8 w-24 mr-2' src={image} alt="" />
                <h1 className='text-emerald-800'>TOY S SHOP</h1>


            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-violet-700">
                {NavItems}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user && <button onClick={HandleLogout}>Logout</button>
            }
            {user ?
                <Link className='hover-text h-10 w-10 ml-4 cursor-pointer'>
                <img className='w-full h-full rounded-md' src={user?.photoURL}></img>
                <span className='text' id='left'>{user?.displayName}</span>
                </Link>
                
                :<Link to='/login'><button className="btn btn-outline btn-accent" >Login</button></Link>
               
            }
        </div>
    </div>

 

    
    

  
    );
};

export default NavBar;