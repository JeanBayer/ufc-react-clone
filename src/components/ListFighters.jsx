import PropTypes from "prop-types";

import Fighter from "./Fighter";

const ListFighters = ({ listFighters }) => {
  return (
    <div className="lists-fighters">
      {listFighters.map((fighter) => {
        return <Fighter key={fighter.id} fighter={fighter}></Fighter>;
      })}
    </div>
  );
};

ListFighters.propTypes = {
  listFighters: PropTypes.array.isRequired,
};

export default ListFighters;
