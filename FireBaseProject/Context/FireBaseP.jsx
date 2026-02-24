// React se context related hooks import kar rahe hai
// createContext → Global data store banane ke liye
// useContext → Context data ko access karne ke liye
import { createContext, useContext, useState , useEffect } from "react";

// Firebase SDK se function import => initializeApp → Firebase project ko React app se connect karne ke liye
import { initializeApp } from "firebase/app";

//Authntication by email  and Google
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, onAuthStateChanged , signOut} from "firebase/auth";



// 🔥 Context create karte hai taaki Firebase data ko globally share kar sake
// Agar context nahi use karenge to har component me props se Firebase bhejna padega (prop drilling problem)
const FireBaseContext = createContext(null);    // null default value rakhi hai kyuki starting me koi data nahi hai


// 🔥 Custom Hook banaya hai
// Iska fayda → Code short ho jata hai + clean ho jata hai
// Ab components me sirf useFirebase() likhenge
// Baar baar useContext(FireBaseContext) nahi likhna padega
export const useFirebase = () => useContext(FireBaseContext);


// 🔥 Firebase Configuration Object
const firebaseConfig = {
  apiKey: "AIzaSyB0GnDdn6_4TA5UWUky1S_RGGOFipVMHog",
  authDomain: "bookify-ca2c0.firebaseapp.com",
  projectId: "bookify-ca2c0",
  storageBucket: "bookify-ca2c0.firebasestorage.app",
  messagingSenderId: "139809288684",
  appId: "1:139809288684:web:a2f165b3c21241396850c9"
};

// --------------------------------------------------------------------------------------
    //                              Instance
// 🔥 Firebase App Initialize
// Is step me React app Firebase se connect hota hai
const Firebaseapp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(Firebaseapp);

const googleProvider =  new GoogleAuthProvider();

// --------------------------------------------------------------------------------------

// 🔥 Provider Component
// Yeh component Firebase data ko sab components tak bhejne ka kaam karta hai
export const FirebaseProvider = (props) => {
   // value = Yaha tum Firebase related sab data pass kar sakte ho
    // Example:
    // Firebase app instance  // Authentication functions  // Database functions  // Storage functions

// ------------------------------------------------------------------------------------------

//  DETECT  =>  useEffect me check krege user login h or not

 const [ user, setUser] = useState(null);

 useEffect (() => {
    onAuthStateChanged(firebaseAuth, user => {  //user => Callback function
  console.log("User :" , user);   //abi login kri id show hogi => now track krne k lie make useState
   console.log("Checking user is here or not")
 if(user)  setUser(user);
 else setUser(null);

 })
    }, [])     

    const isLoggedIn = !!user; 

// ------------------------------------------------------------------------------------------

//  Authenctication Function for Signin

const signupUserwithEmail = (email, password) =>
     createUserWithEmailAndPassword(firebaseAuth, email, password)


const signinUserwithEmail = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password)

const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

// ------------------------------------------------------------------------------------------

// LOGOUT 
 
  // Logout function
 const handleLogout = async () => {
    try {
      await signOut(firebaseAuth);
      alert("Logged out successfully!");
    } catch (err) {
      console.error(err);
    }
  };

 
// -----------------------------------------------------------------------------------------



    return (
        
        <FireBaseContext.Provider value={{ signupUserwithEmail , signinUserwithEmail , signinWithGoogle , isLoggedIn , handleLogout }}>    {/* Now signupwithemail kisi v component me provide kr skte hai */}
           
            {/* 
            props.children ka matlab:
            Jo bhi components FirebaseProvider ke andar wrap honge
            Un sabko Firebase data mil jayega
            */}
            
            {props.children}

        </FireBaseContext.Provider>
    );
}
