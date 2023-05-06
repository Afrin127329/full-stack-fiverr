import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import newRequest from "../../utils/newRequest";
import "./Login.scss";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await newRequest.post("/auth/login", { username, password});
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={e => setPassword( e.target.value)}
        />
        <button type="submit">Login</button>
        <div style={{color: "gray"}}>Try username: seller & password: seller to visit the seller account.</div>
        <div style={{color: "gray"}}>Try username: buyer & password: buyer to visit the buyer account.</div>
        {error && error}
        {loading && <Loading type="bubbles" color="#013914" />}
      </form>
      
      
    </div>
  );
}

export default Login;
