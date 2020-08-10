import React, { useEffect, useContext } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
import { AuthContext } from "../auth/authContext";
import { FileContext } from "../auth/fileContext";

const ProgressBar = () => {
  const {file, setFile, setError} = useContext(FileContext)
  const { currentUser } = useContext(AuthContext)
  const { progress, url, error } = useStorage(file, currentUser.uid);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
    if(error){
      setError(error)
      setFile(null)
    }
  }, [url, setFile, error, setError]);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className="progress-bar"
    ></motion.div>
  );
};

export default ProgressBar;
