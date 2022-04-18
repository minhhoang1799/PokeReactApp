import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

PokeList.propTypes = {
  pokeList: PropTypes.array,
};
PokeList.defaultProps = {
  pokeList: [],
};
function PokeList(props) {
  const { pokeList } = props;
  return (
    <div className="poke">
      <div className="container ">
        <div className="row">
          {pokeList.map((item) => (
            <div className="col" key={item.name}>
              <Link to={`/detail?name=${item.name}`}>
                <div
                  className={`poke__item poke__item--${item.types[0].type.name}`}
                >
                  <div className="poke__item--image">
                    <img
                      src={`${
                        item.sprites.other.home.front_default
                          ? item.sprites.other.home.front_default
                          : item.sprites.front_default
                      }`}
                      alt={item.name}
                    />
                  </div>
                  <div className="poke__item--id">
                    <h4>#{`00${item.id}`.slice(-3)}</h4>
                  </div>
                  <div className="poke__item--name">
                    <h3>{item.name}</h3>
                  </div>
                  <ul className="poke__item--types">
                    {item.types.map((type) => (
                      <li
                        key={type.type.name}
                        className={`list__type--${type.type.name} istype`}
                      >
                        <p>{type.type.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeList;
