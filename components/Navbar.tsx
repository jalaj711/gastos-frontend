import { faChartSimple, faPlus, faGaugeHigh, faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../utils/colors";
function NavbarItem(props: {
  active?: boolean;
  text: string;
  icon: IconDefinition;
}) {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} style={{fontSize: '16px'}} />
      {props.active && <span>{props.text}</span>}
      <style jsx>{`
        div {
          padding: 8px 16px;
          height: 48px;
          min-width: 48px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: "Roboto";
          font-weight: 700;
          border-radius: 24px;
          color: white;
          width: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
          ${props.active &&
          "background: " + colors.primary + ";color: " + colors.textOnPrimary}
        }

        div:hover {
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
          );
          cursor: pointer;
        }

        span {
          margin-left: 8px;
        }
      `}</style>
    </div>
  );
}
function Navbar() {
  return (
    <div className="navbar">
      <NavbarItem text="dashboard" icon={faChartSimple} active />
      <NavbarItem text="add" icon={faPlus}/>
      <NavbarItem text="perform" icon={faGaugeHigh} />
      <NavbarItem text="profile" icon={faUser} />
      <style jsx>
        {`
          .navbar {
            display: flex;
            width: 100%;
            height: 64px;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: 0;
            left: 0;
            padding-bottom: 8px;
            padding-top: 8px;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
