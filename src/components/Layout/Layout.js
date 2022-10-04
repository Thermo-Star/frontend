import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { defaultTheme, theme } from "../../utils/ThemeConfig";

function Layout({ children }) {
  return (
    <Container>
      <Header />
      {/* <Footer /> */}
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
