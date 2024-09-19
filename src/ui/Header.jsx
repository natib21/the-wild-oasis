import styled, { css } from "styled-components"



const Heading = styled.h1`

${
props => props.as === "h1" && css`
  font-size: 3rem;
  font-weight:600;
  text-transform: capitalize;
  color: var(--color-brand-300);
  background-color: yellow;`
}
${
props => props.as === "h2" && css`
  font-size: 2rem;
  font-weight:600;
  text-transform: capitalize;
  color: var(--color-brand-300);
 `
}
${
props => props.as === "h3" && css`
  font-size: 30px;
  font-weight:100;
  text-transform: capitalize;
  color: var(--color-brand-50);
  background-color: purple;
  text-align: center;
  max-width: 10rem;
  border-radius: var(--border-radius-sm);
 `
}

`
export default Heading