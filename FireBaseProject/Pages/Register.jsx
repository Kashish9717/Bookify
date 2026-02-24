import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AllPages.css"
import { useFirebase } from '../Context/FireBaseP';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

// =================================================================================================

    // Using Context by useFirebase => now hame is fun ko get krna h to import useState{email,password} k lie
     const  firebase =  useFirebase();
     console.log(firebase);
  

    //  2 states => use in input feild
        const[email, setemail] = useState("");
        const[password, setpassword] = useState("");

// =================================================================================================
// Submit function made

const handelsubmit = async (e) => {
  e.preventDefault();

  await firebase.signupUserwithEmail(email, password);
};

// =================================================================================================

// Detcct 
 
const navigate = useNavigate();

useEffect(() => {
    if(firebase.isLoggedIn){
        // Naviagte to Home   => for this import hook { React router dom useNavigation}
  
        navigate("/")
    }
} , [ firebase.isLoggedIn, navigate]) 

// =================================================================================================

  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      
      <div className="p-5 rounded shadow bg-black text-light" style={{ width: "420px", border: "2px solid #ffc107" }}>
        
        <h2 className="text-center text-warning mb-4 fw-bold"> Register </h2>

        <Form onSubmit={handelsubmit}>

          <Form.Group className="mb-3">
            <Form.Label className="text-warning "  >Email address</Form.Label>
            <Form.Control
             onChange={e=> setemail(e.target.value)}  value={email}    //useState
              type="email"
              placeholder="Enter email" 
              className="bg-dark text-light border-warning"
            
            />
            <Form.Text className="text-secondary">
              We'll never share your email.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-warning">Password</Form.Label>
            <Form.Control
            onChange={e => setpassword(e.target.value)} value={password}   //useState
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
            Create Account
          </Button>

        </Form>

      </div>

    </div>
  );
}

export default Register;

