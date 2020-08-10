import React, { useContext } from "react";
import { motion } from "framer-motion";
import { appAuth } from "../config/firebase";
import { FileContext } from "../auth/fileContext";

export default function Nav() {
  const { handleChange } = useContext(FileContext);
  return (
    <motion.nav
      id="nav"
      initial={{ y: "190vh", opacity: 0 }}
      transition={{ delay: 2 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="menu">
        <button className="button custom-button mr-2">
          <i class="fas fa-th mr-2"></i>
          <span>All Pictures</span>
        </button>
        <div className="upload">
          <input
            type="file"
            // name="file-1[]"
            id="file-1"
            className="inputfile inputfile-1"
            onChange={handleChange}
          />
          <label htmlFor="file-1">
            <i class="fas fa-upload mr-2"></i>
            <span>Add new picture &hellip;</span>
          </label>
        </div>
      </div>
      <button className="button primary ml-2" onClick={() => appAuth.signOut()}>
        <i class="fas fa-sign-out-alt mr-2"></i>
        <span>Log out</span>
      </button>
    </motion.nav>
  );
}
