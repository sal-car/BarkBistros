import React from 'react';
import {
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

type Restaurant = {
  name: string;
  address: string;
  tags: string[];
};

export const ResultItem = ({ item }: { item: Restaurant }) => (
  <ListItemButton>
    <ListItemAvatar>
      <Avatar src="https://cdnb.20m.es/sites/76/2021/07/El-curioso-origen-detr%C3%A1s-del-nombre-de-famosas-marcas-Starbucks.jpg" />
    </ListItemAvatar>
    <ListItemText primary={item.name} secondary={item.address} />
    <Chip style={{ marginRight: '20px' }} label={item.tags[0]} />
    <CircleIcon color="error" />
  </ListItemButton>
);
