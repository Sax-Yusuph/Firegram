import React, { createContext, useState, useEffect } from "react";
import { appAuth, appFirestore } from "../config/firebase";
import { motion } from "framer-motion";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    appAuth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userRef = appFirestore.doc(`users/${user.uid}`);
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
          const { email, displayName, photoURL } = user;
          try {
            await userRef.set({
              displayName,
              email,
              photoURL,
            });
            
          } catch (error) {
            console.error("Error creating user document", error);
          }
        }
      }
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{delay: 0.5}}
        className="loading-page"
      >
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <h2>loading Firegram</h2>
        <h4>please wait...</h4>
      </motion.div>
    );
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
