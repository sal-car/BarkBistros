import React from 'react';
import { Box } from '@mui/material';

function Header(): React.JSX.Element {
  return (
    <Box className="bg-aubergine mb-8 p-5 flex-col flex  items-center">
      <h1 className="  text-4xl  font-logo mb-1 sm:text-5xl">BarkBistros🐕</h1>
      <h3 className=" text-xs sm:text-sm font-light">
        Restaurants for Foodies and Furry Friends
      </h3>
    </Box>
  );
}

export default Header;
