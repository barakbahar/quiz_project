function Home() {
  const sendToJoinLobbyPage = () => {};
  return (
    <div className="menu">
      <h1>Quiz Project</h1>
      <button onClick={sendToJoinLobbyPage}>Join Lobby</button>
      <br></br>
      <button>Create Lobby</button>
    </div>
  );
}

export default Home;
