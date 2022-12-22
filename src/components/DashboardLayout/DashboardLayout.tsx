import React, { Children } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'
import Sidebar from './Sidebar';
import Header from './Header';

type ContainerPropsType = {
  column?: boolean
}
const Container = styled.div<ContainerPropsType>`
      display: flex;
      flex-direction: ${props => props.column ? "column" : "row"};
      flex:1;
`;


const Content = styled.div`
  flex:1;
`
export const DashboardLayout = () => {
  return (
    <div>
      <Container>
        <Sidebar />
        <Container column>
          <Header />
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Container>
    </div>
  );
};
