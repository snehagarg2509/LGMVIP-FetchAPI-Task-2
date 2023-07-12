import React, { useEffect, useState } from 'react'
import './fetchApi.css'
import image from "./letsgrowmore.png"

function FetchAPI() {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    const apiGet = async () => {
        setLoad(true);
        await fetch('https://reqres.in/api/users?page=1')
            .then((response) => response.json())
            .then(async (json) => {
                setData(json.data);
                console.log(json.data);
            });
        setLoad(false)
    };

    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src={image} />
                </div>
                <div className='api'>
                    <button onClick={apiGet}>Get Users</button>
                </div>
            </div>
            
            {load === false && data.length === 0 && <div className='title'>Lets Grow More</div>}
            {load === true ? <div className='loading'>Loading....</div> : null}
            {load === false && data.length > 0 ?
            <div className='users'>
                <>
                        {data.map((item) => (
                            <div className='userDetail' key={item.id}>
                                <img src={item.avatar} />
                                <div><p>{item.first_name} {item.last_name}</p>
                                <p>{item.email}</p></div>
                            </div>
                        ))}
                        
                        </>
                
            </div>: null}
            
        </>
    )
}

export default FetchAPI