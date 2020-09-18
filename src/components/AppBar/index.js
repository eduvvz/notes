import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import Logo from '../UI/Logo';
import useStyles from './styles';

function AppBar() {
  const { primaryColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ primaryColor });

  const MenuIcon = dynamic(() => import('./components/MenuIcon'), {
    ssr: false,
  });

  return (
    <Box className={classes.app_bar_wrapper} alignItems="center">
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid xs={2} item>
            <Logo />
          </Grid>
          <Grid xs={1} item>
            <MenuIcon />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AppBar;
