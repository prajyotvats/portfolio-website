import "./navbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

function Navbar({ menuOpen, setMenuOpen }) {
  // function handleChange() {
  //   setMenuOpen((prevState) => !prevState);
  // }

  return (
    <div className={"nav " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Prajyot
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 7756067044</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>prajyotvedant123@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
