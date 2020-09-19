import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { SpeakerNotesOutlined, ExitToAppOutlined } from '@material-ui/icons';
import useStyles from './styles';

function SideBar() {
  const {
    sidebar,
    pallete: { accentColor },
  } = useSelector((state) => state.layout);
  const classes = useStyles({ isOpen: sidebar.open, accentColor });

  const navItems = [
    {
      label: 'Minhas Notas',
      link: '/my-notes',
      icon: <SpeakerNotesOutlined className={classes.nav_item_icon} />,
    },
    {
      label: 'Faça login',
      link: '/profile',
      icon: <ExitToAppOutlined className={classes.nav_item_icon} />,
    },
  ];

  return (
    <div className={classes.sidebar_wrapper}>
      {navItems.map((item) => (
        <div className={classes.nav_item}>
          {item.icon}
          <Typography>
            <Box fontWeight="fontWeightBold">{item.label}</Box>
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
