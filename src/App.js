import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light') // To enable light and dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#172445';
      showAlert("Dark Mode enabled.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled.", "success");
    }
    
  }
  return (
    <>
      <Navbar title="Text Modifier" aboutText = "About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
      <TextForm showAlert={showAlert} heading = "Enter the text here to modify.." mode={mode}/>
      </div>
    </>
  );
}

export default App;
