import React, { useState, useEffect } from "react";
import "../css/map.css";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Map = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState();
  const [req, setReq] = useState(false);

  const handleClick = () => {
    setReq(!req);
    console.log(location);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (location !== "") {
        alert("location is added", location);
        const serpapiUrl = "https://serpapi.com/search.json?engine=google_local&q=legal+advisers+in+mumbai&google_domain=google.com&api_key=28b7bc775e05169a8761305ab4ab921ba00c2d7d523ccf3ae6353b40414baf4f";
        try {
          const response = await fetch(serpapiUrl,{method: 'GET',mode: 'no-cors',});

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [req]);

  return (
    <>
      <div className="container-map">
        <input
          placeholder="Enter your city"
          class="input"
          name="firstName"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="input-btn" onClick={handleClick}>
          <AiOutlineSearch />
        </button>
      </div>
    </>
  );
};

export default Map;
