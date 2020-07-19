import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ButtonEl = styled.button`
  color: white;
  background-color: ${(props) =>
    props.type === 'primary'
      ? 'green'
      : props.type === 'secondary'
      ? 'blue'
      : 'red'};
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  &:hover {
    color: inherit;
  }
`;

const Button = (props) => {
  const { children, type, onClick } = props;
  return (
    <Fragment>
      <ButtonEl onClick={onClick} type={type}>
        {children}
      </ButtonEl>
    </Fragment>
  );
};

Button.propTypes = {
  /* Set the text for the button */
  children: PropTypes.string.required,
  /* Set the type of the button */
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Button.defaultProps = {
  type: 'primary',
};
export default Button;
