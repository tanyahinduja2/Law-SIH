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
        const serpapiUrl = `http://serpapi.com/search.json?engine=google_local&q=legal+advisor+in+mumbai&location=Mumbai%2C+Maharashtra%2C+India&google_domain=google.co.in&gl=in&hl=en&api_key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`;
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
