import React from 'react';
import { getCurrentHourAndDay, isOpen } from '/imports/utils/filterRestaurants';
import { GridItem } from './GridItem';
import { ListItem } from './ListItem';

type Props = {
  item: Restaurant;
  gridView: boolean;
  key: number;
};

export const ResultItem = ({ item, gridView }: Props) => {
  const checkIfVenueIsOpen = () => {
    const { day, hour } = getCurrentHourAndDay();
    return isOpen(hour, item.opening_hours[day]);
  };

  interface imgMap {
    [key: string]: number;
  }

  const imgMap: imgMap = {
    'Paws & Plates': 0,
    'Bark & Bites': 1,
    'Puppy Patio': 2,
    'Tail Wag Tavern': 3,
    'BowWow Bistro': 4,
    'Snout & Sip Lounge': 5,
    'Canine Corner Café': 6,
    "Woof n' Dine": 7,
  };

  return (
    <>
      {(gridView && (
        <GridItem
          name={item.name}
          address={item.address}
          img={imgMap[item.name]}
          tags={item.tags}
        />
      )) || (
        <ListItem
          open={checkIfVenueIsOpen()}
          name={item.name}
          address={item.address}
          img={imgMap[item.name]}
          tags={item.tags}
        />
      )}
    </>
  );
};
