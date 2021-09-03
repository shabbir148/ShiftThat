import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import ShowItems from "./ShowItems";
import UserBids from "./UserBids"



const BoardModerator = () => {
//   const [content, setContent] = useState("");

  useEffect(() => {
    // UserService.getModeratorBoard().then(
    //   (response) => {
    //     setContent(response.data);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setContent(_content);
    //   }
    // );
  }, []);

  return (
    <div className="container">
      {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header> */}
      <div>
        <UserBids url={`http://localhost:8085/api/getUserBids`} />
      </div>
    </div>
  );
};

export default BoardModerator;
