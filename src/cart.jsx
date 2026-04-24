import React, { useState, useEffect, useContext, createContext } from "react";

const CurrencyContext = createContext();
function App() {
    return (
        <CurrencyContext.Provider value="₹">
            <Cart />
        </CurrencyContext.Provider>

    )
}
function Cart() {
    const currency = useContext(CurrencyContext);

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const product = [
        { id: 1, name: "Shoes", price: 1000 },
        { id: 2, name: "Shirt", price: 500 },
        { id: 3, name: "Jeans", price: 1500 }
    ];

    useEffect(() => {
        const sum = cart.reduce((acc, product) => acc + product.price, 0);
        setTotal(sum);
    }, [cart]);


    const Removeitem = (id) => {
        const newcart = cart.filter((_, i) => i !== id);
        setCart(newcart);

    }
    const clearcart = () => {
        setCart([]);
    };
    return (
        <div>
            <h2>🛒 Cart </h2>
            <p>Total: {currency}{total}</p>
            <div style={style.product}>
                {product.map((product) => (
                    <button key={product.id} style={style.btn} onClick={() => setCart([...cart, product])}>
                        Add{product.name}{currency}{product.price}
                    </button>

                ))}
            </div>
            <h3>Items in Cart</h3>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product, index) => (
                        <li key={index} style={{ margin: '10px 0' }}>{product.name} - {currency}{product.price}<button onClick={() => Removeitem(index)}>Remove</button></li>
                    ))}

                </ul>
            )}
            <h3 style={{ background: 'red' }}>Total: {currency}{total}</h3>

            <button onClick={clearcart}>Clear Cart</button>
        </div>
    )
}

const style = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    product: {
        marginBottom: "20px",
    },
    btn: {
        margin: "5px",
        padding: "8px 12px",
        cursor: "pointer",
    },
    removeBtn: {
        marginLeft: "10px",
        padding: "4px 8px",
        background: "red",
        color: "white",
        border: "none",
        cursor: "pointer",
    },
    clearBtn: {
        marginTop: "10px",
        padding: "8px 12px",
        background: "black",
        color: "white",
        cursor: "pointer",
    },
};
export default App;