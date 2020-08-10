import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Title from "../Title";
import ImageGrid from "../ImageGrid";
import Modal from "../Modal";
import Nav from "../Nav";
import ErrorModal from "../ErrorModal";
import { FileContext } from "../../auth/fileContext";
import ProgressBar from "../Progress";

function Dashboard() {
  const { file, error } = useContext(FileContext);
  const [selectedImg, setSelectedImg] = useState(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.body.classList.add("dashboard");
    return () => {
      document.body.classList.remove("dashboard");
    };
  }, []);

  return (
    <div id="wrapper">
      <Title />
      <div className="output">
        {error && <ErrorModal/>}
        {file && <h4 className="filename mb-2 text-center">{file.name}</h4>}
        {file && <ProgressBar />}
      </div>
      <Nav />
      <motion.div
        initial={{ y: "190vh", opacity: 0 }}
        transition={{delay: 1}}
        animate={{ y: 0, opacity: 3 }}
        id="main"
      >
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </motion.div>
      <footer id="footer">
        <p className="copyright">
          Copyright &copy; {currentYear} All rights reserved | Built with love
          by Sax-Yusuph.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
