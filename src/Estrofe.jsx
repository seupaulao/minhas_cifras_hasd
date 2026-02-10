
function Estrofe({ versos }) {
  return (
    <div style={{ marginBottom: "30px", fontSize: "18px" }}>
      {versos.map((verso, index) => (
        <p key={index}>{verso}</p>
      ))}
    </div>
  );
}

export default Estrofe