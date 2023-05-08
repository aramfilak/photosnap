import "./Beta.scss";
import React from "react";
import Button from "../Button/Button";
const Beta: React.FC = () => {
  return (
    <div className="beta">
      <h2 className="title">We’re in beta. Get your invite today!</h2>
      <Button secondary dark>
        <a href="/#">Get an invite</a>
      </Button>
    </div>
  );
};

export default Beta;
