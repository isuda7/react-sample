import classNames from 'classnames';
import React from 'react';

const CardType2 = (props) => {
  return (
    <div className={classNames('card-type2', {'is-active': props.isActive })}>
      <img src={props.src} />
      <p>{ props.title }</p>
    </div>
  );
}
export default CardType2;