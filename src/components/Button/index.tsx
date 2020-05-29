import React from 'react';

import { Container } from './styles';

export interface Props {
  /**
   * Button color
   */
  backgroundColor?: string;
  /**
   * String color
   */
  color?: string;

}
export const Button: React.FC<Props> = ({ 
  children, 
  backgroundColor = '#e02041', 
  color = '#fff', 
}) => {
  return <Container backgroundColor={backgroundColor} color={color}>{children}</Container>;
}
