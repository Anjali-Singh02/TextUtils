import React, { useState } from 'react';

export default function TextForm(props) {
const handleUpOnClick = () => {
  
  let newText = text.toUpperCase();
  setText(newText);
  
}
const handleLowOnClick = () => { 
  let newText = text.toLowerCase();
  setText(newText); 
}



function capitalizeText() {
  // Capitalize the first letter of the text
  let capitalizedtext = text.charAt(0).toUpperCase() + text.slice(1);
  
  // Capitalize the first letter after a period
  capitalizedtext = capitalizedtext.replace(/(\.|\?|\!)\s*(\w)/g, function(match, p1, p2) {
    return p1 + ' ' + p2.toUpperCase();
  });
 setText(capitalizedtext);
}


const capitalizeFirstLetter = () => {
   let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   setText(newText);
   
  }
  const handleClear = () => {
   let newText = '';
   setText(newText);
   
  }
  const handleRead = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  }

  
//***************** TEXT BOX FUNCTION ******************
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value)
  }
  const [text, setText] = useState("")
  // setText("new text")
  return (
    <div>
        <div className="container ">
  <label htmlFor="text" className="form-label fw-bold fs-5 my- 3">{props.label}</label>
  <textarea className="form-control border-4 my-3" value={text} placeHolder= "Enter Text Here..."onChange={handleOnChange} id="text" rows="7" />
  <div className="buttons">  
  <button type="button" onClick={handleUpOnClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
  <button type="button" onClick={handleLowOnClick} className="btn btn-info mx-1 text-white">Convert to LowerCase</button>
  <button type="button" onClick={capitalizeText} className="btn btn-secondary mx-1 text-white ">First letter Caps</button>
  <button type="button" onClick={capitalizeFirstLetter} className="btn btn-secondary mx-1 text-white ">Convert in Title Form</button>
  <button type="button" onClick={handleRead} className="btn btn-secondary mx-1 text-white ">Read Text</button>
  <button type="button" onClick={handleClear} className="btn btn-secondary mx-1 text-white ">Clear Text</button>
  </div>
</div>

    <div className='container my-3'>
      <h2>Your Text Summary</h2>
      <p className='fw-bold'>{text.split(" ").length - 1} word {text.length} characters</p>
      <p>{0.008*text.split(" ").length}</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </div>
  )
}
