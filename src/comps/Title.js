import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../auth/authContext";

const Title = () => {
  const { currentUser } = useContext(AuthContext);
  const photoURL = currentUser.photoURL

  const { displayName } = currentUser;
  const firstName = displayName.split(" ")[0];
  return (
    <motion.header
      initial={{ y: "-90vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{delay: 2}}
      id="header"
      className="alt"
    >
      <span className="logo">
        <img
          src={photoURL}
          alt={firstName}
          style={{ width: "78px", borderRadius: "50%" }}
        />
      </span>
      <h1>Welcome {firstName},</h1>
      <p>
        Here are your pictures, we've kept it for you <br />
        so you dont have to worry{" "}
      </p>
    </motion.header>
  );
};

export default Title;
