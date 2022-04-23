import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  const orderNow = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const item = { name, price };

    fetch(`http://localhost:5000/item/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.target.reset();
    alert("Food Item Updated ✅");
    navigate("/");
  };
  return (
    <div className="w-1/2 mx-auto mt-28">
      <h2 className="text-4xl font-bold text-center mb-4">
        {user.name} - ${user.price}
      </h2>
      <form onSubmit={orderNow} className="text-center">
        <input
          className="border-2 outline-none text-gray-600 text-lg block mb-3 py-3 px-3 w-full border-green-500"
          type="text"
          name="name"
          placeholder="Food Name"
        />
        <input
          className="border-2 outline-none text-gray-600 text-lg block mb-3 py-3 px-3 w-full border-green-500"
          type="number"
          name="price"
          placeholder="Price"
        />
        <input
          className="border-2 border-black block mb-3 py-2 px-3 w-1/2 mx-auto font-semibold bg-black text-white"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
