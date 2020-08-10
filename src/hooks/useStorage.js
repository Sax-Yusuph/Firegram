import { useState, useEffect } from "react";
import { appStorage, appFirestore, timestamp } from "../config/firebase";

const useStorage = (file, userId) => {
  const [progress, setprogress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let storageRef = appStorage.ref(file.name);
    let collectionRef = appFirestore.collection("images")
    storageRef.put(file).on("state_changed", (snap) => {
        let bytesTransferred = snap.bytesTransferred;
        let totalBytes = snap.totalBytes;
        let percentage = (bytesTransferred / totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        if (err) setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp()
        collectionRef.add({url, createdAt, userId})
        setUrl(url);
      }
    );
  }, [file, userId]);
  return {
    progress,
    url,
    error,
  };
};

export default useStorage;
