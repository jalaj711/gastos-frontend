import { ReactNode } from "react";
import colors from "../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function button(props: {
  children: ReactNode;
  outlined?: boolean;
  fullRadius?: boolean;
  icon?: IconDefinition;
}) {
  return (
    <>
      <button>
        {props.icon && (
          <FontAwesomeIcon icon={props.icon} style={{ fontSize: "14px", marginRight: '8px' }} />
        )}
        {props.children}
      </button>
      <style jsx>{`
        button {
          padding: 12px 16px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: "Roboto";
          font-weight: 700;
          border-radius: ${props.fullRadius ? "24px" : "8px"};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${props.outlined ? colors.background : colors.primary};
          color: ${props.outlined ? "white" : colors.textOnPrimary};
          border: ${props.outlined ? "1px solid rgb(150, 150, 150)" : "none"};
          margin: 4px;
        }

        button:hover {
          cursor: pointer;
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3)
          );
        }
      `}</style>
    </>
  );
}

export default button;
