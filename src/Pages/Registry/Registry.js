import React , {useEffect} from 'react'
import LoginHeader from '../../Components/Header/LoginHeader'
import profileImg from '../../assets/images/profileImg2x.png'
import plusIcon from '../../assets/images/icons/plusIcon.svg'
import { AiFillLock } from 'react-icons/ai';
import img from '../../assets/images/p_cradimg.png'
import { Col, Row } from 'react-bootstrap';

function Registry() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
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
                        </div>
                        <div className='p_card2 py-3 mt-4'>
                            <h3 className='para1 username text-white'>Adoption Registry</h3>
                        </div>
                    </div>
                    <div className='pl_child2'>
                        <div className='pb-4'>
                            {/* card start */}
                            <div className='p_card r_pcard'>
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
                                <div className='p_card_child3 pc_child r_pcard_child3'>
                                    <p>
                                        Username says, "Lorem Ipsum is simply dummy text of the printing and types etting industry" <a href="/" className='text_gold'>See More</a>
                                    </p>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <div className='price_continer desk-price_continer'>
                                            <h3 className='price_info'>$50</h3>
                                            <p className='price_text'>estimaded cost</p>
                                        </div>
                                        <button className='button2 w-100'>purchase</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className='p_card mt-4 r_pcard'>
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
                                <div className='p_card_child3 pc_child r_pcard_child3'>
                                    <p>
                                        Username says, "Lorem Ipsum is simply dummy text of the printing and types etting industry" <a href="/" className='text_gold'>See More</a>
                                    </p>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <div className='price_continer desk-price_continer'>
                                            <h3 className='price_info'>$50</h3>
                                            <p className='price_text'>estimaded cost</p>
                                        </div>
                                        <button className='button2 w-100'>purchase</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className='p_card mt-4 r_pcard'>
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
                                <div className='p_card_child3 pc_child r_pcard_child3'>
                                    <p>
                                        Username says, "Lorem Ipsum is simply dummy text of the printing and types etting industry" <a href="/" className='text_gold'>See More</a>
                                    </p>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <div className='price_continer desk-price_continer'>
                                            <h3 className='price_info'>$50</h3>
                                            <p className='price_text'>estimaded cost</p>
                                        </div>
                                        <button className='button2 w-100'>purchase</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className='p_card mt-4 r_pcard'>
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
                                <div className='p_card_child3 pc_child r_pcard_child3'>
                                    <p>
                                        Username says, "Lorem Ipsum is simply dummy text of the printing and types etting industry" <a href="/" className='text_gold'>See More</a>
                                    </p>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <div className='price_continer desk-price_continer'>
                                            <h3 className='price_info'>$50</h3>
                                            <p className='price_text'>estimaded cost</p>
                                        </div>
                                        <button className='button2 w-100'>purchase</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            {/* card start */}
                            <div className='p_card mt-4 r_pcard'>
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
                                <div className='p_card_child3 pc_child r_pcard_child3'>
                                    <p>
                                        Username says, "Lorem Ipsum is simply dummy text of the printing and types etting industry" <a href="/" className='text_gold'>See More</a>
                                    </p>
                                </div>
                                <div className='p_card_child4 pc_child'>
                                    <div className='pc_btn_container'>
                                        <div className='price_continer desk-price_continer'>
                                            <h3 className='price_info'>$50</h3>
                                            <p className='price_text'>estimaded cost</p>
                                        </div>
                                        <button className='button2 w-100'>purchase</button>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                            <div className='mt-4 text-center text-md-end'>
                                <button className='button2'>add service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registry