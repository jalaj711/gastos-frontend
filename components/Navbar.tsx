import {
  faChartSimple,
  faUser,
  IconDefinition,
  faDollarSign,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../utils/colors";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
function NavbarItem(props: {
  active?: boolean;
  text: string;
  icon: IconDefinition;
  href: string;
}) {
  const router = useRouter();
  const active = props.active || (router.asPath === props.href);

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    router.push(props.href);
  };
  return (
    <a href={props.href} onClick={handleClick}>
      <FontAwesomeIcon icon={props.icon} style={{ fontSize: "16px" }} />
      {active && <span>{props.text}</span>}
      <style jsx>{`
        a {
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
          backdrop-filter: blur(4px);
          ${active &&
          "background: " + colors.primary + ";color: " + colors.textOnPrimary}
        }

        a:hover {
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
    </a>
  );
}
function Navbar() {
  return (
    <div className="navbar">
      <NavbarItem href="/dashboard" text="dashboard" icon={faChartSimple} />
      <NavbarItem href="/add" text="add" icon={faAdd} />
      <NavbarItem href="/transactions" text="transacts" icon={faDollarSign} />
      <NavbarItem href="/profile" text="profile" icon={faUser} />
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
