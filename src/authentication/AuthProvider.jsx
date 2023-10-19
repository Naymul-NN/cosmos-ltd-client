 

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

 export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
       setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password)=>{
       setLoading(true);
       return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin =(provider)=>{
      return signInWithPopup(auth,provider)
   
      }

      const logOut = () =>{
         setLoading(true)
         signOut(auth)
        }

        
      useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)
          setLoading(false)
        })
        return  () =>{
          unSubscribe()
        }
     },[])

    const authinfo={
       user,
       loading,
       createUser,
       userLogin,
       googleLogin,
       logOut
    }
    
    return (
        <AuthContext.Provider value={authinfo}>
         { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;