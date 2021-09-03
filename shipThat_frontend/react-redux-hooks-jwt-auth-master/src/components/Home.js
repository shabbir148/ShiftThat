import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import "./home.css"

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="cool" >
      <div className="jumbotron">
        <img src='https://i.pinimg.com/originals/c4/9a/20/c49a207e0f89c9290d98fd43a87a8cb0.gif'></img>
        <div className="cool-section">
        <h3>{content}</h3>
        <li>Get best deals on loading and unloading</li>
        <li>Put advertisement of your items and transport people will bid for it.</li>
        <li>Lowest bidder's info will be shared with you.</li>
        </div>
        <div className="d-flex flex-row p-3 mt-4 justify-content-center">
        <a className="btn btn-outline-info btn-lg" href="/login">Login</a>
      <a className="btn btn-outline-info ml-5 btn-lg"  href="/register">Sign up</a>
        </div>
       
      </div>
  
    </div>
  );
};

export default Home;
