import React, { useState } from "react";
import Table from "../components/table";
import apiCall from "../services/index";
import "../utills/design.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  const saveSearch = async () => {
    let data = await apiCall(input);
    console.log(data);
    data = data?.items;
    setData(data);
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
              saveSearch();
            }}
          />
        </div>
      </div>
      <Table data={data} />
    </main>
  );
};

export default Search;
