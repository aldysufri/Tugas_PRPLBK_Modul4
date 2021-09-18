import React, { useEffect, useState } from "react";
import './Home.css'
const date = new Date();

export default function Index() {
    // Jam
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
    
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
    
    // Form
    const [show, setShow] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        if (user === "welcome") {
            alert(user)
        }
    }, [user]);

    useEffect(() => {
    alert("Selamat Datang di Halaman Home...")
    }, [])
    
  return (
      <div className="home">
        <div className="container">
          {show && (
                <>
                <div className="titleWrapper">
                          <p className="title">Input Name</p>
                          <p style={{ color:"white" }}>-Masukkan nama lalu tekan Enter-</p>
                </div>
                <div className="inputWrapper">
                    <div>
                        <input
                            size="50"
                            value=
                                  {user} onChange={(event) => setUser(event.target.value)} onKeyUp={(e) => {
                                      if (e.key === 'Enter') {
                                        if (user !== "") {
                                        alert("Hallo " + user );
                                        }
                                }
                            }} />
                    </div>
                    </div>
                </>
            )}
            <button className="Button" onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
        </div>
        <div className="jam">
            {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
        </div>
    </div>
      
  );
}