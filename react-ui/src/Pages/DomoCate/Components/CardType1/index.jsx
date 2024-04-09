import React from 'react';

const CardType1 = (props) => {
  return (
    <div className="card-type1">
      <p>{ props.cate }</p>
      <p>{ props.name }</p>
      <p>{ props.title }</p>
    </div>
  );
}
export default CardType1;