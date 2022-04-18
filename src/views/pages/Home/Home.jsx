import React, { useEffect, useState } from "react";
import pokemonList from "../../../api/pokemonApi";
import pokemonType from "../../../api/pokemonTypesApi";
import PokeList from "./components/PokeList/PokeList";
import PokePagination from "./components/PokePagination/PokePagination";
import PokeTypes from "./components/PokeTypes/PokeTypes";
import Loading from "../../components/Loading/Loading";
import "./style.scss";

function Home() {
  const [loading, setLoading] = useState(true);
  const [listType, setListType] = useState([]);
  const [type, setType] = useState("all");
  const [pokeList, setPokeList] = useState([]);
  const [params, setParams] = useState({
    offset: 0,
    limit: 30,
  });
  const [page, setPages] = useState(0);
  //render types list
  const typeDataList = ["all"];
  const getTypeData = async () => {
    const resData = await pokemonType.getAll();
    resData.results.map((item) => typeDataList.push(item.name));
    setListType(typeDataList);
  };
  //handle render pokemon list
  const handleType = (values) => {
    setType(values);
  };
  //render pokemon list
  const getPokeList = async () => {
    setLoading(true);
    const pokeName = [];
    if (type !== "all") {
      const resByType = await pokemonType.get(type);
      resByType.pokemon.map((item) => pokeName.push(item.pokemon.name));
    } else {
      const res = await pokemonList.getAll(params);
      setPages(res.count);
      res.results.map((item) => pokeName.push(item.name));
    }

    Promise.all(
      pokeName.map(async (item) => {
        const itemId = await pokemonList.get(item);
        return itemId;
      })
    ).then((values) => {
      let newList = [...values];
      setPokeList(newList);
      setLoading(false);
    });
  };
  const handlePagination = (e, page) => {
    setParams({
      ...params,
      offset: page === 1 ? 0 : page * 30 - 30,
    });
  };
  useEffect(() => {
    getTypeData();
  }, []);
  useEffect(() => {
    getPokeList();
  }, [type, params]);
  return (
    <>
      <section className="pokemon__list">
        <PokeTypes typeList={listType} handleType={handleType} />
        <PokeList pokeList={pokeList} />
        <PokePagination
          countPage={page}
          params={params}
          handlePagination={handlePagination}
          type={type}
        />
      </section>
      <Loading loading={loading} />
    </>
  );
}

export default Home;
