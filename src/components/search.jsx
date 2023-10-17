import React, { useState } from "react";
import Table from "../components/table";
import apiCall from "../services/index";
import "../utills/design.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);
  const [errorLog, setErrorLog] = useState(false);
  const popUp = {
    border: "black 2px solid",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "red",
    backgroundColor: "lightgray",
  };

  const saveSearch = async (value) => {
    let data = await apiCall(value);

    if (data && data.items) {
      data = data?.items;
      setData(data);
    } else if (data && data.message) {
      setErrorLog(true);
    } else {
      setData(data);
    }
  };

  return (
    <main>
      <div className="rect">
        <h1 id="heading">Enter Name to Search</h1>
        <div id="search_bar">
          <input
            type="text"
            placeholder="Type a Name"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              saveSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div style={{ display: errorLog ? "inline" : "none" }}>
        <div style={popUp}>
          <p>
            You have exceed your per minute search-request. <br />
            GitHub provides only 10 Search-request per minute. Wait for 1 minute
            and start from where you left to complete your search
          </p>
        </div>
      </div>
      <Table data={data} />
    </main>
  );
};

export default Search;
