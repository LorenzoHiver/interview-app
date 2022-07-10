import React from "react";
import { BeerItem } from "../BeerItem";
import { Loader } from "../Loader";

import styles from "./BeerList.module.scss";

export const BeerList = ({ beers, loading, postBeerRating }) => (
  <div className={styles.Beerlist}>
    {!loading &&
      beers.map((beer) => (
        <BeerItem key={beer.uuid} beer={beer} onRate={postBeerRating} />
      ))}
    {loading && <Loader />}
  </div>
);
