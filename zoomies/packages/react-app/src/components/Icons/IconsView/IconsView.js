import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Icons from '../Icons';

const StyledIconViewStyledSection = styled.div`
  display: block;
  padding: 50px;
`;

const StyledSection = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  > *:first-child {
    margin: auto;
  }
`;

const StyledNameText = styled.div`
  float: left;
  width: 100%;
  padding-top: 10px;
  text-align: center;
`;

const IconsView = ({ color }) => {
  return (
    <StyledIconViewStyledSection>
      {Object.keys(Icons).map((icon, index) => {
        let Icon = Icons[icon];
        return (
          icon !== 'IconContainer' && (
            <StyledSection key={index}>
              <Icon color={color} height={50} width={50} />
              <StyledNameText>{icon}</StyledNameText>
            </StyledSection>
          )
        );
      })}
    </StyledIconViewStyledSection>
  );
};

IconsView.propTypes = {
  color: PropTypes.string
};

export default IconsView;
