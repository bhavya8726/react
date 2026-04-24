import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

const user = ["bhavya", "abc", "xyz"];
const password = [123];

function Login() {
    const { setuser } = useContext(authContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!name) {
            setError("enter username");
            return;
        }
        else if (!password) {
            setError("enter password");
            return;
        }


        const isvladid=user.includes(name.toLowerCase())
        const isvalid=password.includes(password)


        if(isvalid && isvladid)
        {
            setError("login successful");
            return;
        }
        else{
            setError("invalid username or password");
            return;
        }
        setError(" ");

    };


    return (
        <div>
            <h2 style={styles.Login}>login page</h2>
            <input type="text" placeholder="username" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />

            <button style={styles.btn} onClick={handleLogin}>
                Login
            </button>
            {error && <p> {error} </p>}
        </div>
    );
}
function Dashboard() {
    const [user,setUser]=useState();

    return (
        <div>
            <h2>Welcome {user}</h2>
            <button style={styles.btn} >Logout</button>
        </div>
    );

}





function App() {
    return (
        <authContext.Provider value="₹">
            <Login />
        </authContext.Provider>
    )
}


const styles = {
    Login: {
        textAlign: 'center',
        color: "blue",
        fontSize: "30px",
        backgroundColor: "lightgray",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "20px"
    },
    btn: {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
    }
};
export default App;