import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { SpeakerNotesOutlined, ExitToAppOutlined } from '@material-ui/icons';
import useStyles from './styles';
import { closeSidebar } from '../Layout/actions';

function SideBar() {
  const dispatch = useDispatch();
  const {
    sidebar,
    pallete: { accentColor },
  } = useSelector((state) => state.layout);
  const classes = useStyles({ isOpen: sidebar.open, accentColor });
  const router = useRouter();

  const navItems = [
    {
      label: 'Minhas Notas',
      link: '/my-notes',
      icon: <SpeakerNotesOutlined className={classes.nav_item_icon} />,
    },
    {
      label: 'Faça login',
      link: '/login',
      icon: <ExitToAppOutlined className={classes.nav_item_icon} />,
    },
  ];

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(closeSidebar());
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className={classes.sidebar_wrapper}>
      {navItems.map((item) => (
        <div className={classes.nav_item} key={item.label}>
          {item.icon}
          <Link href={item.link}>
            <a>
              <Typography>
                <Box fontWeight="fontWeightBold" component="span">
                  {item.label}
                </Box>
              </Typography>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
