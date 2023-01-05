import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import { FullPageLoading } from './FullPageLoading/FullPageLoading';

/*
Still to be Implemented:
  Links for sidebar, header.
  Dynamic name and user photos for header.
  Actions for search input
*/

type ContainerPropsType = {
  column?: boolean;
};
const Container = styled.div<ContainerPropsType>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex: 1;
  background: url(/src/assets/image/back.png);
  background-size: cover;
`;

type ContentPropsType = {
  dashboard?: boolean;
};

const Content = styled.div<ContentPropsType>`
  flex: 1;
  padding: ${(props) => (props.dashboard ? '3px 32px 34px' : '38px 24px')};
`;
type DashBoardConfigType = {
  type?: 'dashboard' | 'monitoring';
};
export const DashBoardContext = createContext<DashBoardConfigType>({
  type: 'monitoring',
});

type DashboardPropsType = {
  type?: 'dashboard' | 'monitoring';
};

export const DashboardLayout = ({
  type = 'monitoring',
}: DashboardPropsType) => {
  const { logOut, loading } = useAuth();

  return (
    <>
      {loading ? (
        <FullPageLoading />
      ) : (
        <DashBoardContext.Provider value={{ type }}>
          <Container>
            <Sidebar />
            <Container column>
              <Header />
              <Content dashboard={type === 'dashboard'}>
                <Outlet />
              </Content>
            </Container>
          </Container>
        </DashBoardContext.Provider>
      )}
    </>
  );
};
