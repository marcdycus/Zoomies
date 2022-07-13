import React from 'react';

// import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconContainer from 'components/Icons/IconContainer/IconContainer';

const Svg = styled.svg`
  color: ${({ theme, color }) => theme[color]};
  height: 100%;
  width: 100%;
`;

const Bookmark = () => {
  return (
    <IconContainer>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        id="Filled"
        viewBox="0 0 24 24"
        width="512"
        height="512">
        <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" />
      </Svg>
    </IconContainer>
  );
};

export default Bookmark;
