import { Link, useNavigate } from "react-router-dom"
import LoadingPage from "./LoadingPage"
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [pass, setPass]   = useState("");
  const [err, setErr] = useState(false)


   const handleSubmit = async (e)=>{
      e.preventDefault()
    
      try {
        await signInWithEmailAndPassword(auth, email, pass);
        console.log("hi")
        navigate("/home");
      } catch (err) {
        setErr(true);
      }
    };

   

  return (
  <>
      <LoadingPage />
      <div className="register">
      { err && ( <div className="err" > Something went wrong </div> ) }
        <div className="border"></div>
      <h2> Quize app </h2>
      <div className="login_google_facebook">
        <i className="fa-brands fa-google-plus-g"></i>
        <i className="fa-brands fa-facebook-f"></i>
      </div>
      <form onSubmit={handleSubmit}  >
        <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
        <input type="Password" placeholder="Password" onChange={(e)=> setPass(e.target.value)}  />
        <button> Login </button>
      </form>
      <h3>
        Did not have an account? <Link to="/register"> Create One </Link>{" "}
      </h3>
    </div>
  </>
  )
}

export default Login