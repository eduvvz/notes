import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

function SideBar() {
  const { sidebar } = useSelector((state) => state.layout);
  const classes = useStyles({ isOpen: sidebar.open });

  return <div className={classes.sidebar_wrapper} />;
}

export default SideBar;
