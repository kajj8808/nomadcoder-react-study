import { Variants, motion } from "framer-motion";
import styled from "styled-components";

const Svg = styled(motion.svg)`
  width: 52px;
  height: 52px;
  color: ${(props) => props.theme.textColor};
  position: absolute;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

const SvgVariants: Variants = {
  hover: {
    scale: 1.3,
    y: -10,
  },
};
/* 오류..오류.. */
function PageUpBtn() {
  function setZeroScroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Svg
        data-slot="icon"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        whileHover="hover"
        variants={SvgVariants}
        onClick={setZeroScroll}
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
        ></path>
      </Svg>
    </>
  );
}

export default PageUpBtn;
