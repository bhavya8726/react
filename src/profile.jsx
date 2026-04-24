function Profile() {
  return (
    <div style={{
        background:"linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
        height:"auto",
        width:"400px",
        padding:"20px",
        margin:"auto",
        borderRadius:"10px",
    }}>
      <h2 style={{color:'grey'}}>👨‍💻This My Profile</h2>
      <p style={{margin:'10px'}}>Bhavya Nanda</p>
      <p style={{margin:'10px'}}>full stack developer</p>
      <p>📍Jamnagar</p>
      
    </div>
  );
}
function App() {
  return (
    <div>
        <Profile />
    </div>
  );
}



export default App;