import React, { useEffect, useState } from 'react';

const Home = () => {
    const [item, setItem] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return (
        <div>
            {/* {item.map(food => <li>{food.length}</li>)} */}
        </div>
    );
};

export default Home;