import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/ThemeConfig";
import { FaChevronDown } from "react-icons/fa";
import { keyframes } from "styled-components";
import { device } from "../../utils/responsiveness";

function HeroSection() {
  return (
    <Wrapper>
      <Container>
        <FirstColumn>
          <Heading1>Car Service For The Digital Age</Heading1>
          <Paragraph>
            Worry-free, affordable, high quality and convenient car care
            services. Full parts & service warranties with convenient payment
            options. All at your fingertips.
          </Paragraph>
        </FirstColumn>
      </Container>
      <ScrollToService>
        Check out our services <FaChevronDown className="icon" />
      </ScrollToService>
    </Wrapper>
  );
}

export default HeroSection;

const Wrapper = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background: ${theme.colors.lighterCyan};
  color: ${theme.colors.oxfordBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: ${theme.width};
  max-width: ${theme.maxWidth};
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }
`;

const Heading1 = styled.h1`
  font-weight: 500;
  font-size: 40px;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
  color: ${theme.colors.oxfordBlue};
  @media ${device.tablet} {
    font-size: 13px;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const bounce = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(0.1em); }
    70% { transform: translateY(0.15em); }
    100% { transform: translateY(0); }
`;

const ScrollToService = styled.div`
  background-color: ${theme.colors.oxfordBlue};
  color: ${theme.colors.mintCream};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  cursor: pointer;

  .icon {
    animation: ${bounce} 0.7s infinite linear;
  }
`;
