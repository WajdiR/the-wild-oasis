import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: yellow;
`;

const StyledApp = styled.div`
  background-color: red;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Helloo world! </H1>
        <Button>Click</Button>
        <Input type="number" placeholder="select a number "></Input>
      </StyledApp>
    </>
  );
}

export default App;
