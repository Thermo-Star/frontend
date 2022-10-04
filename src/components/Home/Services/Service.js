import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../../utils/responsiveness";
import { theme } from "../../../utils/ThemeConfig";

function Service({ name, image, desc }) {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <OnHover visibility={hoverState}>{desc}</OnHover>
      {name}
      <img src="https://www.mysyara.com/static/mysyara_lp_v4/media/doorstep-mechanic.f63aa4fe2151886fb879.png"></img>
    </Wrapper>
  );
}

export default Service;

const Wrapper = styled.div`
  background: ${theme.colors.lighterCyan};
  padding: 30px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all ease 100ms;
  cursor: pointer;
  img {
    height: 100px;
    width: 100px;
  }

  @media ${device.laptop} {
    font-size: 13px;
  }
`;

const OnHover = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  color: white;
  display: flex;
  align-items: center;
  font-weight: 200;
  text-align: center;
  transition: all ease-in 100ms;
  opacity: ${(props) => (props.visibility ? "100%" : "0%")};
`;
