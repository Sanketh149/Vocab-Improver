import "./App.css";
import { Vocab } from "./vocabList";

function App() {
  const randomNum = Math.floor(Math.random() * Math.floor(Vocab.length));
  return (
    <div className="App">
      <div>
        <h1>Word ➡️ Meaning</h1>
        <h2>{Vocab[randomNum].FIELD1}</h2>
        <h3>{Vocab[randomNum].FIELD2}</h3>
      </div>
    </div>
  );
}

export default App;
