import styled from "styled-components"
import GlobalStyle from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Header"


const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`
const App = () => {
  return (<>
  <GlobalStyle />
  <StyledApp>

   <Heading as="h1">The Wild Oasis </Heading>
   <Heading as="h2">Check in and out </Heading>
   
   <Button onClick={()=>alert("Hello ")}>Check in</Button>
   <Input type="number" placeholder="Number of Guest" />
   <Heading as="h3">form </Heading>
  </StyledApp>
  </>
  )
}
export default App