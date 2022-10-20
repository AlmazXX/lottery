import React from 'react';
import './Lot.css';

interface LotProps extends React.PropsWithChildren{
  children: number;
}

const Lot: React.FC<LotProps> = ({children}) => {
  return (
      <span className='lot'>{children}</span>
  );
};

export default Lot;