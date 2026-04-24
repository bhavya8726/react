function Hello() {
    return (
        <div style={{
            backgroundColor: 'lightblue',
            padding: '20px',
            borderRadius: '10px',
        }}>
            <h1 style={{color:'red'}}>Hello React....</h1> </div>
    )
}
function App() {
    return (
        <div> 
            <Hello />
        </div>
    )
}
export default App;