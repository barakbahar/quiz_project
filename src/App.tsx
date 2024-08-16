import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import JoinLobby from "./JoinLobby";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join-lobby/:name" element={<JoinLobby />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
