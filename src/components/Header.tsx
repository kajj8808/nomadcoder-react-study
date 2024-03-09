import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: white;
  nav {
    font-size: xx-large;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">🍿</Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
