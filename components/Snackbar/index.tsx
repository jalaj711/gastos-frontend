import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/reduxHooks";
import { showSnackbarThunk } from "./snackbarThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/colors";

export default function Snackbar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.snackbar);

  useEffect(() => console.log(state), [state]);

  return (
    <div>
      <button onClick={() => dispatch(showSnackbarThunk("Some text"))}>
        Show snackbar
      </button>
      <div className="snackbar">
        <span>some text for snackbar</span>
        <button className="actionButton">button</button>
        <button className="closeButton">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <style jsx>{`
        .snackbar {
          padding: 8px 16px;
          position: fixed;
          bottom: 84px;
          left: 24px;
          background: #121212;
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.05)
          );
          border-radius: 8px;
          min-width: 200px;
          display: flex;
          align-items: center;
          width: max-content;
          max-width: 40%;

          animation: ${state.show ? "show" : "hide" } 200ms ease-out;
          animation-fill-mode: forwards;
        }
        .actionButton,
        .closeButton {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          margin: 4px;
        }

        .actionButton {
          padding: 8px 12px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: "1px";
          font-family: "Roboto";
          font-weight: 700;
          border-radius: 4px;
          color: ${colors.primary};
        }

        .closeButton {
          color: white;
          padding: 12px;
          border-radius: 50%;
          width: 36px;
          height: 36px;
        }

        button:hover {
          cursor: pointer;
          background-image: linear-gradient(
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1)
          );
        }

        @media (max-width: 768px) {
          .snackbar {
            left: 50%;
            transform: translateX(-50%);
            max-width: 90%;
          }
        }

        @keyframes show {
            from {
                bottom: -80px;
                opacity: 0;
            }
            to {
                bottom: 84px;
                opacity 1;
            }
        }
        @keyframes hide {
            from {
                bottom: 84px;
                opacity: 1;
            }
            to {
                bottom: -80px;
                opacity 0;
            }
        }
      `}</style>
    </div>
  );
}
