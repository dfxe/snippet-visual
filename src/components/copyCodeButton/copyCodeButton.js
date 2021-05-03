import CopyImage from "../../images/copy-t.png";
import React, { useRef, useState } from "react";
import "./copyCodeButton.sass";

const CopyCodeButton = (props) => {
  const copiedTextRef = useRef(null);
  const [toastTextState, setToastTextState] = useState("");
  const showToast = (toastObject, message) => {
    let toggle = true;
    setToastTextState(message);
    toastObject.style.display = "block";

    const cc = setInterval(() => {
      if (!toggle) {
        toggle = true;
      } else {
        toastObject.style.display = "none";
        clearInterval(cc);
      }
    }, 1000);
  };
  const handleClick = () => {
    navigator.clipboard.writeText(props.projectContents.secondary.content);
    showToast(copiedTextRef.current, "Copied!");
  };

  return (
    <div id="copy-code-parent">
      <button id="copyCodeButton" onClick={() => handleClick()}>
        <img style={{ width: "4em", height: "4em" }} src={CopyImage}></img>
      </button>
      <p id="copied-text" ref={copiedTextRef}>
        {toastTextState}
      </p>
    </div>
  );
};

export default CopyCodeButton;
