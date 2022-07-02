import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: ${({ noMargin, center, lowMargin }) =>
    noMargin ? 0 : center ? "0 auto" : lowMargin ? `10px` : `20px`};
`;

export default Box;
