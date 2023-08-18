import myphoto from "../assets/myphoto.png";
import { Link } from "react-router-dom";
const Upper = () => {
  return (
    <div className="App" style={{ marginTop: "3rem" }}>
      <div className="container">
        <img
          src={myphoto}
          alt="myPhoto"
          style={{ borderRadius: "50%", width: "15%", marginLeft: "43%" }}
        ></img>
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
          Muhammad Akbar Rahman
        </h1>
        <div className="d-flex justify-content-center">
          <Link
            to="/"
            style={{ paddingLeft: "5%", paddingRight: "3%", color: "gray" }}
            className="notextdecornav"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/projects"
            style={{ paddingRight: "3%", color: "gray" }}
            className="notextdecornav"
          >
            <span>Projects</span>
          </Link>
          <Link
            to="/certificates"
            className="notextdecornav"
            style={{ paddingRight: "3%", color: "gray" }}
          >
            <span>Certificates</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Upper;
