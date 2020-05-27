import React from 'react';

const styles: React.CSSProperties = {
backgroundColor: '#7159c1',
color: '#fff'
}

export const Button: React.FC =  ({ children }) => {
  return (
    <button>{children}</button>
  )
}