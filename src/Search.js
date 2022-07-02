import Body from "./Body";
import Box from "./components/Box";
import DatePicker from "./components/DatePicker";
import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./components/Button";
import ObjectsList from "./components/ObjectsList";

const apiKey = "FL1baQhn2IoPPbVy39O1wpK9gmXZO24UgZSf3ARW";

const Search = () => {
  const [searchedDate, setSearchedDate] = useState(new Date());
  const [objectsByDate, setObjectsByDate] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    search();
  }, []);
  const getFixedDate = (date) => {
    let d = new Date(date);

    let year = "" + d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) {
      month = "0" + month;
    }

    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };

  if (!objectsByDate) {
    return <p>Loading...</p>;
  }

  const getAsteroids = async () => {
    setState("loading");
    const fixedDate = getFixedDate(searchedDate);
    return fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fixedDate}&end_date=${fixedDate}&api_key=${apiKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => data.near_earth_objects[`${fixedDate}`])
      .catch((error) => console.log(error));
  };

  const search = () => {
    getAsteroids()
      .then((asteroids) => {
        setObjectsByDate(asteroids);
        setState("loaded");
      })
      .catch(() => setState("error"));
  };

  const asteroids = objectsByDate.map((object, i) => {
    return {
      i: i,
      name: object.name,
      date: object.close_approach_data[0].close_approach_date_full,
      magnituide: object.absolute_magnitude_h,
      orbitingBody: object.close_approach_data[0].orbiting_body,
      danger: object.is_potentially_hazardous_asteroid.toString(),
      missDistanceAstronomical: Number(
        object.close_approach_data[0].miss_distance.astronomical
      ).toFixed(5),
      missDistanceLunar: Number(
        object.close_approach_data[0].miss_distance.lunar
      ).toFixed(2),
      missDistanceKm: Number(
        object.close_approach_data[0].miss_distance.kilometers
      ).toFixed(1),
      velocityHour: Number(
        object.close_approach_data[0].relative_velocity.kilometers_per_hour
      ).toFixed(2),
      velocitySecond: Number(
        object.close_approach_data[0].relative_velocity.kilometers_per_second
      ).toFixed(2),
      estimatedDiameterMin:
        object.estimated_diameter.meters.estimated_diameter_min.toFixed(2),
      estimatedDiameterMax:
        object.estimated_diameter.meters.estimated_diameter_max.toFixed(2),
    };
  });

  const render = () => {
    switch (state) {
      case "error":
        return <p>ups</p>;
      case "loaded":
        return <ObjectsList asteroids={asteroids} />;
      case "loading":
      default:
        return <p>Loading...</p>;
    }
  };

  return (
    <Container>
      <Body>
        <Box noMargin>
          <p style={{ marginRight: "20px" }}>
            Here you can search for Near Earth Objects by date
          </p>
          <DatePicker
            searchedDate={searchedDate}
            setSearchedDate={setSearchedDate}
          />
          <Button name="Search" onClick={search}></Button>
        </Box>
      </Body>
      <Body>{render()}</Body>
    </Container>
  );
};

export default Search;
