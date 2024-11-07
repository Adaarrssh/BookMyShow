import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearchSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: 560,

        border: "1px solid #ccc",
        boxShadow: "none",
        backgroundColor: "#fff",
      }}
    >
      <input
        style={{
          flex: 1,
          width: "auto",
          border: "6px",

          padding: "8px",
          fontSize: "16px",
        }}
        placeholder="Search for Movies,Events,Plays,Sports and Activities"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Paper>
  );
};

export default SearchBar;
