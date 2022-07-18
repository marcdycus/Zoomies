import React from 'react';

import styled from 'styled-components';

import IconContainer from '../IconContainer';

const Svg = styled.svg`
  color: ${({ theme, color }) => theme[color]};
  height: 100%;
  width: 100%;
`;

const Bookmark = () => {
  return (
    <IconContainer>
      <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="M9,18H0V9a9,9,0,1,1,9,9ZM20,9.08h0A11.008,11.008,0,0,1,9.08,20h0A8,8,0,0,0,16,24h8V16A8,8,0,0,0,20,9.08Z" />
      </Svg>
    </IconContainer>
  );
};

export default Bookmark;
