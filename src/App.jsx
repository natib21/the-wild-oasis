import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
const H1 = styled.h1`
  font-size: 30px;
  font-weight:600;
  text-transform: capitalize;
  color: red;
  background-color: yellow;
`


const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`
const App = () => {
  return (<>
  <GlobalStyle />
  <StyledApp>

   <H1>The Wild Oasis </H1>
   <Button onClick={()=>alert("Hello ")}>Check in</Button>
   <Input type="number" placeholder="Number of Guest" />
  </StyledApp>
  </>
  )
}
export default App