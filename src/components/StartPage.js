const imgStyle = {
  width: "100vw",
  height: "110vh",
  objectFit: "cover",
};

const paragraphStyle = {
  position: "absolute",
  color: "white",
  top: "15%",
  left: "20%",
  fontFamily: "Nunito Sans, sans-serif",
  fontWeight: "600",
  fontSize: "4rem",
};
const StartPage = () => {
  return (
    <>
      <p style={paragraphStyle}>
        Are we in
        <br /> danger?
      </p>
      <img
        style={imgStyle}
        alt="asteroid"
        src="https://d.newsweek.com/en/full/1967684/asteroid.jpg"
      ></img>
    </>
  );
};

export default StartPage;
