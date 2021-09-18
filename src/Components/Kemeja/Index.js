import { useState, useEffect } from 'react'

export default function Index() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/Kemeja")
            .then((Response) => Response.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
    alert("Silahkan Pilih Kemeja Kesukaan Anda...")
    }, [])

    return (
        <div>
            <div className="name">
            <h2>List Kemeja</h2>
            </div>
            <div className="center">
                {data.map((p) => (
                <div className="property-card">
                    <div className="property-image" style={{ backgroundImage: `url(${p.image})`}}>
                    <div className="property-image-title" >
                        </div>
                    </div>
                    <div className="property-description">
                    <h5 style={{ color:"#a265e7" }}> {p.name} </h5>
                        <p>{ p.des }</p>
                        <p>{ p.harga }</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

    )
}
