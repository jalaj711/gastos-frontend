import { ReactNode } from "react";
import colors from "../utils/colors";

function button(props: { children: ReactNode }) {
  return (
    <>
      <button>{props.children}</button>
      <style jsx>{`
        button {
          padding: 12px 8px;
          min-width: 150px;
          max-width: 300px;
          text-align: center;
          background: ${colors.primary};
          border-radius: 4px;
          border: none;
          transition: 0.1s;
          color: ${colors.textOnPrimary};
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: 'Roboto';
          font-weight: 700;
        }

        button:hover {
          cursor: pointer;
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1)
          );
        }
      `}</style>
    </>
  );
}

export default button;
