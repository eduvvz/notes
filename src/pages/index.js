import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Banner from '../components/UI/Banner';
import bgHome from '../assets/images/home-bg.jpg';
import Logo from '../components/UI/Logo';
import TypeWitter from '../components/UI/TypeWritter';

const useStyles = makeStyles((theme) => ({
  banner_container: {
    padding: theme.spacing(2),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Home() {
  const classes = useStyles();
  const wordsToType = [
    'escreva.',
    'desfrute.',
    'aprenda.',
    'decore.',
    'lembre.',
  ];

  return (
    <Layout>
      <Banner urlImage={bgHome}>
        <Container className={classes.banner_container}>
          <div>
            <Typography variant="h3" align="center">
              Aproveite o <Logo large /> e{' '}
            </Typography>
            <Typography variant="h3" align="center">
              <TypeWitter wordsToType={wordsToType} />
            </Typography>
          </div>
        </Container>
      </Banner>
    </Layout>
  );
}

export default Home;
