import React, { useState } from 'react'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import Logo from '../Logo'
import { MdShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import profielimg from '../../assets/images/profileImg.png'
import { IoIosArrowDown } from 'react-icons/io';

function LoginHeader() {
    const [show, setShow] = useState('-3000px')
    const handleHumberger = () => {
        if (show === '-3000px') {
            setShow('50px')
        } else {
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
                    <div className='menu' style={{ top: show }}>
                        <ul className='list-unstyled mb-0'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Help Center</a></li>
                            <li className='signuptbtnli'>
                                <div className='userinfo_div'>
                                    <img src={profielimg} className='userimg' alt="" />
                                    <p className='para1 mb-0 mx-2'>username</p>
                                    <IoIosArrowDown />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='nav_main_child3'>
                    <div className='d-flex align-items-center'>
                        <div className='userinfo_div desk_btn'>
                            <img src={profielimg} className='userimg' alt="" />
                            <p className='para1 mb-0 mx-2'>username</p>
                            <IoIosArrowDown />
                        </div>
                        <a href="/"><MdShoppingCart className='ms-3 shopping_cart_img' /></a>
                        <GiHamburgerMenu className='humberger_menu' onClick={handleHumberger} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader