import React, { createContext, useState } from "react";

export const FileContext = createContext();

export default function FileContextProvider({ children }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const imgTypes = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
      let selectedFile = e.target.files[0];
      if (selectedFile && imgTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError("");
        console.log(selectedFile);
      } else {
        setError("Please upload an image file (png | jpeg | gif).");
      }
    
  };

  return (
    <FileContext.Provider
      value={{ file, setFile, error, setError, handleChange }}
    >
      {children}
    </FileContext.Provider>
  );
}
