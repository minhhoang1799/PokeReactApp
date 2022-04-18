import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

DetailPokemon.propTypes = {
  dataPokemon: PropTypes.object.isRequired,
  dataSpecies: PropTypes.object.isRequired,
};

function DetailPokemon(props) {
  const { dataPokemon, dataSpecies } = props;
  console.log(dataSpecies);
  const { id, name, weight, height, abilities, types, forms, stats, sprites } =
    dataPokemon;

  return (
    <div
      className={`detail__pokemon--${types[0].type.name} detail__fullscreen`}
    >
      <div className="detail__pokemon--name">
        <h3>
          <span>#{`00${id}`.slice(-3)}</span>
          <br />
          <span>{name}</span>
        </h3>
      </div>
      <div className="detail__pokemon--info">
        <p>Heigh: {height / 10}m</p>
        <p>Weight: {weight / 10}kg</p>
        <p>
          Forms:
          {forms.map((data) => (
            <span key={data.name}>{data.name}</span>
          ))}
        </p>
      </div>
      <div className="detail__pokemon--image">
        <img
          src={`${
            sprites.other.home.front_default
              ? sprites.other.home.front_default
              : sprites.front_default
          }`}
          alt={name}
        />
      </div>
      <div className="detail__pokemon--content">
        <div className="detail__pokemon--types">
          {types.map((data) => (
            <div
              key={data.type.name}
              className={`detail__pokemon--image-child `}
            >
              <img
                src={require(`../../../../assets/image/${data.type.name}.png`)}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="detail__pokemon--stats">
          <h3 className="istitle">Base Stats:</h3>
          <div className="detail__pokemon--base">
            <p className="is-base">
              {stats.map((data) => (
                <React.Fragment key={data.stat.name}>
                  <span>
                    {data.stat.name}: {data.base_stat}
                  </span>
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        <div className="detail__pokemon--abilities">
          <h3 className="istitle">Abilities & Skill</h3>
          <div className="detail__pokemon--base">
            <p>
              {abilities.map((data) => (
                <span key={data.ability.name}>{data.ability.name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
