import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

PokeTypes.propTypes = {
  typeList: PropTypes.array,
  handleType: PropTypes.func,
};
PokeTypes.defaultProps = {
  typeList: [],
  handleType: null,
};
function PokeTypes(props) {
  const { typeList, handleType } = props;
  return (
    <div className="container list">
      <ul className="list__type ">
        {typeList.map((item) => (
          <li
            className={`list__type--${item} list__item`}
            key={item}
            onClick={() => {
              handleType(item);
            }}
          >
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokeTypes;
