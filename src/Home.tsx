import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const onClickJoin = () => {
    if (name.trim() == "") {
      setError("You first need to enter name");
      return;
    }
    navigate(`/join-lobby/${name}`);
  };
  return (
    <div className="menu">
      <h1>Quiz Project</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setName(event.target.value);
          setError("");
        }}
      ></input>
      <br />
      <button onClick={onClickJoin}>Join Lobby</button>
      <button>Create Lobby</button>
      {error != "" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Home;
