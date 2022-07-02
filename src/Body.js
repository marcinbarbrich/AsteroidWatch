import styled from "styled-components";

const Body = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ rowDirection }) => (rowDirection ? "row" : "column")};
  background-color: rgba(256, 256, 256, 0.2);
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px 100px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255);
  animation: 1s ease-out 0s 1 slideInFromTop;

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-150%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
    0% {
      transform: translateY(-150%);
      opacity: 0;
    }
  }
`;

export default Body;
