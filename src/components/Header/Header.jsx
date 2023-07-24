import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="./logo.png"
          alt="logo of Imperio Railing Systems"
          width={100}
        />
        <div className="flexCenter h-menu">
          <a href="">Our Value</a>
          <a href="">Know More</a>
          <button className="button">
            <a href="">Contact us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
