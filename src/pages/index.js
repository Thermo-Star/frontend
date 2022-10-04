import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import { device } from "../utils/responsiveness";
import { theme } from "../utils/ThemeConfig";
import animationData from "../../public/assets/lotties/comming-soon.json";

function CommingSoon() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Lottie options={defaultOptions} height={400} width={800} />
    </Wrapper>
  );
}

export default CommingSoon;

const Wrapper = styled.div`
  background: ${theme.colors.white};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: ${theme.colors.lightCyan};
  padding: 20px 100px;
  border-radius: 10px;
`;

const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 10px;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
