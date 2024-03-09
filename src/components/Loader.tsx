import styled, { keyframes } from "styled-components";

const breath = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.23;
    }
    100% {
      opacity: 1;
    }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 40;
  animation: ${breath} 2s infinite;
  p {
    font-size: 0px;
  }
  span {
    color: white;
  }
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
`;

function Loader() {
  return (
    <Container>
      <Guide>
        <p>📡</p>
        <span>로딩중...</span>
      </Guide>
      <Background />
    </Container>
  );
}

export default Loader;
