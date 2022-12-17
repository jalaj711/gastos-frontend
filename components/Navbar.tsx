import {
  faChartSimple,
  faWallet,
  IconDefinition,
  faMoneyBillTransfer,
  faAdd,
  faTags,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../utils/colors";
import { useRouter } from "next/router";
import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
function NavbarItem(props: {
  active?: boolean;
  text: string;
  icon: IconDefinition;
  href: string;
  onClick?: MouseEventHandler;
}) {
  const router = useRouter();
  const active = props.active || router.asPath === props.href;

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    props.href !== "" && router.push(props.href);
    props.onClick && props.onClick(evt);
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
          transition: all 150ms linear;
          animation: zoom-in 150ms ease-out forwards;
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

        @keyframes zoom-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </a>
  );
}
const page1Links: { [path: string]: [string, IconDefinition] } = {
  "/add": ["add", faAdd],
  "/transactions": ["transacts", faMoneyBillTransfer],
  "/dashboard": ["dashboard", faChartSimple],
};
const page2Links: { [path: string]: [string, IconDefinition] } = {
  "/labels": ["labels", faTags],
  "/wallets": ["wallets", faWallet],
  "/user": ["user", faUser],
};
function Navbar() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (Object.keys(page1Links).indexOf(router.asPath) > -1) setPage(1);
    else if (Object.keys(page2Links).indexOf(router.asPath) > -1) setPage(2);
  }, [router.asPath]);
  return (
    <div className="navbar">
      <div className="icons" style={page === 2 ? { display: "none" } : {}}>
        {Object.keys(page1Links).map((elem) => (
          <NavbarItem
            key={elem}
            text={page1Links[elem][0]}
            href={elem}
            icon={page1Links[elem][1]}
          />
        ))}
        <NavbarItem
          href=""
          text=""
          icon={faAngleRight}
          onClick={() => setPage(2)}
        />
      </div>
      <div className="icons" style={page === 1 ? { display: "none" } : {}}>
        <NavbarItem
          href=""
          text=""
          icon={faAngleLeft}
          onClick={() => setPage(1)}
        />
        {Object.keys(page2Links).map((elem) => (
          <NavbarItem
            key={elem}
            text={page2Links[elem][0]}
            href={elem}
            icon={page2Links[elem][1]}
          />
        ))}
      </div>
      <style jsx>
        {`
          .navbar {
            width: 100%;
            height: 64px;
            position: fixed;
            bottom: 0;
            left: 0;
            padding-bottom: 8px;
            padding-top: 8px;
          }
          .icons {
            display: flex;
            width: 100%;
            height: min-content;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
