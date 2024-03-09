import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const Container = styled.div``;
const Main = styled.main`
  margin-top: 100px;
  padding: 0px 20px;
`;

function RootLayout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

export default RootLayout;
