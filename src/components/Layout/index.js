import React from 'react';
import { MainLayout } from './styles';

function Layout(props) {
  const { centered } = props;
  return (
    <MainLayout centered={centered}>{props.children}</MainLayout>
  );
}

export default Layout;
