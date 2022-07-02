import NavigationItem from "./NavigationItem";
import styled from "styled-components";

const menu = ["near earth objects", "search asteroids"];

const Wrapper = styled.div`
  display: flex;
`;

const Navigation = (props) => {
  return (
    <Wrapper>
      {menu.map((item, index) => (
        <NavigationItem
          onClick={() => props.onItemClick(item)}
          key={index}
          href={item}
        >
          {item}
        </NavigationItem>
      ))}
    </Wrapper>
  );
};
export default Navigation;
