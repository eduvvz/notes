import React from 'react';
import Typewriter from 'typewriter-effect';
import PropTypes from 'prop-types';

function TypeWitterUI({ wordsToType }) {
  return (
    <Typewriter
      options={{
        strings: wordsToType,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

TypeWitterUI.propTypes = {
  wordsToType: PropTypes.arrayOf(PropTypes.string),
};

export default TypeWitterUI;
