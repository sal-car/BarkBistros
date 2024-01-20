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

type Props = {
  item: { name: string; address: string; tags: string[] };
  cardView: boolean;
};

export const ResultItem = ({ item, cardView }: Props) => {
  return (
    <>
      {(cardView && (
        <Grid item xs={6} md={4} lg={2}>
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
        <ListItemButton>
          <ListItemAvatar>
            <Avatar src="https://cdnb.20m.es/sites/76/2021/07/El-curioso-origen-detr%C3%A1s-del-nombre-de-famosas-marcas-Starbucks.jpg" />
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.address} />
          <Chip className="ml-1 mr-2" label={item.tags[0]} />
          <CircleIcon color="error" />
        </ListItemButton>
      )}
    </>
  );
};
