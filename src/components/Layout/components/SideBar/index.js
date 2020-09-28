import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import useStyles from './styles';
import { closeSidebar } from '../../actions';
import useAuth from '../../../../utils/hooks/useAuth';
import routes from './routes';

function SideBar() {
  const dispatch = useDispatch();
  const {
    sidebar,
    pallete: { accentColor },
  } = useSelector((state) => state.layout);
  const [getUserIsLogged, setGetUserIsLogged] = useState(false);
  const classes = useStyles({ isOpen: sidebar.open, accentColor });
  const router = useRouter();
  const { userIsLogged } = useAuth();

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(closeSidebar());
    };

    setGetUserIsLogged(userIsLogged());
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <nav className={classes.sidebar_wrapper}>
      {routes
        .filter((route) => !(getUserIsLogged && route.dontShowWhenLogged))
        .map((route) => (
          <div className={classes.nav_item} key={route.label}>
            <Icon className={classes.nav_item_icon}>{route.icon}</Icon>
            <Link href={route.link}>
              <a>
                <Typography>
                  <Box fontWeight="fontWeightBold" component="span">
                    {route.label}
                  </Box>
                </Typography>
              </a>
            </Link>
          </div>
        ))}
    </nav>
  );
}

export default SideBar;
