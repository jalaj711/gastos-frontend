import { MouseEventHandler, ReactNode } from "react";
import colors from "../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function Button(props: {
  children: ReactNode;
  outlined?: boolean;
  small?: boolean;
  secondary?: boolean;
  fullRadius?: boolean;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
  disabled?: boolean;
  onClick?: MouseEventHandler
}) {
  return (
    <>
      <button onClick={props.disabled ? () => {} : props.onClick}>
        {props.startIcon && (
          <FontAwesomeIcon
            icon={props.startIcon}
            style={{ fontSize: props.small ? "12px" : "14px", marginRight: "8px" }}
          />
        )}
        {props.children}
        {props.endIcon && (
          <FontAwesomeIcon
            icon={props.endIcon}
            style={{ fontSize: props.small ? "12px" : "14px", marginLeft: "8px" }}
          />
        )}
      </button>
      <style jsx>{`
        button {
          padding: ${props.small ? "8px 12px" : "12px 16px"};
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: ${props.small ? "1px" : "2px"};
          font-family: "Roboto";
          font-weight: 700;
          border-radius: ${props.fullRadius
            ? "24px"
            : props.small
            ? "4px"
            : "8px"};
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${props.secondary ? colors.background : colors.primary};
          color: ${props.secondary ? "white" : colors.textOnPrimary};
          border: ${props.outlined ? "1px solid rgb(150, 150, 150)" : "none"};
          margin: 4px;
          cursor: ${props.disabled ? "not-allowed" : "pointer" };
          ${
            props.disabled && "filter: brightness(0.5);"
          }
        }

        button:hover {
          ${
            !props.disabled && `background-image: linear-gradient(
            rgba(255, 255, 255, ${props.secondary ? 0.1 : 0.3}),
            rgba(255, 255, 255, ${props.secondary ? 0.1 : 0.3})
          );`
          }
        }
      `}</style>
    </>
  );
}

export default Button;
