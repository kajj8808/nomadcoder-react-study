import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../api";
import Loader from "../components/Loader";
import styled from "styled-components";
import ProfileImage from "../components/ProfileImage";
import { useEffect } from "react";

type RouteParams = {
  id: string;
};

interface ICharacter {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: large;
  font-weight: 600;
  margin-top: 5px;
`;
const FilmList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FilmItem = styled.li`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  border-radius: 10px;
`;

function Detail() {
  const { id } = useParams<RouteParams>();

  const { isLoading, data: characterData } = useQuery<ICharacter>({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterDetail(id!),
  });

  useEffect(() => {
    if (characterData) {
      document.title = `Detail {${characterData.name}}`;
    } else {
      document.title = "Detail/Loading...";
    }
  }, [characterData]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <ProfileImage imageUrl={characterData?.imageUrl} size="lg" />
          <Title>{characterData?.name} Films</Title>
          <Link to={characterData?.sourceUrl ?? "/"} target="_blank">
            source
          </Link>
          <FilmList>
            {characterData?.films.map((film, key) => (
              <FilmItem key={key}>{film}</FilmItem>
            ))}
          </FilmList>
        </Container>
      )}
    </div>
  );
}

export default Detail;
