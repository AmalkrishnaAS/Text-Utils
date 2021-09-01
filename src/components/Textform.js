import React,{useState} from "react";

export default function Textform(props) {
  const [text,setText]=useState('Enter text here')
  const handleupclick=()=>{
    console.log('uppercase');
    let newtext=text.toUpperCase()
    setText(newtext)
  }
  const handleloclick=()=>{
    console.log('uppercase');
    let newtext=text.toLowerCase()
    setText(newtext)
  }
  const handleclearclick=()=>{
    console.log('uppercase');
    let newtext=''
    setText(newtext)
  }
  const handleOnchange=()=>{
    console.log('onchange');
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value)
  }
  const handlecopy=()=>{
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?"white":"black"}}>
          <h1>{props.heading}</h1>
      <div className="mb-3" style={{color:props.mode==='dark'?"white":"black"}}>
        <textarea
          className="form-control"
          id="mybox"
          rows="8" value={text}
          onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?"gray":"white",color:props.mode==='dark'?"white":"black"}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button >
      <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to Lowercase</button >
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear All</button >
      <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy</button >
      </div>
      <div className="container my-3">
        <h1 style={{color:props.mode==='dark'?"white":"black"}}>Your text summary</h1>
        <p style={{color:props.mode==='dark'?"white":"black"}}>{text.length>0?text.split(" ").length:0} words and {text.length} characters</p>
        <p style={{color:props.mode==='dark'?"white":"black"}}>{text.length>0?0.008*text.split(" ").length:0} Minutes of Reading</p>
        <h2 style={{color:props.mode==='dark'?"white":"black"}}>Preview</h2>
        <p style={{color:props.mode==='dark'?"white":"black"}}>{text.length>0?text:'Start Typing....'}</p>
      </div>
    </>
  );
}
