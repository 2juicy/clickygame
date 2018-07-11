import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.shuffleFriend(props.id)} className="card">
    <div className="img-container hvr-radial-out">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
          <strong>{props.name}</strong> 
    </div>
  </div>
);

export default FriendCard;
