import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Header";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis </Heading>
            <div>
              <Heading as="h2">Check in and out </Heading>
              <Button onClick={() => alert("Hello ")}>Check in</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("Hello ")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">form </Heading>
            <form>
              <Input type="number" placeholder="Number of Guest" />
              <Input type="number" placeholder="Number of Guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
};
export default App;
