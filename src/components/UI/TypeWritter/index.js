import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TypeWitter({ wordsToType }) {
  const [typeWriteSettings, setTypeWriteSettings] = useState({
    indexCurrentWord: 0,
    isIncriment: true,
    iCurrentWord: 0,
    txt: '',
  });

  useEffect(() => {
    const currentWord = wordsToType[typeWriteSettings.indexCurrentWord];

    function handleTradeWord(prevState) {
      if (prevState.iCurrentWord === 0) {
        if (wordsToType.length - 1 === prevState.indexCurrentWord) {
          return 0;
        }
        return prevState.indexCurrentWord + 1;
      }
      return prevState.indexCurrentWord;
    }

    if (typeWriteSettings.isIncriment) {
      if (typeWriteSettings.iCurrentWord <= currentWord.length) {
        setTimeout(() => {
          setTypeWriteSettings((prevState) => ({
            ...typeWriteSettings,
            txt: currentWord.substring(0, typeWriteSettings.iCurrentWord),
            iCurrentWord: prevState.iCurrentWord + 1,
            isIncriment: typeWriteSettings.iCurrentWord !== currentWord.length,
          }));
        }, 100);
      }
    } else if (!typeWriteSettings.isIncriment) {
      if (typeWriteSettings.iCurrentWord >= 0) {
        setTimeout(() => {
          setTypeWriteSettings((prevState) => ({
            indexCurrentWord: handleTradeWord(prevState),
            txt: currentWord.substring(0, typeWriteSettings.iCurrentWord),
            iCurrentWord: prevState.iCurrentWord - 1,
            isIncriment: typeWriteSettings.iCurrentWord === 0,
          }));
        }, 100);
      }
    }
  }, [typeWriteSettings]);

  return `${typeWriteSettings.txt}|`;
}

TypeWitter.propTypes = {
  wordsToType: PropTypes.arrayOf(PropTypes.string),
};

export default TypeWitter;
