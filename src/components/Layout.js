import styled from "styled-components";
import { useTheme } from "../../context/themeProvider";
import CloudAnimation from "./CloudAnimation";
import Footer from "./Footer";
import Title from "./Title";

export default function Layout({ children }) {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <>
      <Container>
        <Title />
        <CloudAnimation toggle={toggleTheme} mode={themeMode} />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.section`
  padding: 15px 10px 0;

  main {
    height: calc(100vh - 305px);
    overflow-y: scroll;
    z-index: 999;
    position: relative;

    &::-webkit-scrollbar {
      width: 10px;
    }
  }
`;
