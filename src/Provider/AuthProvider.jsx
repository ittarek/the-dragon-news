import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader ,setLoader] = useState(true)

 
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loggedOut = () => {
    setLoader(true)
    signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged isn user inside auth state ", loggedUser);
      setUser(loggedUser);
      setLoader(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = { user, createUser, createLogin,loggedOut,loader };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
