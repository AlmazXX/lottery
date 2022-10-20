import React from 'react';

interface LotProps {
  number: number;
}

const Lot: React.FC<LotProps> = props => {
  return (
    <div className='Lot-wrapper'>
      <span className='lot-number'>{props.number}</span>
    </div>
  );
};

export default Lot;