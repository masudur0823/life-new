import React from "react";
import LoginHeader from "../../Components/Header/LoginHeader";
import profileImg from "../../assets/images/profileImg2x.png";
import plusIcon from "../../assets/images/icons/plusIcon.svg";
import { AiFillLock } from "react-icons/ai";
import img from "../../assets/images/p_cradimg.png";
import edit_gold from "../../assets/images/icons/edit_gold.svg";

const Card = () => {
  return (
    <>
      {/* card start */}
      <div className="d-flex align-items-center justify-content-between bg_layout1 flex-wrap mb-3 profile_card">
        <div className="d-flex flex-wrap align-items-center gap-3 profile_part">
          <img src={img} className="p_c_img" alt="" />
          <h4 className="pc_title">Adoption Registry</h4>
        </div>
        <div className="pc_btn_container">
          <button className="button2 w-100">view</button>
          <button className="button1 deleteBtn w-100">delete</button>
        </div>
      </div>
      {/* card end */}
    </>
  );
};

function Profile() {
  return (
    <div className="img_overlay">
      <LoginHeader />
      <div className="profile_container mt-4">
        <div className="p_layout">
          <div className="pl_child1">
            <div className="p_card1">
              <div className="position-relative d-inline">
                <img src={profileImg} className="p_profileImg" alt="" />
                <img src={plusIcon} className="plusIcon" alt="" />
              </div>

              <h3 className="para1 username">Hi, Name!</h3>

              <p className="para2 mt-3 text-center text_gold op_1">
                <AiFillLock className="AiFillLock" />
                <b>Your Registry is Hidden</b>
              </p>

              <div>
                <button className="button1">account settings</button>
              </div>
              <img src={edit_gold} className="edit_gold" alt="" />
            </div>
          </div>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
