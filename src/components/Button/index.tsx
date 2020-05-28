import React from 'react';

interface Props {
  backgroundColor?: string;
  color?: string;

};

const style: React.CSSProperties = {
backgroundColor: '#e02041',
color: '#fff'
};

export const Button: React.FC<Props> =  ({ 
  children, 
  backgroundColor = '#e02041', 
  color = '#fff', 
}) => {
  return <button style={style}>{children}</button>
};