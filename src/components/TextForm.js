import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpOnClick = () => {
    setText((val) => text.toUpperCase());
  };
  const handleLowOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  function capitalizeText() {
    // Capitalize the first letter of the text
    let capitalizedtext = text.charAt(0).toUpperCase() + text.slice(1);

    // Capitalize the first letter after a period
    capitalizedtext = capitalizedtext.replace(
      /(\.|\?|!)\s*(\w)/g,
      function (match, p1, p2) {
        return p1 + " " + p2.toUpperCase();
      }
    );
    setText(capitalizedtext);
  }

  const capitalizeFirstLetter = () => {
    handleLowOnClick();
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleRead = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  
  
  
  // // ********** Copy function
   const handleCopy = () => {
      navigator.clipboard.writeText(text);
    console.log("text copied",text)
    };

  //***************** TEXT BOX FUNCTION ******************
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  // setText("new text")
  return (
    <div>
      <div className="container">
</div>
      <div className="container ">
        <label htmlFor="text" className="form-label d-inline-flex justify-content-between fw-bold fs-5 my- 3">
          {props.label} 
        </label>
        <div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="copy-btn px-lg-5" onClick={handleCopy}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
        </svg> */}
          <textarea
            className="form-control border-4 my-3"
            value={text}
            placeholder="Enter Text Here..."
            onChange={handleOnChange}
            id="text"
            rows="7"
            
          />
          
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={handleUpOnClick}
            className="btn btn-primary mx-1"
          >
        
            Convert to UpperCase
          </button>
          <button
            type="button"
            onClick={handleLowOnClick}
            className="btn btn-info mx-1 text-white"
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            onClick={capitalizeText}
            className="btn btn-secondary mx-1 text-white "
          >
            First letter Caps
          </button>
          <button
            type="button"
            onClick={capitalizeFirstLetter}
            className="btn btn-secondary mx-1 text-white "
          >
            Convert in Title Form
          </button>
          <button
            type="button"
            onClick={handleRead}
            className="btn btn-secondary mx-1 text-white "
          >
            Read Text
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-secondary mx-1 text-white "
          >
            Clear Text
          </button>

{
/* 
          <div className="buttons">
      
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-secondary mx-1 text-white"
        >
          <FontAwesomeIcon icon={faCopy} className="me-1" />
          Copy Text
        </button>
      </div> */}
         
        </div>
      </div>

      <div className="container my-3 border-2-black">
        <h2>Your Text Summary</h2>
        <p className="fw-bold">
          {text.split(" ").length - 1} word {text.length} characters
        </p>
        <h3>Time stamp to read</h3>
        <p>{0.008 * text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
