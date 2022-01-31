import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any travelling assitance induigence upleasing.Not throughts all excercise blessing.Induigence way everything joy alteration boisterous the attchment.Party we years to order allow asked of</p>
        <div className="gradient__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  )  
};

export default Header;
 