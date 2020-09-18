import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Logo from '../UI/Logo';
import useStyles from './styles';

function AppBar() {
  const { primaryColor } = useSelector((state) => state.layout.pallete);
  const classes = useStyles({ primaryColor });

  return (
    <nav>
      <Box className={classes.app_bar_wrapper} alignItems="center">
        <Container>
          <Grid container alignItems="center">
            <Grid xs={2} item>
              <Logo />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </nav>
  );
}

export default AppBar;
