import React, { useContext } from "react";
import ProgressBar from "./Progress";
import { FileContext } from "../auth/fileContext";

export const FileUpload = () => {
  const { handleChange } = useContext(FileContext);
  return (
    <form>
      <label id="file">
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
    </form>
  );
};


