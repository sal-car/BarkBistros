import React from 'react';
import {
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  useMediaQuery,
  Theme,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  name: string;
  img: number;
  address: string;
  tags: string[];
  open: boolean;
};

function ListItem({
  name,
  img,
  address,
  tags,
  open,
}: Props): React.JSX.Element {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <ListItemButton data-cy="result-item">
      <ListItemAvatar>
        <Avatar src={`${img}.jpg`} alt={`picture of restaurant ${name}`} />
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ fontSize: { xs: 'medium', sm: 'large' } }}
        secondaryTypographyProps={{
          fontSize: { xs: 'small', sm: 'medium' },
        }}
        primary={name}
        secondary={address}
      />
      {tags.map(
        (tag: string, index: number) => (matches || index === 0) && (
        <Chip
          key={uuidv4()}
          className="ml-1 mr-2"
          sx={{ maxWidth: { xs: 80, sm: 200 } }}
          label={tag}
        />
        ),
      )}
      <h1>{matches}</h1>
      <CircleIcon color={open ? 'success' : 'error'} />
    </ListItemButton>
  );
}

export default ListItem;
