import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(event);

    try {
      fetch("http://localhost:8080/auth/login", {
        body: JSON.stringify(user),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.token) {
            localStorage.setItem("token", response.token);
            navigate("/dashboard");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(text) =>
                setUser({ ...user, email: text.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(text) =>
                setUser({ ...user, password: text.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
