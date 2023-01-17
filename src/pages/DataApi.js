import React from "react";
import JSONDATA from "../MOCK_DATA.json";
import { useState } from "react";
import "./DataApi.css";
function DataApi() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <h2>Search Filter</h2>
      <h3>Summary</h3>
      <p>
        Topics covered: React components, useState(), using controlled HTML
        input field in React.
      </p>
      <div className="data-api">
        <input
          className="search-input"
          type="text"
          placeholder="Filter..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default DataApi;
