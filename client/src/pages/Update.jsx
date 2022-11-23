import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  //json obj
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname.split("/"));
  let bookId = location.pathname.split("/")[2];
  console.log(bookId);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      //await axios.post("link", json obj);
      await axios.put("http://localhost:8800/book/" + bookId, book);
      //หลังจาก post ให้ไปที่ path "/"
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update book.</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
