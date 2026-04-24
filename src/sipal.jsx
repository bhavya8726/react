import { useState } from 'react';

function Simple() {
    const [count, setCount] = useState(0);

    let condition;
    if (count < 0) {
        condition = "Value is negative";
    }
    else if (count <= 5) {
        condition = "low";
    } else if (count > 5 && count <= 10) {
        condition = "medium";
    } else {
        condition = "high";
    }

    return (
        <div style={styles.app}>
            <h1>Simple Counter App</h1>
            <p style={styles.card}>{count}</p>
            <p style={styles.card}>{condition}</p>
            <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <Simple />
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
        color: 'blue',
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