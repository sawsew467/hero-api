import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Input({ setImgUrl }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (+inputValue > 137 || +inputValue < 1) {
      alert("Your input is not valid!!");
    } else {
      const dataFromApi = await (
        await axios.get("https://api.opendota.com/api/heroStats")
      ).data;
      const imageUrl = dataFromApi.filter(
        (item, index) => item.id === +inputValue
      )[0].img;
      setImgUrl(imageUrl)
      window.localStorage.setItem("imageUrl", imageUrl);
      navigate("/output")
    }
  };
  return (
    <>
      <input
        placeholder="enter id"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Show</button>
    </>
  );
}

export default Input;
