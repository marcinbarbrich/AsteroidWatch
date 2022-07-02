import Body from "../Body";
import Container from "../Container";

const NEO = () => {
  return (
    <Container>
      <Body>
        <h3>Look up in the sky! What are Near-Earth Objects?</h3>
        <p>
          Near-Earth objects are asteroids and comets with orbits that bring
          them to within 120 million miles (195 million kilometers) of the Sun,
          which means they can circulate through the Earth's orbital
          neighborhood. Most near-Earth objects are asteroids that range in size
          from about 10 feet (a few meters) to nearly 25 miles (40 kilometers)
          across.
        </p>
        <p>
          The orbit of each object is computed by finding the elliptical path
          through space that best fits all the available observations, which
          often span many orbits over many years or decades. As more
          observations are made, the accuracy of an object's orbit improves
          dramatically, and it becomes possible to predict where an object will
          be years or even decades into the future – and whether it could come
          close to Earth.
        </p>
      </Body>
    </Container>
  );
};

export default NEO;
