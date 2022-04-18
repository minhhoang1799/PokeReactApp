import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import pokemonList from "../../../api/pokemonApi";
import DetailPokemon from "./components/DetailPokemon";
import "./Detail.scss";

function Detail(props) {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [detail, setDetail] = useState({});
  const [species, setSpecies] = useState({});
  const getDetailPokemon = () => {
    let isSpecies = params.name;
    const idxString = isSpecies.indexOf("-");
    if (idxString > -1) {
      isSpecies = isSpecies.slice(0, idxString);
    }
    Promise.all([
      pokemonList.get(params.name),
      pokemonList.getSpecies(isSpecies),
    ]).then((values) => {
      const [data1, data2] = values;
      setDetail(data1);
      setSpecies(data2);
    });
  };
  useEffect(() => {
    getDetailPokemon();
  }, []);

  return (
    <section className="poke__detail">
      {Object.keys(detail).length !== 0 &&
        Object.keys(species).length !== 0 && (
          <DetailPokemon dataPokemon={detail} dataSpecies={species} />
        )}
    </section>
  );
}

export default Detail;
