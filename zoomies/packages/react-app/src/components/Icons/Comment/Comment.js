import React from 'react';

import styled from 'styled-components';

import IconContainer from '../IconContainer';

const Svg = styled.svg`
  color: ${({ theme, color }) => theme[color]};
  height: 100%;
  width: 100%;
`;

const Comment = () => {
  return (
    <IconContainer>
      <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="M24,16v8H16a8,8,0,0,1-6.92-4,10.968,10.968,0,0,0,2.242-.248A5.988,5.988,0,0,0,16,22h6V16a5.988,5.988,0,0,0-2.252-4.678A10.968,10.968,0,0,0,20,9.08,8,8,0,0,1,24,16ZM18,9A9,9,0,0,0,0,9v9H9A9.01,9.01,0,0,0,18,9ZM2,9a7,7,0,1,1,7,7H2Z" />
      </Svg>
    </IconContainer>
  );
};

export default Comment;
