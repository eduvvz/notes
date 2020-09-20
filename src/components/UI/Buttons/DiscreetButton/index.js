import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tooltip, Typography } from '@material-ui/core';

function DiscreetButton({ label, onClick, icon, tooltip }) {
  const btnChildren = icon || (
    <Typography variant="caption">
      <Box fontStyle="italic" fontWeight="fontWeightBold" component="span">
        {label}
      </Box>
    </Typography>
  );

  return (
    <button type="button" onClick={onClick}>
      {tooltip ? <Tooltip title={tooltip}>{btnChildren}</Tooltip> : btnChildren}
    </button>
  );
}

DiscreetButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  tooltip: PropTypes.string,
};

export default DiscreetButton;
