import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import TodoInput from "./Components/TodoInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TodoInput />
    </div>
  );
}

export default App;
