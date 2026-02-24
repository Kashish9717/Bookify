import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AllPages.css"
import { useFirebase } from '../Context/FireBaseP';
import { useEffect, useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import Logout from './Logout';

function Login() {

// =================================================================================================

     const firebase = useFirebase();
  
     console.log(firebase);
  

        const[email, setemail] = useState("");
        const[password, setpassword] = useState("");


// =================================================================================================
            // DETECT 
console.log(firebase);    //isLoggedin true{mtlb user hai} if true use useEffect taki page show na hoye login wala{mount hojaye}

const navigate = useNavigate();    //Created Object for Naviagte/instace

// =================================================================================================
// Removed automatic navigation so logout can appear on same page
useEffect(() => {
    if(firebase.isLoggedIn){
        navigate("/")
    }
} , [ firebase.isLoggedIn, navigate])

// =================================================================================================

// Submit Function
  const handelsubmit = async (e) => {
    e.preventDefault();
   console.log("User Logging In")
   try {
       const LoginResult =  await firebase.signinUserwithEmail(email, password)
       console.log("Successfully Logged In.....", LoginResult)
       alert('Login Successful!')
   } catch (err) {
       console.error(err);
       alert('Login Failed! Please check your credentials.')
   }
  }

// =================================================================================================

  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      
      <div className="p-5 rounded shadow bg-black text-light" style={{ width: "420px", border: "2px solid #ffc107" }}>
        
        <h2 className="text-center text-warning mb-4 fw-bold"> Login </h2>

        {/* Show Login Form only if user is not logged in */}
        {!firebase.isLoggedIn && (
        <Form onSubmit={handelsubmit}>

          <Form.Group className="mb-3">
            <Form.Label className="text-warning">Email address</Form.Label>
            <Form.Control
             onChange={e=> setemail(e.target.value)}  
             value={email}
              type="email"
              placeholder="Enter email" 
              className="bg-dark text-light border-warning"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-warning">Password</Form.Label>
            <Form.Control
            onChange={e => setpassword(e.target.value)} 
            value={password}
              type="password"
              placeholder="Password"
              className="bg-dark text-light border-warning"
            />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            className="w-100 fw-bold"
          >
            Login
          </Button>

        </Form>
        )}

<div className="mt-4">

  {/* Show Google Login and Register only if not logged in */}
  {!firebase.isLoggedIn ? (
    <>
      {/* Divider Text */}
      <h5 className="text-center text-secondary mb-4">
        — OR —
      </h5>

      {/* Google Button Center */}
      <div className="d-flex justify-content-center">
        <Button onClick={ firebase.signinWithGoogle} variant="light" className="px-4 fw-semibold">
          Sign in with Google
        </Button>
      </div>
 
       {/* Register Link */}
        <p className="text-center mt-4 text-secondary">
          Don't have an account?{" "}
          <Link to="/register" className="text-warning fw-semibold" style={{ cursor: "pointer" }}>
            Register
          </Link>
        </p>
    </>
  ) : (
    // Show Logout if user is logged in
    <Logout />
  )}
</div>

      </div>

    </div>
  );
}

export default Login;
