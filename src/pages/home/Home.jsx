import React from "react";
import "./Home.scss";
import Featured from "./../../components/featured/Featured";
import TrustedBy from "./../../components/trustedBy/TrustedBy";
import Slide from "./../../components/slide/Slide";
import { cards } from "./../../data";
import CatCard from "./../../components/catCard/CatCard";
import axios from "axios";
import { projects } from "../../data.js";
import ProjecrCard from "./../../components/projectCard/ProjecrCard";
import Footer from "./../../components/footer/Footer";
const Home = () => {
  // const img = [
  //   "/imgs/man.png",
  //   "/imgs/check.png",
  // ];
  // const data = new FormData();
  // data.append("file",);

  // const options = {
  //   method: "POST",
  //   url: "https://logoraisr-colortag.p.rapidapi.com/rest-v1/uploads/",
  //   headers: {
  //     "X-RapidAPI-Key": "53094e23c8msh579986f68597b58p14a4eajsnd39434cdafc4",
  //     "X-RapidAPI-Host": "logoraisr-colortag.p.rapidapi.com",
  //   },
  //   data: data,
  // };
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => {
          return <CatCard card={card} key={card.id} />;
        })}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

          <div className="item">
            <video src="/imgs/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <span>business</span>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="/imgs/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="/imgs/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="/imgs/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>

          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"></img>
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => {
          return <ProjecrCard card={card} key={card.id} />;
        })}
      </Slide>
      <Footer />
    </div>
  );
};

export default Home;
