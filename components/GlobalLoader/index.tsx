import { useEffect, useState } from "react";
import { useAppSelector } from "../../utils/reduxHooks";
import Loader from "../Loader";

export default function GlobalLoader() {
  const state = useAppSelector((state) => state.globalLoader);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    setTimeout(() => setDisplay(state.show ? "flex" : "none"), 200);
  }, [state]);

  return (
    <div className="globalLoader" style={{ display }}>
      <Loader />
      <span className="loaderText">{state.text}</span>
      <style jsx>{`
        .globalLoader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 10000;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(2px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          animation: ${
            state.show ? "showLoader" : "hideLoader"
          } 200ms ease-out forwards;
        }
        .loaderText {
          margin-top: 32px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: "Roboto";
          font-weight: 700;
        }
        @keyframes showLoader {
            from {
                opacity: 0;
            }
            to {
                opacity 1;
            }
        }
        @keyframes hideLoader {
            from {
                opacity: 1;
            }
            to {
              opacity: 0;
            }
        }
      `}</style>
    </div>
  );
}
