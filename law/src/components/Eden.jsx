import React, { useState } from "react";
import axios from "axios";
const Eden = () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState("");
  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2E0ODk0MjktZGIwMS00YzMyLTgwNmYtZmI3YzgyMzkzMWYzIiwidHlwZSI6ImFwaV90b2tlbiJ9.zb2xQc9BJybAGp0EX3fDuDjtvTB-_Uqe5NZ16wDW9Hg",
    },
    data: {
      providers: "google",
      text: prompt,
      temperature: 0.2,
      max_tokens: 250,
    },
  };
  const handleClick = () => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setData(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div>Eden</div>
      <input
        placeholder="enter the prompt"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleClick}>press to fire request</button>
    </>
  );
};

export default Eden;
