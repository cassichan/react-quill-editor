import Editor from "./components/Editor.jsx";
import "./App.css";
import { Quill } from "react-quill";
import {Component} from "react"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
      </div>
    );
  }
}

export default App;
