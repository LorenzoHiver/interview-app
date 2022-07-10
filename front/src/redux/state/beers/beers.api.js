import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const postBeerRating = (uuid, rating) => axios.post(`/beers/${uuid}/rate`, rating)