import React, { useState } from 'react'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import Logo from '../Logo'
import { MdShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState('-3000px')
    const handleHumberger = () =>{
        if(show === '-3000px'){
            setShow('50px')
        }else{
            setShow('-3000px')
        }
    }
    return (
        <div className='header'>
            <div className='nav_main'>
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className='nav_main_child2'>
                    <div className='menu' style={{top: show}}>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">How it Works</a></li>
                            <li><a href="/">Testimonials</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li className='signuptbtnli'>
                                <Link to="/registration">
                                    <button className='button2 px-5 py-2'>sign up</button>
                                </Link>
                            </li>
                            <li className='loginbtnli'>
                                <a href="/">
                                    <button className='button1 px-5 py-2'>Login</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='nav_main_child3'>
                    <div>
                        <button className='button1 desk_btn'>Login</button>
                        <Link to='/registration'><button className='button2 ms-3 desk_btn'>sign up</button></Link>
                        {/* <a href="/"><img className='ms-3 shopping_cart_img' src={shoping} alt="" /></a> */}
                        <a href="/"><MdShoppingCart className='ms-3 shopping_cart_img' /></a>
                        <GiHamburgerMenu className='humberger_menu' onClick={handleHumberger}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header