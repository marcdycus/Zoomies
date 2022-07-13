import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconContainer = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: relative;
`;

const IconContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  return <StyledIconContainer {...props}>{props.children}</StyledIconContainer>;
};

IconContainer.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

IconContainer.defaultProps = {
  height: 20,
  width: 20
};

IconContainer.displayName = 'IconContainer';

export default IconContainer;
