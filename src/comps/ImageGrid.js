import React, { useContext } from "react";
import UseFirestore from "../hooks/UseFirestore";
import { motion } from "framer-motion";
import illustration from "../images/photoShare.svg";
import { AuthContext } from "../auth/authContext";

export default function ImageGrid({ setSelectedImg }) {
  const { currentUser } = useContext(AuthContext);
  const { docs } = UseFirestore("images", currentUser.uid);

  return (
    <section id="content" className="main">
      {docs.length !== 0 ? (
        <div className="img-grid">
          {docs.map((doc) => (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}
              className="img-wrap"
              key={doc.id}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src={doc.url}
                alt="upload"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <motion.img
          initial={{opacity: 0, y: -5}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 2}}
            src={illustration}
            alt="illustration"
            style={{
              width: "320px",
              height: "320px",
              display: "block",
              margin: "auto",
            }}
          />
          <h2>
            Oops! you currently don't have memories yet.<br/> you can start by
            uploading them right here.
          </h2>
        </div>
      )}
    </section>
  );
}
