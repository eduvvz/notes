import React, { useState } from 'react';
import Lottie from 'lottie-web-react';
import useStyles from './styles';
import * as animationData from '../../../../assets/animations/hamburguer-lottie.json';
import { LOTTIE_PLAY_STATES } from '../../../../utils/animations';

function MenuIcon() {
  const classes = useStyles();
  const [animMenuIcon, setAnimMenuIcon] = useState({
    diretion: 1,
    goToAndPlay: null,
    forceFlag: false,
    playingState: LOTTIE_PLAY_STATES.STOP,
  });

  const defaultOptionAnim = {
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: animationData.default,
    rendererSettings: { preserveAspectRatio: 'xMinYMin slice' },
  };

  function onClickBtnMenu() {
    if (animMenuIcon.forceFlag) {
      setAnimMenuIcon({
        diretion: -1,
        goToAndPlay: {
          value: 45,
          isFrame: true,
        },
        forceFlag: !animMenuIcon.forceFlag,
        playingState: LOTTIE_PLAY_STATES.PLAY,
      });
    } else {
      setAnimMenuIcon({
        diretion: 1,
        goToAndPlay: null,
        forceFlag: !animMenuIcon.forceFlag,
        playingState: LOTTIE_PLAY_STATES.STOP,
      });
    }
  }

  return (
    <div className={classes.btn_menu} onClick={onClickBtnMenu}>
      <div>
        <Lottie
          options={defaultOptionAnim}
          playingState={animMenuIcon.playingState}
          className={classes.btn_menu_icon}
          playSegments={{
            segments: [0, 45],
            forceFlag: animMenuIcon.forceFlag,
          }}
          direction={animMenuIcon.diretion}
          goToAndPlay={animMenuIcon.goToAndPlay}
        />
      </div>
    </div>
  );
}

export default MenuIcon;
