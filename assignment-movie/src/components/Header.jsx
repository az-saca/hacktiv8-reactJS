import React from "react";
import Search from "./Search";

export default function Header() {
  return (    
      <div className="app-header">
        <h1 className="navbar-brand">FinProH8</h1>
        <Search />
      </div>    
  );
}