import React from "react";
import logo from "../../assets/images/login_logo.png";

function Login() {
  return (
    <div className="login_area">
      <div className="login_box">
        <img src={logo} className="login_logo" alt="" />
        <div className="p-3"></div>

        <form action="">
          <div className="mb-4">
            <label htmlFor="" className="input_label">
              Email Address
            </label>
            <input type="text" className="input_field w-100" />
          </div>

          <div>
            <label htmlFor="" className="input_label">
              Password
            </label>
            <input type="password" className="input_field w-100" />
          </div>

          <p className="input_label mt-3">Forgot password?</p>

          <div className="mt-4">
          <button className="button2 rounded-3 px-4 px-md-5">Login</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Login;
