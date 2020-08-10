import { useState, useEffect } from "react";
import { appFirestore } from "../config/firebase";

const UseFirestore = (collection, currentUserId) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    appFirestore
      .collection(collection)
      .where("userId", "==", currentUserId)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
  }, [collection, currentUserId]);
  return { docs };
};

export default UseFirestore;
