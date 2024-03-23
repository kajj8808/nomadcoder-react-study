import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { IMovie, IMovieDetail, getMovie, makeBgPath } from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Loader from "./Loader";
import { formatNumber } from "../utiles";

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled(motion.div)`
  position: absolute;
  width: 80%;
  max-width: 720px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10%;
  z-index: 300;
  padding: 65px 20px 30px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ImgBox = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Img = styled.img`
  width: 100%;
  transition: width 0.5s ease;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  svg {
    position: relative;
    top: 10px;
    left: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  margin-top: 15px;
`;
const Overview = styled.span`
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.5);
  width: 80%;
`;

const Fields = styled.ul`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const Filed = styled.li`
  text-align: center;
  h3 {
    font-size: 15px;
    font-weight: 600;
  }
  p {
    margin-top: 8px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 15px;
  /*   right: 20px; */
  cursor: pointer;
  svg {
    width: 36px;
    height: 36px;
  }
`;

const ContainerVariants: Variants = {
  initial: { scaleX: -0.5 },
  animate: { scaleX: 1 },
};

function DetailModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery<IMovieDetail>(["detail", id], () =>
    getMovie(id ?? "")
  );

  useEffect(() => {
    if (!isLoading && !data?.id) return navigate("/");
    console.log(data);
  }, [isLoading]);

  function goBack() {
    navigate(-1);
  }

  function openWebPageModeBlank(url: string) {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.location.href = url;
    }
  }

  return (
    <>
      {id ? (
        <Container
          layoutId={id}
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
          {data ? (
            <>
              <ImgBox>
                <Img src={makeBgPath(data.backdrop_path)} loading="lazy" />
              </ImgBox>
              <TitleBox>
                <Title> {data.title} </Title>
                <svg
                  onClick={() => openWebPageModeBlank(data.homepage)}
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"></path>
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"></path>
                </svg>
              </TitleBox>

              <Overview> {data.overview} </Overview>

              <Fields>
                <Filed>
                  <h3>Budget</h3>
                  <p>${formatNumber(data.budget)}</p>
                </Filed>
                <Filed>
                  <h3>Revenue</h3>
                  <p>${formatNumber(data.revenue)}</p>
                </Filed>
                <Filed>
                  <h3>Runtime</h3>
                  <p>{data.runtime}m</p>
                </Filed>
                <Filed>
                  <h3>Rating</h3>
                  <p>{data.vote_average.toFixed(1)}</p>
                </Filed>
              </Fields>
              <CloseBtn onClick={goBack}>
                <svg
                  data-slot="icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                  ></path>
                </svg>
              </CloseBtn>
            </>
          ) : (
            <>
              <Loader />
            </>
          )}
        </Container>
      ) : null}
      <Overlay onClick={goBack} />
    </>
  );
}

export default DetailModal;
