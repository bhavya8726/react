import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div style={styles.app}>
            <h1>Counter App</h1>
            <p style={styles.card}>{count}</p>
            <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

function App(){
    return(
        <div>
            <Counter/>

           
        </div>
    )
}
 const styles = {
    app: {
        backgroundColor: "#ef2a2a",
        display: "inline-block",
        flexDirection: "column"
    },
    card: {
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        color:'blue',
        padding: "10px",
        margin: "10px",
        fontSize: "24px",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        margin: "10px",
        width: "150px",
        height: "50px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
    }
 }
export default App;