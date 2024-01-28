import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
} from '@mui/material';

type Props = {
  name: string;
  img: number;
  address: string;
  tags: string[];
};

export function GridItem({ name, img, address, tags }: Props) {
  return (
    <Grid item data-cy={'result-item'} xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: { xs: 'fit', sm: '100%' },
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          sx={{ minHeight: 180, width: '100%', objectFit: 'cover' }}
          src={`${img}.jpg`}
          alt={`picture of restaurant ${name}`}
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
            <Typography sx={{ fontSize: { xs: 'medium', sm: 'large' } }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: { xs: '10px', sm: 'medium' } }}>
              {address}
            </Typography>
          </Box>
          <Box>
            {tags.map((tag, index) => (
              <Chip key={index} className="mt-3 mr-2 " label={tag} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
