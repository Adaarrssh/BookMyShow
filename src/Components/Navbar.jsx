import React from "react";
import { Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logo } from "../utils/constants";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px",
        marginTop: "-10px",
      }}
    >
      <Toolbar
        className="tool"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <div className="nav" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="BookMyShow Logo"
            style={{ height: 90, marginRight: 8, width: "auto" }}
          />

          <SearchBar />
        </div>
        <div className="box" style={{ display: "flex", gap: "13px" }}>
          <div className="location">
            <span>Meerut</span>
          </div>
          <div>
            <ArrowDropDownIcon />
          </div>
          <button type="button" className="btn btn-danger">
            Sign in
          </button>
          <div>
            <MenuIcon />
          </div>
        </div>
      </Toolbar>
    </div>
  );
};
export default Navbar;
