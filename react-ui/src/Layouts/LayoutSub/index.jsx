import React from 'react';
import { Outlet } from 'react-router-dom';
import { SubHeader, SubFooter } from '../components';
import '../../Assets/styles.scss';

const LayoutSub = ({children}) => {
  return (
    <div className='sub-wrapper'>
      <SubHeader/>
      <Outlet />
      <SubFooter/>
    </div>
  );
}
export default LayoutSub;