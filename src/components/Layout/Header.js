import styled from "styled-components";
import { RiMoonClearFill, RiMoonClearLine } from "react-icons/ri";
import { theme, lightTheme } from "../../utils/ThemeConfig";
import { device } from "../../utils/responsiveness";

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo>ThermoStar</Logo>
        <SubSection>
          <Links>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Store locator</Link>
            <Link>Contact</Link>
          </Links>
        </SubSection>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
  width: auto;
  height: 40px;
  padding: 15px 0;
  display: flex;
  align-items: stretch;
  width: 100%;
  justify-content: center;
`;

const Container = styled.div`
  width: ${theme.width};
  max-width: ${theme.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  letter-spacing: 3px;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover {
    opacity: ${theme.hoverOpacity};
  }
`;

const SubSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

const Links = styled.div`
  display: flex;
  column-gap: 30px;

  @media ${device.tablet} {
    display: none;
    visibility: hidden;
  }
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) =>
    props.theme == "dark" ? `${theme.text}` : `${theme.main}`};
  transition: ${theme.transition};
  cursor: pointer;

  &:hover {
    opacity: ${theme.hoverOpacity};
  }
`;
