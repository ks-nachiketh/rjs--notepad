import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {updateText} from '../store/textSlice'

import Button from "../components/button/Button";
import "./navbar.css";
import Icon from "../components/icons/Icons";

export default function Navbar() {


  // get content from  text area
  const content = useSelector((state) => state.text.content);
  const dispatch = useDispatch()

  // use a reaference variable to update
  const fileInputRef = useRef(null);

  return (
    <div className="navbar">
      <label className="title">Notepad</label>

      <div className="navbar-buttons-core">
        
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e)=>handleOpen(e, dispatch)}
          accept=".txt"
        />

        <Button
          name={"open"}
          onClick={() => fileInputRef.current.click()}
          css={{padding: "2px", borderRadius: "2px" }}
          children={<Icon imgPath="/folder.png" />}
        />

        <Button
          name={"save"}
          onClick={() => handleSave(content)}
          css={{padding: "2px",borderRadius: "2px"}}
          children={<Icon imgPath="/diskette.png" />}
        />
      </div>
    </div>
  );
}

function handleSave(content) {
  //A Blob represents immutable raw data — data that doesn't change.
  // You can think of it as a container for files like text, images,
  // or binary data that you want to save, download, or send.
  const blob = new Blob([content], { type: "text/plain" });

  // Creating a new anchor tag element
  const link = document.createElement("a");

  // Download the anchor as txt
  link.download = "note.txt";

  // link the url to page
  link.href = URL.createObjectURL(blob);

  // When link is clicked, instead of redirecting,
  // downloads using link.download and sets file name as note.txt
  link.click();
}

function handleOpen(e, dispatch) {

  //file is the selected file from event handler or click
    const file = e.target.files[0];

    // If no file selected return null
    if (!file) return;

    // create new file reader object
    const reader = new FileReader();

    // When the file is loaded, do somethin with its contents
    reader.onload = (e) => dispatch(updateText(e.target.result));

    // Read inside contents as text
    reader.readAsText(file);
}
