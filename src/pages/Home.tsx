import { useQuery } from "@tanstack/react-query";
import { ICharcter, fetchCharacters } from "../api";
import Loader from "../components/Loader";
import Card from "../components/Card";
import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  display: block;
`;

const CardList = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
`;

function Home() {
  const { isLoading, data: charcters } = useQuery<ICharcter[]>({
    queryKey: ["charcters"],
    queryFn: fetchCharacters,
  });

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <CardList>
          {charcters?.slice(0, 100).map((charcter) => (
            <Card key={charcter.id} {...charcter} />
          ))}
        </CardList>
      )}
    </Container>
  );
}

export default Home;
