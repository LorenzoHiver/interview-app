export const beerItemsSelector = ({ beers: { items, updatedItem } }) =>
  items.map((beer) => (beer.uuid === updatedItem.uuid ? updatedItem : beer));

export const allBeersSelector = (state) => [
  ...beerItemsSelector(state),
  ...state.beers.newItems,
];
