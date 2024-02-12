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
import { v4 as uuidv4 } from 'uuid';

type Props = {
  name: string;
  img: number;
  address: string;
  tags: string[];
};

function GridItem({
  name, img, address, tags,
}: Props): React.JSX.Element {
  return (
    <Grid item data-cy="result-item" xs={12} sm={6} md={4} lg={3}>
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
        />
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
            {tags.map((tag: string) => (
              <Chip key={uuidv4()} className="mt-3 mr-2 " label={tag} />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default GridItem;
