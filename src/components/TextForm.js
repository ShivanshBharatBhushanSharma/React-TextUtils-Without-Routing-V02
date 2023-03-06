import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleCapClick = () => {
        const words = text.split(" ");
        
        for (let i=0; i<words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        setText(words.join(" "));
        props.showAlert("Converted to Captializedcase!", "success")
    }

    const handleRemoveClick = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!", "success")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleClearClick = () => {
        const newText = '';
        setText(newText);
        props.showAlert("Text Clear!", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On Change Event Trigger");
        setText(event.target.value);
    }

    
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color : props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to Captialized case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0 }).length} Minutues read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
