/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import LoadingPage from "./LoadingPage";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [confirmpassErr, setConfirmPassErr] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [err, setErr] = useState(false);

  useEffect(() => {
    if (email.length > 0) {
      emailRegex.test(email) === true ? setEmailErr(false) : setEmailErr(true);
    }
  }, [email]);

  useEffect(() => {
    if (pass.length > 0) {
      passwordRegex.test(pass) === true ? setPassErr(false) : setPassErr(true);
    }
  }, [pass]);

  useEffect(() => {
    if (confirmPass.length > 0) {
      pass === confirmPass ? setConfirmPassErr(false) : setConfirmPassErr(true);
    }
  }, [confirmPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      emailErr === false &&
      passErr === false &&
      confirmpassErr === false
    ) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(res.user);
        navigate("/home");
      } catch (error) {
        setErr(true);
        console.log("catch")
      }
    } else {
      setErr(true);
      console.log("else")
      console.log(emailErr)
      console.log(passErr)
      console.log(confirmpassErr)
    }
  };

  return (
    <>
      <LoadingPage />

      <div className="register">
        { err && ( <div className="err"> something went wrong </div> ) }
        <div className="border"></div>
        <h2> Quize app </h2>
        <div className="login_google_facebook">
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className={emailErr ? "error" : ""}
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="off"
          />
          <input
            className={passErr ? "error" : " "}
            type="Password"
            placeholder="Password"
            required
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          <input
            className={confirmpassErr ? "error" : " "}
            type="Password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
          <button> Signup </button>
        </form>
        <h3>
          Have an account? <Link to="/"> Login </Link>{" "}
        </h3>
      </div>
    </>
  );
};

export default Register;
