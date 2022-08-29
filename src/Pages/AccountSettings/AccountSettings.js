import React from "react";
import LoginHeader from "../../Components/Header/LoginHeader";
import profileImg from "../../assets/images/profileImg2x.png";
import plusIcon from "../../assets/images/icons/plusIcon.svg";
import { AiFillLock } from "react-icons/ai";
import pImg from "../../assets/images/accountS_profile_img.png";
import edit_gold from "../../assets/images/icons/edit_gold.svg";
import editIcon from "../../assets/images/icons/edit_dark.svg";

function AccountSettings() {
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
            <div className="bg_layout1 mb-4">
              <h4 className="title_one">Account Settings</h4>

              <form action="">
                <div className="text-center py-3 py-md-5">
                  <div className="change_profile">
                    <input type="file" name="" id="" className="c_input_file" />
                    <img src={pImg} className="ac_profile_img" alt="" />
                    <img src={editIcon} className="ac_profile_icon" alt="" />
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      First Name
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      Last Name
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="" className="input_label">
                      Email
                    </label>
                    <input type="email" className="input_field w-100" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="" className="input_label">
                      Phone Number Address
                    </label>
                    <input type="number" className="input_field w-100" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="" className="input_label">
                      Address
                    </label>
                    <input type="email" className="input_field w-100" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      City
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      State
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      Zip Code
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                </div>

                <h4 className="title_one mt-4 mt-md-5">Security</h4>
                
                <div className="row g-4 mt-2">
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      Password
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="input_label">
                      Re-enter Password
                    </label>
                    <input type="text" className="input_field w-100" />
                  </div>
                </div>

                <div className="mt-5">
                  <button className="button2 px-4 px-md-5">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
