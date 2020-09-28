import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Container } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ArrowBackIos as ArrowBackIcon } from '@material-ui/icons';
import Logo from '../../../UI/Logo';
import useStyles from './styles';

function AppBar() {
  const {
    pallete: { accentColor },
    appbar: { showBackButton },
  } = useSelector((state) => state.layout);
  const classes = useStyles({ accentColor });
  const router = useRouter();

  function onClickBackBtn() {
    router.back();
  }

  const MenuIcon = dynamic(() => import('./components/MenuIcon'), {
    ssr: false,
  });

  const useMenuIcon = useMemo(() => <MenuIcon />, []);

  return (
    <Box className={classes.app_bar_wrapper} alignItems="center">
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid xs={5} item container>
            {showBackButton && (
              <Grid xs={1} justify="center" alignItems="center" item container>
                <ArrowBackIcon
                  onClick={onClickBackBtn}
                  className={classes.icon_back_btn}
                />
              </Grid>
            )}
            <Logo isLinkToHome />
          </Grid>
          <Box className={classes.btn_menu_wrapper}>{useMenuIcon}</Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default AppBar;
