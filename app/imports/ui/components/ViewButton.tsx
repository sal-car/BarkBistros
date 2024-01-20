import React from 'react';
import { IconButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

type Props = {
  onClick: () => void;
  cardView: boolean;
  className: string;
};

export const ViewButton = ({ onClick, cardView, className }: Props) => (
  <IconButton className={className} onClick={onClick}>
    {cardView ? <ViewListIcon /> : <ViewModuleIcon />}
  </IconButton>
);
