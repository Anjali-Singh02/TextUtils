import React, { useState } from 'react';

export default function TextForm(props) {
const handleUpOnClick = () => {
  // console.log("onClick");
  let newText = text.toUpperCase();
  setText(newText);
  
}
const handleLowOnClick = () => {
  // console.log("onClick");
  let newText = text.toLowerCase();
  setText(newText);
  
}
const handleCapsOnClick = () => {
  // console.log("onClick");
  let newText = text.charAt(0).toUpperCase() + text.slice(1);
  setText(newText);
}
const capitalizeFirstLetter = () => {
   let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   setText(newText);
  }
  
//***************** TEXT BOX FUNCTION ******************
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here")
  // setText("new text")
  return (
    <div>
        <div className="container mb-3 my-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold fs-5 my- 3">{props.label}</label>
  <textarea className="form-control border-4 my-3" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7" />
  <div className="buttons">  
  <button type="button" onClick={handleUpOnClick} className="btn btn-primary mx-3">Convert to UpperCase</button>
  <button type="button" onClick={handleLowOnClick} className="btn btn-info text-white">Convert to LowerCase</button>
  <button type="button" onClick={handleCapsOnClick} className="btn btn-secondary mx-2 text-white ">First letter Caps</button>
  <button type="button" onClick={capitalizeFirstLetter} className="btn btn-secondary mx-2 text-white ">Convert in Title Form</button>
  </div>
</div>
    </div>
  )
}
