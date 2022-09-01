import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
        
    )
}
