import React from 'react';
import { Typography } from 'antd';
import { MainLayout } from './styles';

function Layout(props) {
  const { centered } = props;
  return (
    <MainLayout centered={centered}>
      <Typography.Title>Darf Stock</Typography.Title>
      {props.children}
    </MainLayout>
  );
}

export default Layout;
