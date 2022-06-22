import { useState } from "react";
import "../Admin-Login/Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handelLoginClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3009/login", login).then((res) => {
      alert(res.data.message);
    });
  };
  return (
    <>
      {console.log(login)}
      <div className="col-sm-12 d-flex container mt-2">
        <div className="col-sm-7"></div>
        <div className="col-sm-5 login-wrapper">
          <h1 className="d-flex justify-content-center">Login</h1>
          <div className="card">
            <form>
              <div className="mb-3 lcard-body">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={login.email}
                  onChange={handelChange}
                />
              </div>
              <div className="mb-3 lcard-body">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={login.password}
                  onChange={handelChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={handelLoginClick}
                >
                  Log In
                </button>
              </div>
              <div>
                <h6 className="d-flex justify-content-center mt-4">
                  Dont have account &nbsp;&nbsp;
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Register Here
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
