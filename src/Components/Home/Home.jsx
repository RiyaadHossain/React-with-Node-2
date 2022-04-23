import React, { useEffect, useState } from "react";

const Home = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
    
    const deleteItem = id => {
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                const remaining = item.filter(food => food._id !== id)
                setItem(remaining)
            }
        })
    }
  return (
    <div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-bold text-emerald-600 mb-8">
          Food Ordered
        </h3>
        {item.map((food) => (
          <p
            className="border-2 mb-3 border-gray-500 block w-1/2 mx-auto py-2"
            key={food._id}
          >
            <span className="text-2xl font-semibold">{food.name}</span> -{" "}
            <span className="text-xl font-semibold text-red-600">
              ${food.price}
            </span>
            <button className="bg-green-600 ml-5 text-white px-2 border-2 border-gray-200">
              Update
            </button>
                <button
            onClick={() => deleteItem(food._id)}        className="bg-red-600 ml-2 text-white px-2 border-2 border-gray-200">
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
