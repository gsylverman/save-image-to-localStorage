import React, { useState } from 'react';

function App() {
  const [file] = useState(localStorage.getItem("poza"));
  const [changed, setChanged] = useState(false);

  const changeFile = (e) => {

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = e => {
      localStorage.setItem("poza", e.target.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    setChanged(!changed);
  };

  return (
    <div className="App">
      <div>
        {file ? <img src={file} style={{ width: "200px" }} alt="sa" /> : null}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={changeFile} />
        <input type="submit" value="send" />
      </form>

    </div>
  );
}

export default App;
