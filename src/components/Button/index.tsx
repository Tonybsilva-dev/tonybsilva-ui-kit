import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  /**
   * My Pattern of color
   */
  backgroundColor?: string;
  /**
   * Color of button
   */
  color?: string;

};

const style: React.CSSProperties = {
backgroundColor: '#e02041',
color: '#fff',
};

export const Button: React.FC<Props> = ({ 
  children, 
  backgroundColor = '#e02041', 
  color = '#fff', 
}) => {
  return <button style={style}>{children}</button>;
};

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string
  
}