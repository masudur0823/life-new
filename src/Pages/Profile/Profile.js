import React from 'react'
import LoginHeader from '../../Components/Header/LoginHeader'
import profileImg from '../../assets/images/profileImg2x.png'
import plusIcon from '../../assets/images/icons/plusIcon.svg'
import { AiFillLock } from 'react-icons/ai';
import img from '../../assets/images/p_cradimg.png'
import { Col, Row } from 'react-bootstrap';
import filterIcon from '../../assets/images/icons/filter.svg'
import edit_gold from '../../assets/images/icons/edit_gold.svg'
import edit_white from '../../assets/images/icons/edit_white.svg'

function Profile() {
    return (
        <div className='img_overlay'>
            <LoginHeader />
            <div className='profile_container mt-4'>
                <div className='p_layout'>
                    <div className='pl_child1'>
                        <div className='p_card1'>
                            <div className='position-relative d-inline'>
                                <img src={profileImg} className="p_profileImg" alt="" />
                                <img src={plusIcon} className="plusIcon" alt="" />
                            </div>

                            <h3 className='para1 username'>Hi, Name!</h3>

                            <p className='para2 mt-3 text-center text_gold op_1'>
                                <AiFillLock className='AiFillLock' /><b>Your Registry is Hidden</b>
                            </p>

                            <div>
                                <button className='button1'>account settings</button>
                            </div>
                            <img src={edit_gold} className="edit_gold" alt="" />
                        </div>
                        <div className='p_card2 mt-4'>
                            <h3 className='para1 username text-white'>Adoption Registry</h3>
                            <div className='phn-none'>
                                <button className='button3'>Edit registry</button>
                            </div>
                            <img src={edit_white} className="edit_white" alt="" />
                        </div>
                    </div>
                    <div className='pl_child2'>
                        <div className='select_area'>
                            <div className='mobile-none'>
                                <select name="" id="" className='input_field select'>
                                    <option value="">Services: All</option>
                                    <option value="">Services: All1</option>
                                    <option value="">Services: All2</option>
                                    <option value="">Services: All3</option>
                                </select>
                                <select name="" id="" className='input_field select ms-3'>
                                    <option value="">List by: Relevance</option>
                                    <option value="">List by: Relevance1</option>
                                    <option value="">List by: Relevance2</option>
                                    <option value="">List by: Relevance3</option>
                                </select>
                            </div>
                            <div className='desktop-none'>
                                <div className='filter_main'>
                                    <img src={filterIcon} alt="" />
                                    <span className='para1 ms-2'><b>Filter</b></span>
                                </div>
                            </div>
                            <button className='button2'>add service</button>
                        </div>
                        <div className='py-4'>
                            {/* card start */}
                            <div className='p_card mt-4'>
                                <div className='p_card_child1 pc_child'>
                                    <img src={img} className="p_c_img" alt="" />
                                    <div className='price_continer phn-price_continer'>
                                        <h3 className='price_info'>$50</h3>
                                        <p className='price_text'>estimaded cost</p>
                                    </div>
                                </div>
                                <div className='p_card_child2 pc_child'>
                                    <div>
                                        <h4 className='pc_title'>Registry Service title</h4>
                                        <p className='star_text'>5.0 <span className='p_para1'>(34 ratings)</span></p>
                                        <Row>
                                            <Col xl="6">
                                                <div>
                                                    <p className='p_para1 p_op1'>Offers remote services</p>
                                                    <p className='p_para1 p_op2'>Los Angeles, CA</p>
                                                </div>
                                            </Col>
                                            <Col xl="6">
                                                <div>
                                                    <p className='p_para1 p_op3'>Online now</p>
                                                    <p className='p_para1 p_op4'>Responds in about 1hr</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className='p_card_child3 pc_child'>
                                    <div className='price_continer desk-price_continer'>
                                        <h3 className='price_info'>$50</h3>
                                        <p className='price_text'>estimaded cost</p>
                                    </div>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <button className='button2 w-100'>edit service</button>
                                        <button className='button1 deleteBtn w-100'>delete</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className='p_card mt-4'>
                                <div className='p_card_child1 pc_child'>
                                    <img src={img} className="p_c_img" alt="" />
                                    <div className='price_continer phn-price_continer'>
                                        <h3 className='price_info'>$50</h3>
                                        <p className='price_text'>estimaded cost</p>
                                    </div>
                                </div>
                                <div className='p_card_child2 pc_child'>
                                    <div>
                                        <h4 className='pc_title'>Registry Service title</h4>
                                        <p className='star_text'>5.0 <span className='p_para1'>(34 ratings)</span></p>
                                        <Row>
                                            <Col xl="6">
                                                <div>
                                                    <p className='p_para1 p_op1'>Offers remote services</p>
                                                    <p className='p_para1 p_op2'>Los Angeles, CA</p>
                                                </div>
                                            </Col>
                                            <Col xl="6">
                                                <div>
                                                    <p className='p_para1 p_op3'>Online now</p>
                                                    <p className='p_para1 p_op4'>Responds in about 1hr</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className='p_card_child3 pc_child'>
                                    <div className='price_continer desk-price_continer'>
                                        <h3 className='price_info'>$50</h3>
                                        <p className='price_text'>estimaded cost</p>
                                    </div>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <button className='button2 w-100'>edit service</button>
                                        <button className='button1 deleteBtn w-100'>delete</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile