import React from 'react';
import TopMenu from '../components/TopMenu';
import BottomMenu from '../components/BottomMenu';
import CenterText from '../components/CenterText';

const Murphys = () => (
  <div className="d-flex flex-column min-vh-100">
    <TopMenu />
    <CenterText />
    <BottomMenu />
  </div>
);

export default Murphys;