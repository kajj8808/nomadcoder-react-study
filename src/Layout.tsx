import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import PageUpBtn from "./components/PageUpBtn";
import { useEffect } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;

const OutletContainer = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default function App() {
  useEffect(() => {
    document.title = "Final Push ( Movie App )";
  }, []);
  return (
    <Container>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </Container>
  );
}
