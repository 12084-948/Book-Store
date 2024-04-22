import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import { useAuth } from '../context/AuthProvider'
const Navbar = () => {
    const [authUser, setAuthUser] = useAuth()

    return (

        <div>
            <nav className="navItems">
                <h1 className='navLogo'>Book Store</h1>

                <div className='navMenu'>
                    <ul id='nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/course'>Course</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/'>About</Link>
                        </li>

                    </ul>
                </div>
                <input className='inputNav' type="text" placeholder='Search here...' />

                {
                    authUser ? <Logout /> :

                        <div className="cart">
                            <i class="fa-solid fa-moon"></i>
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} >Login</button>
                            <Login />
                        </div>
                }

            </nav>
        </div>
    )
}

export default Navbar