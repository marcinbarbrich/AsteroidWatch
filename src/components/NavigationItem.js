import styled from "styled-components";

const NavigationItem = styled.div`
  color: white;
  display: block;
  text-decoration: none;
  text-transform: capitalize;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(256, 256, 256, 0.2);
  }
`;

export default NavigationItem;
