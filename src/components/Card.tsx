import styled from "styled-components";
import { ICharcter } from "../api";
import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  overflow: hidden;
  a {
    display: block;
    padding: 10px;
  }
  &:hover {
    background-color: #dfe3e7;
    div div {
      transform: scale(1.3);
    }
  }
`;

const Text = styled.p`
  margin-top: 10px;
  font-weight: 600;
  font-size: small;
  color: ${(props) => props.theme.textColor};
`;

function Card(charcter: ICharcter) {
  return (
    <Container>
      <Link to={`character/${charcter.id}`} state={charcter.id}>
        <ProfileImage imageUrl={charcter.imageUrl} />
        <Text>{charcter.name}</Text>
      </Link>
    </Container>
  );
}

export default Card;
