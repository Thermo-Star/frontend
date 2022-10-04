import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { device } from "../../utils/responsiveness";
import { theme } from "../../utils/ThemeConfig";
import Service from "./Services/Service";

const servicesList = [
  {
    name: "Auto General Repairing",
    image:
      "https://www.mysyara.com/static/mysyara_lp_v4/media/doorstep-mechanic.f63aa4fe2151886fb879.png",
  },
  { name: "Auto Mechanical Repair", image: "" },
  { name: "Refrigerated Trailers Repair", image: "" },
  { name: "Tire Fitting & Repairing", image: "" },
  { name: "Car Washing & Cleaning", image: "" },
  { name: "Motorcycles Repairing", image: "" },
  { name: "Auto Denting & Painting", image: "" },
  { name: "Mobile Auto Repair Services", image: "" },
  { name: "Auto Air Conditioning Repair", image: "" },
];

function Services() {
  return (
    <Wrapper>
      <Container>
        <Heading1>Wide Range Of Car Services</Heading1>
        <Paragraph>A quick look at all the services provided by us</Paragraph>
        <SerivceList>
          {servicesList.map((service) => {
            return (
              <Service
                key={service.name}
                name={service.name}
                image={service.image}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur erat est, ac consectetur ipsum accumsan vehicula."
                }
              />
            );
          })}
        </SerivceList>
        <MoreServices>
          All services <FaChevronRight className="icon" />
        </MoreServices>
      </Container>
    </Wrapper>
  );
}

export default Services;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 30px;
  background: white;
  color: ${theme.colors.oxfordBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    height: auto;
  }
`;

const Container = styled.div`
  width: ${theme.width};
  max-width: ${theme.maxWidth};
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: auto;
  }
`;

const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 10px;

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

const SerivceList = styled.div`
  display: grid;
  width: 100%;
  margin: 20px 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const bounce = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(0.1em); }
    70% { transform: translateX(0.15em); }
    100% { transform: translateX(0); }
`;

const MoreServices = styled.div`
  background-color: ${theme.colors.oxfordBlue};
  color: ${theme.colors.mintCream};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: 5px;
  cursor: pointer;

  .icon {
    animation: ${bounce} 0.7s infinite linear;
  }
`;
