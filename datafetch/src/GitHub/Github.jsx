

//useEffect calls automatically when component is mounted

import { useState, useEffect } from 'react';
import './Github.css';

function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/pushpak261')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <>
            <div>
                <h2>Github Followers: {data.followers}</h2>                <img src={data.avatar_url}/>
            </div>
        </>
    );
}

export default Github;
