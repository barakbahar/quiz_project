import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function JoinLobby() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const name = useParams().name;

  const onClickSubmit = () => {
    axios
      .post("http://10.100.102.21:3000/", data)
      .then((response) => {
        console.log("Posted data:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          setError(
            "Response error: " +
              error.response.data +
              "Response status: " +
              error.response.status +
              "Response headers:" +
              error.response.headers
          );
        } else if (error.request) {
          // The request was made but no response was received
          setError("Request error:" + error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          setError("Error message:" + error.message);
        }
      });
  };

  return (
    <div className="menu">
      <h1>Join Lobby</h1>
      <input
        type="text"
        name="LobbyCode"
        placeholder="Insert Code Here"
        onChange={(event) => {
          setData({ name: name, code: event.target.value });
        }}
      />
      <br />
      <br />
      <button onClick={onClickSubmit}>Submit</button>
      {error != "" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default JoinLobby;
