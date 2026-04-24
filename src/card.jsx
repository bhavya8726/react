function Stund({name,cours,image})
{
    return (
        <div style={{
            height:"auto",
            margin:"auto",
            background:"radial-gradient(circle, #f04040, #4a16e4, #1fc4b6)"
        }}>
            <img
            src={image}
            alt={name}
/>
            <h2>{cours}</h2>
            <h3>{name}</h3>

        </div>
    )

}
function App()
{
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            gap:'10px'
        }}>
            <Stund
                name="Bhavya"
                cours='React Developer'
                image="https://randomuser.me/api/portraits/men/24.jpg"
            />

             <Stund
                name="Nil"
                cours='Flutter Developer'
                image="https://randomuser.me/api/portraits/men/25.jpg"
            />

             <Stund
                name="Parth"
                cours='Full Stack Developer'
                image="https://randomuser.me/api/portraits/men/29.jpg"
            />
        </div>
    )
}

 export default App;