import React from "react";
import Button from "./Button";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="con">
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="logo" src={props.imgl} alt={props.name} />
            </div>
          </div>
          <div className="row mar-top">
            <p className="text-1 mar-left">
              Last Valuation:
              <br />
              {props.ev}
              <br />
              <br />
              Top Investors:
              <br />
              {props.in}
            </p>
          </div>
          <div className="row but-mar-left but-mar-top">
            <Button name="sell/buy↗️" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
