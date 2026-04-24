function Id({ name, cours, image,rollnumber,college }) {
    return (
        <div style={{
            height: "auto",
            margin: "auto",
            background: "radial-gradient(circle, #0a111a, #4a16e4, #75c3db)",
            width: "auto",
            border:"2px solid grey",
        }}>
            <div style={{
                display: 'flex',
                height: 'auto'

            }}>
                 <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                
            }}>            
                <h2>{cours}</h2>
                <h3>{name}</h3>
                <p>{rollnumber}</p>
                <p>{college}</p>
            </div>
                <img
                    src={image}
                    alt={name}
                    style={{width:'150px', height: '150px', marginLeft: '800px' }}
                />
               
           

                 
            </div>
            
        </div>
    )

}
function App() {
    return (
        <div style={{
            display: 'inline',
            justifyContent: 'center',
        }}>
            <Id
                name="Bhavya"
                cours='React Developer'
                image="https://randomuser.me/api/portraits/men/24.jpg"
                rollnumber="12345"
                college="ABC College"
            />


        </div>
    )
}

export default App;