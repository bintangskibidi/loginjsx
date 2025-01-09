import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/register.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");                              
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    // try catch untuk memastikan trjdi kesalahan
    try {
      // library opensource yg digunkan untuk request data melalui http
      await axios.post(
        "http://localhost:2026/api/user/register",
        {
          email: email,
          password: password,
        }
        // headers berikut berfungs untuk method yg hanya diakses oleh admin
      );
      // Sweet alert
      Swal.fire({
        icon: "success",
        title: "Berhasil Login!!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/lending");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <body className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
        <h3>Login</h3>
        <form onSubmit={login} method="POST">
          <br />
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <br />

          <button type="submit">Login</button>
          <p>
            {" "}
            Belum punya akun?
            <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </body>
  );
}