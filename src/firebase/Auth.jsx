// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, getAuth, updateProfile,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import { useState,useEffect,useContext,createContext } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAyGLno4oBVChGoDpzW5uANi3Stoc64wE",
  authDomain: "e-commerce-29f2d.firebaseapp.com",
  projectId: "e-commerce-29f2d",
  storageBucket: "e-commerce-29f2d.appspot.com",
  messagingSenderId: "841483772527",
  appId: "1:841483772527:web:b1604becdd02aef8f5239a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const AuthContext=createContext(null);
const AuthProvider=({children})=>{
    const auth=useProvideAuth();
    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);
function useProvideAuth(){
    const [user,setUser]=useState();

    const signUp = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      updateProfile(user, { displayName });
      setUser(user);
      return user;
    });
    const signIn = (email, password) =>
      signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      setUser(user);
      return user;
    });
    const signOutUser = () => signOut(auth).then(() => setUser(null));
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          user ? setUser(user) : setUser(null);
    });
    
    return () => unsubscribe();
    });
    return {
        signIn,
        signUp,
        signOut: signOutUser,
        user,
    };
}
export default AuthProvider;