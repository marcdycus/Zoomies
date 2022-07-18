import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconContainer from 'components/Icons/IconContainer/IconContainer';

const Svg = styled.svg`
  color: ${({ theme, color }) => theme[color]};
  width: 100%;
  height: 100%;
`;

const AppIcons = (props) => {
  const { width, height } = props;
  return (
    <IconContainer {...props}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6361 8.72727C16.046 8.72727 17.9997 6.77361 17.9997 4.36364C17.9997 1.95367 16.046 0 13.6361 0C11.2261 0 9.27244 1.95367 9.27244 4.36364C9.27244 6.77361 11.2261 8.72727 13.6361 8.72727Z"
          fill="#17C2E1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.36364 18.0001C6.77361 18.0001 8.72727 16.0464 8.72727 13.6365C8.72727 11.2265 6.77361 9.27283 4.36364 9.27283C1.95367 9.27283 0 11.2265 0 13.6365C0 16.0464 1.95367 18.0001 4.36364 18.0001Z"
          fill="#8ACE25"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6361 18.0001C16.046 18.0001 17.9997 16.0464 17.9997 13.6365C17.9997 11.2265 16.046 9.27283 13.6361 9.27283C11.2261 9.27283 9.27244 11.2265 9.27244 13.6365C9.27244 16.0464 11.2261 18.0001 13.6361 18.0001Z"
          fill="#FD7600"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.36364 8.72727C6.77361 8.72727 8.72727 6.77361 8.72727 4.36364C8.72727 1.95367 6.77361 0 4.36364 0C1.95367 0 0 1.95367 0 4.36364C0 6.77361 1.95367 8.72727 4.36364 8.72727Z"
          fill="#FB0069"
        />
      </Svg>
    </IconContainer>
  );
};

AppIcons.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

AppIcons.defaultProps = {
  height: 20,
  width: 20
};

export default AppIcons;
