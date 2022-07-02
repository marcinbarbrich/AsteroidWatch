import styled from "styled-components";

const Container = styled.div`
  width: 1250px;
  margin: 0 auto;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  justify-content: ${({ spaceBetween, center }) =>
    spaceBetween ? "space-between" : center ? "center" : "flex-start"};
  align-items: ${({ center, bottom, stretch }) =>
    center
      ? "center"
      : bottom
      ? "flex-end"
      : stretch
      ? "stretch"
      : "flex-start"};
`;

export default Container;
