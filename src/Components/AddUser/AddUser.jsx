import React from 'react';

const AddUser = () => {
    const orderNow = e => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const item = { name, price }
        
        fetch('http://localhost:5000/item', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        <div className='w-1/2 mx-auto mt-28'>
             <form onSubmit={orderNow} className='text-center'>
                <input className='border-2 outline-none text-gray-600 text-lg block mb-3 py-3 px-3 w-full border-green-500' type="text" name='name' placeholder='Food Name' />
                <input className='border-2 outline-none text-gray-600 text-lg block mb-3 py-3 px-3 w-full border-green-500' type="number" name='price' placeholder='Price' />
                <input className='border-2 border-black block mb-3 py-2 px-3 w-1/2 mx-auto font-semibold bg-black text-white' type="submit" value='Order' />
            </form>
        </div>
    );
};

export default AddUser;