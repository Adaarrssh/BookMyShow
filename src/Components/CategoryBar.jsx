import React from "react";

const CategoryBar = ({ setCategory }) => {
  return (
    <div
      className="category-bar"
      style={{
        backgroundColor: "#f2f2f2",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        className="first"
        style={{
          display: "flex",
          gap: "12px",
          padding: "0rem 2rem",
          fontSize: "small",
        }}
      >
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Movies
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Stream
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Events
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Plays
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Sports
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Activities
        </a>
      </div>
      <div
        className="Second"
        style={{
          display: "flex",
          gap: "12px",
          padding: "0rem 2rem",
          fontSize: "smaller",
        }}
      >
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          ListYourShow
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Corporates
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Offers
        </a>
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          Gift Cards
        </a>
      </div>
    </div>
  );
};

export default CategoryBar;
