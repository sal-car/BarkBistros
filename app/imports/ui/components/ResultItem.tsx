import React from 'react';
import {
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { getCurrentHourAndDay, isOpen } from '/imports/utils/filterRestaurants';

type Props = {
  item: Restaurant;
  cardView: boolean;
};

export const ResultItem = ({ item, cardView }: Props) => {
  const venueIsOpen = () => {
    const { day, hour } = getCurrentHourAndDay();
    return isOpen(hour, item.opening_hours[day]);
  };

  return (
    <>
      {(cardView && (
        <Grid data-cy={'result-item'} item xs={6} md={4} lg={2}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              height="40"
              image="https://cdnb.20m.es/sites/76/2021/07/El-curioso-origen-detr%C3%A1s-del-nombre-de-famosas-marcas-Starbucks.jpg"
            ></CardMedia>
            <CardContent
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <Box>
                <Typography className="text-salt ">{item.name}</Typography>
                <Typography className="text-salt/70 text-xs">
                  {item.address}
                </Typography>
              </Box>
              <Box>
                {item.tags.map((tag) => (
                  <Chip size="small" className="mt-3 mr-2 " label={tag} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )) || (
        <ListItemButton data-cy={'result-item'}>
          <ListItemAvatar>
            <Avatar src="https://cdnb.20m.es/sites/76/2021/07/El-curioso-origen-detr%C3%A1s-del-nombre-de-famosas-marcas-Starbucks.jpg" />
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.address} />
          <Chip
            className="ml-1 mr-2"
            sx={{ maxWidth: 80 }}
            label={item.tags[0]}
          />
          <CircleIcon color={venueIsOpen() ? 'success' : 'error'} />
        </ListItemButton>
      )}
    </>
  );
};
