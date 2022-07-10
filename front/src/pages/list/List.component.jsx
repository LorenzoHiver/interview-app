import React from "react";

import { BeerList } from "../../components/BeerList";
import { Button } from "../../components/Button";

import styles from "./List.module.scss";

export const List = ({ beers, loading, postBeerRating }) => (
  <div>
    <div className={styles.list}>
      <BeerList beers={beers} loading={loading} postBeerRating={postBeerRating} />
    </div>
    <div className={styles.addBeer}>
      <Button type="link" to="/new/" text="Add a beer" />
    </div>
  </div>
);
