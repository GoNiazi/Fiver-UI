import React, { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data.js";
import GigCard from "./../../components/gigCard/GigCard";

const Gigs = () => {
  const [open, setopen] = useState(false);
  const [sort, setsort] = useState("sales");
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">fiverr > Graphics & Design </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="/imgs/down.png"
              alt="down"
              onClick={() => setopen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => setsort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => setsort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => {
            return <GigCard item={gig} key={gig.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
