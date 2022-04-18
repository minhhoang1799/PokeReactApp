import axiosClient from "./axiosClient";
const pokemonType = {
  //get all types of pokemon
  getAll(
    params = {
      _limit: 20,
      _offset: 20,
    }
  ) {
    const url = "/type";
    return axiosClient.get(url, params);
  },
  //get detail pokemon with id type
  get(id) {
    const url = `/type/${id}`;
    return axiosClient.get(url);
  },
};

export default pokemonType;
