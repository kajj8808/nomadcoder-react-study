import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(20px);
  z-index: 100;
`;

const ItemList = styled.ul`
  display: flex;
  gap: 40px;
  padding: 20px 0;
`;

const Item = styled.li`
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  position: relative;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.textColor};
`;

function Header() {
  const popularMatch = useMatch("/");
  const comingSoonMatch = useMatch("/coming-soon");
  const nowPlayingMatch = useMatch("/now-playing");

  function setZeroScroll() {
    window.scrollTo(0, 0);
  }

  return (
    <Nav>
      <ItemList>
        <Item>
          <Link to={"/"} onClick={setZeroScroll}>
            <span> popular </span>
            {popularMatch && (
              <Circle
                style={{ originY: "0px" }}
                viewport={{ once: true }}
                layoutId="circle"
              />
            )}
          </Link>
        </Item>
        <Item>
          <Link to={"/coming-soon"} onClick={setZeroScroll}>
            <span> coming soon </span>
            {comingSoonMatch && (
              <Circle
                style={{ originY: "0px" }}
                viewport={{ once: true }}
                layoutId="circle"
              />
            )}
          </Link>
        </Item>
        <Item>
          <Link to={"/now-playing"} onClick={setZeroScroll}>
            <span> now playing </span>
            {nowPlayingMatch && (
              <Circle
                style={{ originY: "0px" }} // 아래에서 부터 animate가 실행 되는걸 막기위해 사용.
                viewport={{ once: true }}
                layoutId="circle"
              />
            )}
          </Link>
        </Item>
      </ItemList>
    </Nav>
  );
}

export default Header;
