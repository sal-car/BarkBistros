import React from 'react';
import { IconButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

type Props = {
  onClick: () => void;
  cardView: boolean;
};

export const ToggleView = ({ onClick, cardView }: Props) => (
  <IconButton onClick={onClick}>
    {cardView ? <ViewListIcon /> : <ViewModuleIcon />}
  </IconButton>
);
