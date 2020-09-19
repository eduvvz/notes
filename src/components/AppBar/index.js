import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import Logo from '../UI/Logo';
import useStyles from './styles';

function AppBar() {
  const { accentColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ accentColor });

  const MenuIcon = dynamic(() => import('./components/MenuIcon'), {
    ssr: false,
  });

  return (
    <Box className={classes.app_bar_wrapper} alignItems="center">
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid xs={5} item>
            <Logo />
          </Grid>
          <Box className={classes.btn_menu_wrapper}>
            <MenuIcon />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default AppBar;
