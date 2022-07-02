import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 5px 50px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  margin: 0 20px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Button = (props) => {
  return <Btn onClick={props.onClick}>{props.name}</Btn>;
};

export default Button;
