import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function FolderItems({ folderId }) {
  useEffect(() => {}, [folderId]);

  return <></>;
}

FolderItems.propTypes = {
  folderId: PropTypes.string,
};

export default FolderItems;
