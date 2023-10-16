import React, { useState } from "react";
import Table from "../components/table";
import apiCall from "../services/index";

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  const saveSearch = async () => {
    let data = await apiCall(input);
    data = data?.items;
    setData(data);
  };

  return (
    <main>
      <div>
        <h1>Search User by Name</h1>
        <div>
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
