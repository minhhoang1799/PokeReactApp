import axiosClient from "./axiosClient";

const pokemonList = {
  //get all pokemon
  getAll(params) {
    const url = "/pokemon";
    return axiosClient.get(url, { params });
  },
  //get detail pokemon with id
  get(id) {
    const url = `/pokemon/${id}`;
    return axiosClient.get(url);
  },
  //get detail pokemon with species and id
  getSpecies(id) {
    const url = `pokemon-species/${id}`;
    return axiosClient.get(url);
  },
};

export default pokemonList;
