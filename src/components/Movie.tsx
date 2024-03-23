import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../api";

const Box = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  span {
    color: ${(props) => props.theme.textColor};
    font-size: 12px;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: center;
  }
`;

const ImgBox = styled(motion.div)`
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
  }
`;
interface IMovie {
  title: string;
  poster_path: string;
  id: number;
}

const boxVariants: Variants = {
  hidden: { y: 20, opacity: 0, scaleX: -0.5 },
  visible: {
    y: 0,
    opacity: 1,
    scaleX: 1,
  },
};

const ImgBoxVariants: Variants = {
  hover: {
    scale: 1.2,
    y: -30,
  },
};

function Movie({ title, poster_path, id }: IMovie) {
  return (
    <Box to={`${id}`} variants={boxVariants} layoutId={id + ""}>
      <ImgBox whileHover="hover" variants={ImgBoxVariants}>
        <img src={makeImagePath(poster_path)} alt={title} />
      </ImgBox>
      <span>{title}</span>
    </Box>
  );
}

export default Movie;
