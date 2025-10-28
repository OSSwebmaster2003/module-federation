const HelloRemote = () => {
  return (
    <div
      style={{
        padding: 20,
        border: "2px solid #61dafb",
        borderRadius: 12,
        background: "#f0f9ff",
        textAlign: "center",
      }}
    >
      <h2>Hello from React Remote App ⚛️</h2>
      <p>This component is exposed via Module Federation.</p>
    </div>
  );
};

export default HelloRemote;
