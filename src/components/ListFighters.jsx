import React from "react";

import Fighter from "./Fighter";

const ListFighters = ({ listFighters }) => {
  return <div className="lists-fighters">
      {listFighters.map((fighter) => {
        return <Fighter key={fighter.id} fighter={fighter}></Fighter>
      })}

  </div>;
};

export default ListFighters;
